import * as PIXI from 'pixi.js';
import { initApp } from './components/Application';
import { getCollidables } from './components/CollisionManager';
import Player from './components/Player';
import keyboard from './events/keyboard';

import './index.css';

const app = initApp();

// const controls = {
//     up: keyboard('ArrowUp'),
//     down: keyboard('ArrowDown'),
//     left: keyboard('ArrowLeft'),
//     right: keyboard('ArrowRight')
// };

const controls = {
    up: keyboard('w'),
    down: keyboard('s'),
    left: keyboard('a'),
    right: keyboard('d')
};

const player = new Player({ ...app.getCenter(), id: 'apples' });
player.init();

const hud = new PIXI.Text(app.screen.width);
hud.position.set(20, 20);
hud.style.fill = 0xffffff;

app.stage.addChild(hud);

console.log(getCollidables().map(col => col.id));

(function renderLoop() {
    app.stage.children.forEach(child => {
        child.update?.();
        child.draw?.();
    });
    hud.text = app.screen.width;
    requestAnimationFrame(renderLoop);

    if (controls.up.isPressed) {
        player.dy = -1;
    } else if (controls.down.isPressed) {
        player.dy = 1;
    } else {
        player.dy = 0;
    }
    
    if (controls.left.isPressed) {
        player.dx = -1;
    } else if (controls.right.isPressed) {
        player.dx = 1;
    } else {
        player.dx = 0;
    }
})();
