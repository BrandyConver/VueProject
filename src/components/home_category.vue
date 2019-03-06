<template>
  <div id="category">
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueRouter',
  data () {
    return {
    }
  },
  created () {
    console.log(this.$route.params.id)
  },
  watch: {
  }
}
</script>

<style lang="sass" scoped>
</style>
