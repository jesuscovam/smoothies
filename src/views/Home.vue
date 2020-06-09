<template>
  <main class="main">
    <Logo />
    <section id="content">
      Smoothie match was designed by smootie specialists to find the perfect flavor to match your mood and...
    </section>
    <section id="action">
      <button v-on:click="goSmoothie" id="buttonCreate">Create your own smoothie</button>
      <button id="buttonList">Take me to the smoothies!</button>
    </section>
  </main>
</template>

<script>
import Logo from '../components/Logo'
export default {
  name: 'App',
  components:{
    'Logo': Logo
  },
  methods: {
    goSmoothie() {
      this.$router.push('/smoothie')
    }
  }
}
</script>

<style>
  .main {
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #content {
    border-radius: 20px;
    border: 2px solid tomato;
    width: 220px;
    padding: 20px;
    text-align: justify;
  }
  #action {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }
  #buttonCreate {
    cursor: pointer;
    background-color: white;
    padding: 10px;
    border: 2px solid lawngreen;
    border-radius: 16px;
    margin: 20px;
  }
  #buttonList {
    cursor: pointer;
    background-color: white;
    padding: 10px;
    border: 2px solid blue;
    border-radius: 16px;
    margin: 20px;
  }
</style>