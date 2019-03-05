<template>
  <div class="inputbox">
    <input class="input" type="text" @input="$emit('input', $event.target.value)" :value="value">
  </div>
</template>

<script>
export default {
  name: 'Inputbox',
  methods: {
    search () {
      this.$emit('my-search')
    }
  },
  props: ['value']
}
</script>

<style lang="sass" scoped>
.inputbox
  width: 100%
  height: 60px
  background: rgba(255, 155, 255, 0.7)
  display: flex
.input
  display: inline-block
  padding: 0 10px 0 50px
  border: 1px solid #666
  border-radius: 30px
  margin: 10px 20px
  flex: auto
  background: #fff url('../assets/icon/search.svg') no-repeat 10px 5px /30px 30px
  font-size: 20px
</style>
