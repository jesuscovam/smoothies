<template>
    <header id="header">
        <!-- <span type="img" alt="flame-emoji">🔥</span> -->
        <button id="arrowWrapper" v-on:click="goHome" v-if="show">
            <i class="fas fa-arrow-left iconArrow"></i>
        </button>
        <div id="logo">
            <span aria-label="flame icon">
                <i class="fas fa-fire-alt icon"></i>
            </span>
            <h1>Smoothie Match</h1>
            
        </div>
    </header>
</template>
<script>
export default {
    name: 'Logo',
    methods:{
        goHome(){
            this.$router.push('/')
        }
    },
    computed: {
        show: function(){
            if (this.$router.history.current.path === '/'){
                return false
            } else {
                return true
            }
        }
    }
    // add method to go back and align arrow as image
}
</script>
<style scoped>
    #header {
        display: flex;

        align-items: center;
    }
    #logo {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .icon {
        color: tomato;
        font-size: 3em;
    }
    .iconArrow{
        font-size: 3em;
        margin-right: 20px;
    }
    #arrowWrapper {
        align-self: initial;
        justify-self: start;
        background-color: white;
        border: none;
        cursor: pointer;
    }


</style>