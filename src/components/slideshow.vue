<template>
  <div id="slideshow">
    <div class="slidebox">
      <div v-for="(item, index) in items" :key="index" class="slide" >
        <a :href="item.link"><img :src="item.img" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slideshow',
  props: [
    'items'
  ],
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    console.log(this.items)
  }
}
</script>

<style lang="sass" scoped>
$aborder: 1px solid
#slideshow
  width: 100%
  overflow: scroll
  border: 1px solid #000
.slidebox
  width: 400%
  height: 100%
  // transform: translateX(-25%)
.slide
  width: 25%
  height: 100%
  display: inline-block
  border: 1px solid #f00
  background: #2FF
  a
    display: block
    width: 100%
    height: 100%
  img
    display: block
    width: 100%
    height: 100%

</style>
