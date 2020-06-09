<template>
    <div id="main">
        <div id="mainHeader">
            <div class="miniSection">
                <i class="fas fa-hashtag iconHash"></i>
                <h2 class='text'>{{ name }}</h2>
            </div>
            <div class="miniSection">
                <i class="fas fa-heart iconHeart"></i>
                <h2 class="text">{{ points }}</h2>
            </div>
            <div class="miniSection">
                <i class="fas fa-fire-alt iconFlame"></i>
                <h2 class='text'>{{ taste }}%</h2>
            </div>
        </div>
        <div id="mainContent">
            <ul id="list">
                <li v-for="fruit in fruits" :key="fruit">
                    <p id="fruit">{{ fruit.name }}</p>
                </li>
            </ul>
            <p>{{ liquid.name }}</p>
            <p>{{ protein }}</p>

        </div>
    </div>
</template>
<script>
export default {
    name: 'SmoothieCard',
    props:{
        name: String,
        points: Number,
        taste: Number,
        fruits: [String],
        liquid: String,
        protein: String

    }
}
</script>
<style scoped>
    #main {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        border: 1px solid #999;
        align-items: left;
        padding: 8px 16px;
        width: 400px;
        margin: 10px;
    }
    #mainHeader {
        display: flex;
        font-weight: 400;
        justify-content: space-between;
        align-items: center;
        padding: 5px 5px;
        border-bottom:1px solid #999;
    }
    #mainContent {
        font-weight: 700;
        font-size: 1.3em;
    }
    .miniSection {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #list {
        display: flex;
    }
    #fruitWraper {
        display: flex;
    }
    #fruit {
        margin: 10px 5px 1px 0px;
    }
    .text {
        margin: 5px 8px;
    }
    .iconHash {
        color: aqua;
        font-size: 1.2em;
    }
    .iconHeart {
        color: lawngreen;
        font-size: 1.5em;
    }
    .iconFlame {
        color: tomato;
        font-size: 1.5em;
    }
</style>