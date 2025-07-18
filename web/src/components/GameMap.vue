<template>
    <div ref="parent" class="game-map">
        <canvas ref="canvas" tabindex="0"></canvas> <!-- 设置tabindex=0，让canvas可以获得焦点 -->
    </div>
</template>

<script>
import { GameMap } from '@/assets/scripts/GameMap'
import { ref, onMounted } from 'vue'

export default {
    setup() {
        let parent = ref(null);
        let canvas = ref(null);
        let gameMap = ref(null);
        
        onMounted(() => {
            let ctx = canvas.value.getContext('2d');
            gameMap.value = new GameMap(ctx, parent.value);
            gameMap.value.updateSize();
            
            // 监听窗口大小变化
            window.addEventListener('resize', () => {
                if (gameMap.value) {
                    gameMap.value.updateSize();
                }
            });
        })
        
        return {
            parent,
            canvas,
            gameMap
        }
    },
}
</script>   

<style scoped>
    .game-map {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    canvas {
        max-width: 100%;
        max-height: 100%;
        display: block;
    }
</style>