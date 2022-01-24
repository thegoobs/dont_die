import * as PIXI from 'pixi.js';

export default class Hud extends PIXI.Graphics {
    constructor(props) {
        super();

        this.x = props.x;
        this.y = props.y;
        this.dx = 0;
        this.dy = 0;
    }

    draw() {
        this.beginFill(0xffffff);
        this.drawCircle(this.x, this.y, 30);
        this.endFill();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
        this.clear();
    }
}