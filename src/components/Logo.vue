<template>
    <div id="logo">
        <!-- <span type="img" alt="flame-emoji">🔥</span> -->
        <span aria-label="flame icon">
            <i class="fas fa-fire-alt icon"></i>
        </span>
        <h1>Smoothie Match</h1>
    </div>
</template>
<script>
export default {
    name: 'Logo',
}
</script>
<style scoped>
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


</style>