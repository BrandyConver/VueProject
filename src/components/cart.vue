<template>
  <div>
    cart
    {{uper(name)}}
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      list: ['a', 'b', 'c'],
      name: 'hgw',
      fname: 1
    }
  },
  methods: {
    upper (name: string) {
      return 'name'.toUpperCase() + name;
    }
  }
})
</script>
