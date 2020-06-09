<template>
    <main class="main">
        <Logo />
        <section id="cards">
            <SmoothieCard v-for="smoothie in smoothies" :key="smoothie._id"
                v-bind:name="smoothie.name"
                v-bind:points="smoothie.points"
                v-bind:taste="smoothie.taste" 
                v-bind:fruits="smoothie.fruits"
                v-bind:liquid="smoothie.liquid"
                v-bind:protein="smoothie.protein.name"/>
        </section>

    </main>
</template>
<script>
import Logo from '../components/Logo'
import SmoothieCard from '../components/SmoothieCard'
export default {
    name: 'SmoothiesList',
    components: {
        'Logo': Logo,
        'SmoothieCard': SmoothieCard,
    },
     data: function() {
        return {
            urlSmoothies: 'https://obscure-coast-72339.herokuapp.com/smoothies',
            urlDemo: 'http://localhost:5000/smoothies',
            smoothies: null,
        }
  },
    mounted() {
        try {
            fetch(this.urlSmoothies)
              .then(response => response.json().then(data => {
              this.smoothies = data
              }))
        } catch (error) {
            console.error('error fetching smoothies', error)
        }
      
    }
}
</script>
<style scoped>
    #cards {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>