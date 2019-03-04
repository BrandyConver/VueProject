<template>
  <div id="home">
    <nav class="sideNav">
        <router-link to="/home/routerfirst">
          <div class="navItem">router 1</div>
        </router-link>
        <router-link to="/home/routersecond">
          <div class="navItem">router 2</div>
        </router-link>
        <router-link to="/home/routerthird">
          <div class="navItem">router 3</div>
        </router-link>
        <router-link to="/home/routerfourth">
          <div class="navItem">router 4</div>
        </router-link>
        <router-link to="/home/routerfifth">
          <div class="navItem">router 5</div>
        </router-link>
      </nav>
      <router-view class="routerVue"></router-view>
  </div>
</template>

<style lang="sass" scoped>
.sideNav
  text-align: center
  position: absolute
  top: 30px
.navItem
  width: 90px
  height: 40px
  line-height: 40px
  background: rgb(220, 220, 243)
  color: #334
.router-link-active
  .navItem
    background: rgb(30, 99, 255)
    color: #fff
.routerVue
  margin-left: 90px
</style>
