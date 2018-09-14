<template>
  <div class="card-panel grey lighten-5 z-depth-1">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardMenuVue',
  props:['logo', 'url', 'cor'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
