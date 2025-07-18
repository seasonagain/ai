const gameObjects = [];

export class GameObject {
    constructor() {
        gameObjects.push(this);
        this.timedelta = 0;  // 当前帧距离上一帧的时间间隔
        this.has_called_start = false;
    }
    start() {  // 创建的时候执行一次
    }
    update() {  // 每帧执行一次，除了第一帧
    }
    onDestroy() {  // 销毁前执行一次
        
    }
    destroy() {  // 销毁
        this.onDestroy();
        for (let i = 0; i < gameObjects.length; i++) {
            if (gameObjects[i] === this) {
                gameObjects.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp = 0; // 上一次执行的时刻
// 递归调用创建持续的动画循环
const step = (timestamp) => {
    for (let i = 0; i < gameObjects.length; i++) {
        let obj = gameObjects[i];
        if (!obj.has_called_start) {
            obj.start();
            obj.has_called_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(step);
}
requestAnimationFrame(step);