import { getApp } from '../Application';

const getCollidables = ()  => (
    getApp().stage.children.filter(child => child.CollisionBox)
);

const findCollidableById = id => (
    getCollidables().filter(obj => obj?.id === id)?.[0]
);

export { getCollidables, findCollidableById };
