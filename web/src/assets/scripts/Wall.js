import { GameObject } from './GameObject';
export class Wall extends GameObject {
    constructor(r, c, gameMap) {
        super();
        this.r = r;
        this.c = c;
        this.gameMap = gameMap;
        this.color = '#b47225';
    }
    start() {
        
    }
    update() {
        this.render();
    }
    render() {
        if (!this.gameMap.ctx || this.gameMap.L <= 0) {
            return;
        }
        
        const L = this.gameMap.L;
        const ctx = this.gameMap.ctx;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.c * L, this.r * L, L, L);
    }
}