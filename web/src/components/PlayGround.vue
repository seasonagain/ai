<template>
    <div class="play-ground">
        <GameMap />
    </div>
</template>

<script>
import GameMap from './GameMap.vue'
export default {
    components: {
        GameMap,
    },
}
</script>

<style scoped>
    div.play-ground {
        width: 60%;
        height: 70vh;
        margin: 40px auto;

    }
</style>