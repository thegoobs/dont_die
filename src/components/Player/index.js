import Body from '../Body';

export default class Player extends Body {
    constructor(props) {
        super(props);

        Object.assign(this, props);
        this.dx = 0;
        this.dy = 0;
    }
}
