import * as PIXI from 'pixi.js';

let app;
const getApp = () => app;
const initApp = () => {
    app = new PIXI.Application({ resizeTo: window });
    app.getCenter = () => ({ x: app.screen.width / 4, y: app.screen.height / 4 });

    document.body.appendChild(app.view);

    return app;
};

export { getApp, initApp };
