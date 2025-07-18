import { GameObject } from './GameObject';
import { Wall } from './Wall';
import { Snake } from './Snake';
export class GameMap extends GameObject {
    constructor(ctx, parent) {
        super();
        this.ctx = ctx;
        this.parent = parent;
        this.L = 0;
        this.rows = 15;
        this.cols = 15;
        this.inner_walls_count = 20;
        this.walls_created = false; // 添加标志位，防止重复创建墙
        this.walls = []; // 存储所有墙的实例
        this.snakes = [
            new Snake({id: 0, color: 'red',r: this.rows - 2, c: 1},this),
            new Snake({id: 1, color: 'blue',r: 1, c: this.cols - 2},this),
        ]
    }
    next_step(){ // 让两条蛇进入下一回合
        for (const snake of this.snakes){
            snake.next_step();
        }
    }
    check_valid(cell) {  // 检测目标位置是否合法：没有撞到两条蛇的身体和障碍物
        for (const wall of this.walls) {
            if (wall.r === cell.r && wall.c === cell.c)
                return false;
        }

        for (const snake of this.snakes) {
            let k = snake.cells.length;
            if (!snake.check_tail_increasing()) {  // 当蛇尾会前进的时候，蛇尾不要判断
                k -- ;
            }
            for (let i = 0; i < k; i ++ ) {
                if (snake.cells[i].r === cell.r && snake.cells[i].c === cell.c)
                    return false;
            }
        }

        return true;
    }

    add_listening_events(){
        this.ctx.canvas.focus(); // 聚焦
        const [snake0, snake1] = this.snakes; 
        this.ctx.canvas.addEventListener('keydown', e => {
            if (e.key === 'w'){
                snake0.set_direction(0);
            }
            else if (e.key === 'd'){
                snake0.set_direction(1);
            }
            else if (e.key === 's'){
                snake0.set_direction(2);
            }
            else if (e.key === 'a'){    
                snake0.set_direction(3);
            }
            else if (e.key === 'ArrowUp'){
                snake1.set_direction(0);
            }
            else if (e.key === 'ArrowRight'){ 
                snake1.set_direction(1);
            }
            else if (e.key === 'ArrowDown'){
                snake1.set_direction(2);
            }
            else if (e.key === 'ArrowLeft'){    
                snake1.set_direction(3);
            }
        })
    }
    check_ready(){
        // this.cells[0].x += this.speed * this.timedelta / 1000;
        for (const snake of this.snakes){
            if (snake.status !== 'idle'){
                return false;
            }
            if (snake.direction === -1){
                return false;
            }
        }
        return true;
    }
    create_walls() {
        // 创建边界墙
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (r === 0 || r === this.rows - 1 || c === 0 || c === this.cols - 1) {
                    new Wall(r, c, this);
                }
            }
        }
        // 创建对角线对称的内部墙
        for (let i = 0; i < this.inner_walls_count / 2; i++) {
            for (let j = 0; j < 1000; j++) {
                let r = parseInt(Math.random() * this.rows);
                let c = parseInt(Math.random() * this.cols);
                
                // 避免放在边界和对角线中心点上
                if (r === 0 || r === this.rows - 1 || c === 0 || c === this.cols - 1) {
                    continue;
                }
                if (r === c && r === parseInt(this.rows / 2)) {
                    continue;
                }
                if (r == this.rows - 2 && c == 1 || r == 1 && c == this.cols - 2) {
                    continue;
                }
                // 创建对称的一对墙
                new Wall(r, c, this);
                new Wall(c, r, this); // 沿主对角线对称
                break;
            }
        }
       
    }
    start() {
        this.add_listening_events();
    }
    
    updateSize() {
        // 获取容器的实际尺寸，留出一些边距
        const containerWidth = this.parent.clientWidth * 0.9; // 留出10%边距
        const containerHeight = this.parent.clientHeight * 0.9; // 留出10%边距
        
        // 计算每个格子的大小，确保棋盘是正方形且不超出容器
        this.L = parseInt(Math.min(containerWidth / this.cols, containerHeight / this.rows));
        
        // 设置画布尺寸
        this.ctx.canvas.width = this.L * this.cols;
        this.ctx.canvas.height = this.L * this.rows;
        
        // 在第一次 updateSize 后创建墙
        if (!this.walls_created && this.L > 0) {
            this.create_walls();
            this.walls_created = true;
        }
    }
    update() {
        if (this.check_ready()){
            this.next_step();
        }
        this.render();
        
        // 更新蛇的渲染
        for (const snake of this.snakes) {
            snake.update();
        }
    }
    render() {
        const color_even = '#a2d048';
        const color_odd = '#aad751';
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.ctx.fillStyle = (row + col) % 2 === 0 ? color_even : color_odd;
                this.ctx.fillRect(col * this.L, row * this.L, this.L, this.L);
            }
        }
    }
}