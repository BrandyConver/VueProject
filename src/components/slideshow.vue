<template>
  <div id="slideshow">
    <div class="slidebox">
      <div v-for="(item, index) in myslideitems" :key="index" class="slide" >
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
    myslideitems () {
      const myitems = this.items
      myitems.push(myitems[0])
      return myitems
    }
  },
  created () {
  }
}
</script>

<style lang="sass" scoped>
$aborder: 1px solid
#slideshow
  width: 100%
  overflow: hidden
  // border: 1px solid #000
.slidebox
  width: 500%
  height: 100%
  animation: mySlide 10s cubic-bezier(0.5, 0, 0.5, 1) 0.5s infinite backwards
.slide
  width: 20%
  height: 100%
  display: inline-block
  // border: 1px solid #f00
  a
    display: block
    width: 100%
    height: 100%
  img
    display: block
    width: 100%
    height: 100%
@Keyframes mySlide
  0%
    transform: translateX(0%)
  15%
    transform: translateX(-20%)
  25%
    transform: translateX(-20%)
  40%
    transform: translateX(-40%)
  50%
    transform: translateX(-40%)
  65%
    transform: translateX(-60%)
  75%
    transform: translateX(-60%)
  90%
    transform: translateX(-80%)
  100%
    transform: translateX(-80%)
</style>
