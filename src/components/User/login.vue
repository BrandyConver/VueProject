<template>
  <div id="sign">
    <div class="login" v-show="isLogin">
      <input type="text" v-model="userName" class="inputLine">
      <input type="password" v-model="password" class="anotherLine">
      <a class="reve"  @click="reverse">注册>></a>
      <button class="primarybtn"  @click="login">登录</button>
    </div>
    <div class="register" v-show="!isLogin">
      <input type="text" v-model="userName" class="inputLine">
      <input type="text" v-model="password" class="anotherLine">
      <span class="reve like-a" @click="reverse">登录>></span>
      <button class="primarybtn" @click="register">注册</button>
    </div>
    <div class="submit"></div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      isLogin: true,
      userName: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this.userName, this.password)
    },
    register () {
      console.log(this.userName, this.password)
    },
    reverse () {
      this.isLogin = !this.isLogin
      this.userName = ''
      this.password = ''
      console.log(this.isLogin)
    }
  }
})
</script>

<style lang="sass" scoped>
@import "../../style/primary.sass"
@mixin lineText($width, $height, $marginTB: 10px)
  display: block
  width: $width
  height: $height
  padding: 2px 5px
  margin: $marginTB auto
  &:focus
    outline: 1px solid #0f0
.inputLine
  @include lineText($width:70%,$height:30px,$marginTB:20px)
.anotherLine
  @include lineText(70%, 30px)
a
  color: blue
  font-size: 14px
.like-a
  @extend a
.reve
  float: right
  padding-right: 20px
</style>
