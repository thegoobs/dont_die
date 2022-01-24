export default function keyboard(value) {
    const key = {
        value,
        isPressed: false,
        isReleased: true,
        press: undefined,
        release: undefined,
        downHandler: event => {
            if (event.key === key.value) {
                if (key.isReleased && key.press) {
                    key.press();
                }
                key.isPressed = true;
                key.isReleased = false;
                event.preventDefault();
            }
        },
        upHandler: event => {
            if (event.key === key.value) {
                if (key.isPressed && key.release) {
                    key.release();
                }
                key.isPressed = false;
                key.isReleased = true;
                event.preventDefault();
            }
        }
    };
    
    //Attach event listeners
    const downListener = key.downHandler.bind(key);
    const upListener = key.upHandler.bind(key);
    
    window.addEventListener("keydown", downListener, false);
    window.addEventListener("keyup", upListener, false);
    
    // Detach event listeners
    key.unsubscribe = () => {
        window.removeEventListener("keydown", downListener);
        window.removeEventListener("keyup", upListener);
    };
    
    return key;
}
