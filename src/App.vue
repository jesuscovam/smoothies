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
 ul {
   list-style: none;
   margin: 0;
   padding: 0;
 }
</style>

