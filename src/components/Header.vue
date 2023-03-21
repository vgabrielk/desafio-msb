<script>
export default {
    data() {
        return {
            logo: '🌎'
        }
    }
}
</script>
<template>
    <header class="header">
        <div class="logo">
            <p>{{ logo }}</p>
            <h4>Desafio MSB</h4>
        </div>
        <div>

        </div>
    </header>
</template>
<style lang="scss" scoped>
.header {
    height: 13vh;
    width: 100%;
    background-color: #111;
    display: flex;
    align-items: center;
    padding: 0 4rem;
    box-sizing: border-box;
    box-shadow: 1px 1px 12px black;

    .logo {
        font-size: 2rem;
        display: flex;
        align-items: center;
        gap: 10px;

        h4 {
            font-size: 1rem;
            color: #fff;
        }
    }
}
</style>