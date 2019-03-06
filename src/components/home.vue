<template>
  <div id="home">
    <inputBox class="searchbox"></inputBox>
    <slideShow :items="slideitmes" class="slideShow"></slideShow>
  </div>
</template>

<script>
import inputBox from './inputbox.vue'
import slideShow from './slideshow.vue'
export default {
  name: 'home',
  components: {
    inputBox,
    slideShow
  },
  data () {
    return {
      slideitmes: [
        { link: 'https://www.baidu.com', img: require('../assets/img/exampleimg1.jpg'), word: 'this is word 1' },
        { link: 'https://www.zhihu.com', img: require('../assets/img/exampleimg2.jpg'), word: 'this is word 2' },
        { link: 'http://daily.zhihu.com', img: require('../assets/img/exampleimg3.jpg'), word: 'this is word 3' },
        { link: 'https://nba.hupu.com/', img: require('../assets/img/exampleimg4.jpg'), word: 'this is word 4' }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
#home
  width: 100%
.searchbox
  position: fixed
  top: 0
  width: 100%
  z-index: 99
  // box-shadow: 0 0 5px 8px rgba(255, 255, 255, 0.7)
.slideShow
  width: 100%
  height: 200px
  position: absolute
  top: 0
  left: 0
  right: 0
</style>
