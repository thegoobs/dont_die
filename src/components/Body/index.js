import * as PIXI from 'pixi.js';
import { getApp } from '../Application';
import CollisionBox from '../CollisionBox';

export default class Body extends PIXI.Graphics {
    constructor({ x, y, id }) {
        super();

        this.x = x;
        this.y = y;
        this.id = id;
        this.r = 15;
        this.CollisionBox = new CollisionBox({ x: this.x - this.r / 2, y: this.y - this.r / 2, w: this.r * 2, h: this.r * 2 });
        console.log(this.x, this.y);
    }

    get id() {
        return this._id;
    }

    set id(newId) {
        this._id = newId;
    }

    init() {
        this.CollisionBox.init();
        getApp().stage.addChild(this);
    }

    draw() {
        this.CollisionBox?.draw?.();
        this.beginFill(0xffff00);
        this.drawCircle(this.x, this.y, this.r);
        this.endFill();
    }

    update() {
        if (!this.CollisionBox?.isColliding?.()) {
            this.x += this.dx;
            this.y += this.dy;
            this.CollisionBox.x += this.dx;
            this.CollisionBox.y += this.dy;
            this.CollisionBox?.update?.();
        }
        this.clear();
    }
}