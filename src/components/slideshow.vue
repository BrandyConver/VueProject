<template>
  <div id="slideshow">
    <div>
      <a href="#" v-for="item in items" :key="item.link">
        <div class="slide" :style="{backgroundImage:item.img}">
          <p>{{item.word}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slideshow',
  props: [
    items
  ]
}
</script>

<style lang="sass" scoped>
#slideshow
  width: 100%
  height: 100%
  .slide
    width: 100%
    height: 100%
// @Keyframes slide

</style>