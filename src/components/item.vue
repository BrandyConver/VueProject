<template>
  <div>
    <p>{{task.name}}</p>
    <p>{{task.det}}</p>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: ['task']
}
</script>
