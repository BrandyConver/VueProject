<template>
  <div id="cart">
    <div class="c1">
      <a href="">ccca </a>
      <a href="">cccs </a>
      <a href="">cccd </a>
    </div>
    <div>
      <button @click="changeComp">change comp</button>
      <button @click="show=!show">v-show</button>
      <div class="testdiv1">
        <transition name="iscomp" mode="out-in">
          <component class="absoluted"  :is="compNow" :key="compNow" ></component>
        </transition>
      </div>
      <div class="testdiv2">
        <transition name="vname" mode="out-in">
          <p class="pc" v-if="show" :key="show">hello</p>
          <p class="pc" v-else key="1show">world</p>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import compA from './routerfourth.vue'
import compB from './routerfifth.vue'
export default {
  data () {
    return {
      count: 0,
      show: true
    }
  },
  methods: {
    changeComp () {
      this.count++
    }
  },
  computed: {
    compNow () {
      const comps = ['compA', 'compB']
      return comps[this.count % 2]
    }
  },
  components: {
    compA,
    compB
  }
}
</script>
<style lang="sass" scoped>
$border1: solid 1px #666 //注释
@mixin mymixin
  border-radius: 5px
  border: 1px solid #ddd
@mixin myabsolute($top, $left)
  margin: 0 auto
  width: 150px
  height: 3em
  @include mymixin
  position: absolute
  top: $top
  left: $left
  text-align: center
  overflow: hidden
.c1
  font-size: 20px
  @include mymixin
.toggle
  margin: 0 auto
  width: 100px
  @include mymixin
.iscomp-enter-active
  transition: 1s
  background: red
.iscomp-leave-active
  transition: 1s
  background: green
.iscomp-enter
  transform: translate(-100%,0)
.iscomp-leave-to
  transform: translate(100%,0)
.vname-enter-active, .vname-leave-active
  background: lightgreen
  transition: 1s
.vname-enter
  transform: translate(-100%,0)
  // opacity: 0
.vname-leave-to
  transform: translate(100%,0)
  // opacity: 0
.testdiv1
  @include myabsolute(90px, 120px)
.testdiv2
  @include myabsolute(150px, 120px)
.pc
  position: absoluted
  top: 0
  left: 20px
</style>
