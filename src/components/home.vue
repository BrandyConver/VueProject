<template>
  <div id="home" :style="{minHeight:minheight+'px'}">
    <inputBox class="searchbox"></inputBox>
    <slideShow :items="slideitmes" class="slideShow"></slideShow>
    <div class="space"></div>
    <div class="categorys">
      <category class="categoryItem" v-for="(item, index) in categoryitem" :key="index" :categoryitem="item">{{item.title}}</category>
    </div>
  </div>
</template>

<script>
import inputBox from './inputbox.vue'
import slideShow from './slideshow.vue'
import category from './home_category.vue'
export default {
  name: 'home',
  components: {
    inputBox,
    slideShow,
    category
  },
  data () {
    return {
      slideitmes: [
        { link: 'https://www.baidu.com', img: require('../assets/img/exampleimg1.jpg'), word: 'this is word 1' },
        { link: 'https://www.zhihu.com', img: require('../assets/img/exampleimg2.jpg'), word: 'this is word 2' },
        { link: 'http://daily.zhihu.com', img: require('../assets/img/exampleimg3.jpg'), word: 'this is word 3' },
        { link: 'https://nba.hupu.com/', img: require('../assets/img/exampleimg4.jpg'), word: 'this is word 4' }
      ],
      categoryitem: [
        { link: 'https://www.baidu.com', img: require('../assets/img/京东支付.png'), title: '京东支付' },
        { link: 'https://www.baidu.com', img: require('../assets/img/京东支付.png'), title: '京东支付' },
        { link: 'https://www.baidu.com', img: require('../assets/img/京东支付.png'), title: '京东支付' },
        { link: 'https://www.baidu.com', img: require('../assets/img/京东到家.png'), title: '京东到家' },
        { link: 'https://www.baidu.com', img: require('../assets/img/京东到家.png'), title: '京东到家' },
        { link: 'https://www.baidu.com', img: require('../assets/img/京东白条.png'), title: '京东白条' },
        { link: 'https://www.baidu.com', img: require('../assets/img/京东支付.png'), title: '京东支付' },
        { link: 'https://www.baidu.com', img: require('../assets/img/京东支付.png'), title: '京东支付' },
        { link: 'https://www.baidu.com', img: require('../assets/img/京东白条.png'), title: '京东白条' },
        { link: 'https://www.baidu.com', img: require('../assets/img/京东白条.png'), title: '京东白条' }
      ],
      minheight: 99
    }
  },
  created () {
    this.minheight = window.innerHeight - 200
  }
}
</script>

<style lang="sass" scoped>
@minxin slimbrd
  border: 1px solid #666
$mrgtop: 200px
#home
  width: 100%
  min-height: 100%
  background-color: #eee
.searchbox
  position: fixed
  top: 0
  width: 100%
  z-index: 99
.slideShow
  width: 100%
  height: $mrgtop
  position: absolute
  top: 0
  left: 0
  right: 0
.space
  height: 5px
  margin-top: $mrgtop
.categorys
  border-top-left-radius: 8px
  border-top-right-radius: 8px
  margin: 0 5px
  display: flex
  justify-content: space-between
  flex-wrap: wrap
.categoryItem
  background-color: #fff
  margin: 2px 0
  padding: 5px
  width: 19%
  height: 18%
  text-align: center
  font-size: 14px
  &:first-child
    border-top-left-radius: 10px
  &:nth-child(5)
    border-top-right-radius: 10px
</style>
