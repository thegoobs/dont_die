import * as PIXI from 'pixi.js';
import { getApp } from '../Application';

export default class CollisionBox extends PIXI.Graphics {
    constructor(props) {
        super();

        Object.assign(this, props);
    }
    
    init() {
        getApp().stage.addChild(this);
    }

    draw() {
        this.beginFill(0xff00ff);
        this.drawRect(this.x, this.y, this.w, this.h);
        this.endFill();
    }

    update() {
        this.clear();
    }

    isColliding() {
        return false;
    }
}