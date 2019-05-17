<template>
  <div id="self">
    <section class="user" @click="showMore=false">
      <div class="moreoperate" @click.stop="showMore=!showMore">
        . . .
      </div>
      <div class="showmore" v-show="showMore" @click="signOut">
        <span>operate1</span>
        <span >operate2</span>
        <span @touchStart="signOut">退出登录</span>
      </div>
      <div class="userinfo">
        <div class="headimg">
          <img src="../assets/logo.png" alt="img" width="100%" >
        </div>
        <p class="centertext" v-show="status!=='unSigned'">{{userName}}</p>
        <a class="centertext" href="/user/login" v-show="status=='unSigned'">login</a>
      </div>
    </section>
    <section class="orderNav">
      <div class="order unpay">待付款</div>
      <div class="order">待收货</div>
      <div class="order">待评价</div>
      <div class="order">全部订单</div>
    </section>
    <button @click="signOut">signOut</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default ({
  data () {
    return {
      showMore: false
    }
  },
  methods: {
    signOut (e) { // 无效?
      console.log(this.userName)
      this.$store.commit('signUp')
      console.log(e)
    },
    eg (e) {
      console.log(e)
    }
  },
  computed: {
    // userName: function () {
    //   return this.$store.state.user.userName
    // }
    ...mapState({
      userName: state => state.user.userName,
      status: state => state.user.status
    })
  }
})
</script>

<style lang="sass" scoped>
$baseborder: 1px solid #666
@mixin floatTip($num)
  &:before
    @include textcenter
    color: #fff
    font-size: 0.8em
    content: $num
    position: absolute
    top: -5px
    right: -5px
    width: 15px
    line-height: 15px
    height: 15px
    border-radius: 8px
    background: #d00
@mixin textcenter
  text-align: center
  margin: 0 auto
.centertext
  @include textcenter
.user, .orderNav
  height: 240px
  padding: 0 2%
.user
  background: #b0d0af
.userinfo
  text-align: center
  position: relative
  top: 40px
  width: 130px
  margin: 0 auto
.headimg
  margin: 0 auto
  width: 120px
  height: 120px
  border-radius: 60px
  border: 3px solid #fff
  overflow: hidden
.moreoperate
  position: absolute
  top: 0
  right: 5px
  padding-bottom: 5px
  font-weight: 900
.showmore
  background: rgba(255,255,255,0.9)
  border-radius: 5px
  position: absolute
  right: 6px
  top: 25px
  width: 80px
  box-shadow: 0 0 8px rgba(255,255,255,0.6)
  span
    border-top: $baseborder
    text-align: center
    display: block
    margin: 5px
    &:first-child
      border-top: none
      margin-top: 0
.order
  border: $baseborder
  display: inline-block
  width: 21%
  height: 60px
  margin: 2%
  position: relative
.order:not(:last-child)
  @include floatTip('3')
.unpay
  @include floatTip('1')
</style>
