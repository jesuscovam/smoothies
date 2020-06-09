<template>
  <router-view>
    <Home/>
  </router-view>
</template>

<script>
import Home from './views/Home'
export default {
  name: 'App',
  components:{
    'Home': Home
  }
}
</script>
<style>
 body {
   font-family: 'Roboto', sans-serif;
 }
</style>

