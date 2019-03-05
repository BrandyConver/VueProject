<template>
  <div id="app">
    <div class="tabBar">
      <div class="nav">
        <router-link to="/home"><div class="navItem">home</div></router-link>
        <router-link to="/trolly"><div class="navItem">trolly</div></router-link>
        <router-link to="/my"><div class="navItem">my</div></router-link>
      </div>
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
  padding: 0
a
  text-decoration: none
  color: #000
input
  outline: none
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
    flex: auto
.router-link-active
  .navItem
    background: #5be
</style>
