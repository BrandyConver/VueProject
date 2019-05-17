<template>
  <div id="category">
    <div>
      <a :href="categoryitem.link">
        <img :src="categoryitem.img" alt="">
      </a>
    </div>
    <slot>dft slot</slot>
  </div>
</template>

<script>
export default {
  name: 'VueRouter',
  props: [ 'categoryitem' ],
  data () {
    return {
    }
  },
  created () {
    // console.log(this.$route.params.id)
  },
  watch: {
  }
}
</script>

<style lang="sass" scoped>
img
  // width: 100%
  // height: 100%
slot
  // position: absolute
  // bottom: 10px
  // width: 100%
  // height: 25%
  // text-align: center
  // font-size: 12px
</style>
