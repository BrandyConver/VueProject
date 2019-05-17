<template>
  <div id="app">
    <div class="tabBar">
      <div class="nav" v-show="isNavUrl">
        <router-link to="/home"><div class="navItem">home</div></router-link>
        <router-link to="/cart"><div class="navItem">cart</div></router-link>
        <router-link to="/my"><div class="navItem">my</div></router-link>
      </div>
    </div>
    <section>
      <router-view class="viewp"></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isNavUrl: true
    }
  },
  components: {
  },
  methods: {
  },
  watch: {
    $route (to, from) {
      if (['/home', '/cart', '/my', '/'].indexOf(to.path) >= 0) {
        this.isNavUrl = true
      } else {
        this.isNavUrl = false
      }
    }
  }
}
</script>

<style lang="sass">
body
  margin: 0
  padding: 0
a
  text-decoration: none
  color: #000
input
  outline: none
*
  box-sizing: border-box
</style>

<style lang="sass" scoped>
.tabBar
  position: fixed
  bottom: 0
  width: 100%
  background: #fff
  color: #000
  text-align: center
.nav
  display: flex
  height: 50px
  line-height: 50px
  justify-content: space-between
  *
    flex: 1
.router-link-active
  .navItem
    background: #5be
.viewp
  width: 100%
</style>
