<template>
  <div class="hello">
    <products/>
  </div>
</template>

<script>
import Products from './Products'
export default {
  name: 'Home',
  components: {Products},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 2000px;
}
</style>
