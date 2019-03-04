<template>
  <div id="app">
    <div class="topbar">
      <div class="topNav">
        <router-link to="/home"><div class="navItem">home</div></router-link>
        <router-link to="/guide"><div class="navItem">guide</div></router-link>
        <router-link to="/about"><div class="navItem">about</div></router-link>
      </div>
      <div class="logReg"><a href=""><span>log in</span></a><a href=""><span>register</span></a></div>
    </div>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="sass">

body
  margin: 0
a
  text-decoration: none
  color: #000
</style>

<style lang="sass" scoped>
#app
  margin-top: 30px
.topbar
  display: flex
  height: 30px
  position: fixed
  top: 0
  width: 100%
  min-width: 500px
  background: linear-gradient(90deg, #8df, #59d, #59d, #59d, #59d, #59d, #59d, #8df)
  color: #000
  text-align: center
  justify-content: space-between
.topNav
  display: flex
  width: 200px
  height: 30px
  line-height: 30px
  justify-content: space-between
  color: #000 !important
  margin-left: 20%
  *
    flex: auto
.router-link-active
  .navItem
    background: #36a
    color: #fff
.logReg
  display: flex
  margin-right: 20%
  width: 150px
  justify-content: space-between
  height: 30px
  line-height: 30px
</style>
