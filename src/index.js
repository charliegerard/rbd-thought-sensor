import React, {useCallback, useEffect} from 'react';

let preDrag, actions;
let counter = 0;

const thoughtSensor = (api) => {
    let ws = new WebSocket(`ws://localhost:3030`);
    ws.onopen = () => {
        console.log('WebSocket connection established');
    }

    const start = useCallback(async function start(event) {
        (event.data === 'disappear') && setDisplay(false);

        if (event.data === 'tab-forward') {
            counter += 1;
            document.querySelectorAll("[data-rbd-draggable-id=task-" + counter + "]")[0].focus();
        } else {
            if (event.data === 'select') {
                preDrag = api.tryGetLock(`task-${counter}`);
                actions = preDrag.snapLift();
            }
    
            if (!preDrag) {
                return;
            } else {
                if (actions) {
                    const { moveUp, moveDown, moveLeft, moveRight, drop } = actions;

                    switch (event.data) {
                        case 'down':
                            await delay(moveDown);
                            await delay(drop);
                            break;
                        case 'up':
                            await delay(moveUp);
                            await delay(drop);
                            break;
                        case 'left':
                            await delay(moveLeft);
                            await delay(drop);
                            break;
                        case 'right':
                            await delay(moveRight);
                            await delay(drop);
                            break;
                        case 'drop':
                            await delay(drop);
                            break;
                        default:
                            break;
                    }
                }
                preDrag.abort();
            }
        }
    }, [api]);

    useEffect(() => {
        ws.onmessage = (event) => start(event);
        return () => { }
    }, [start]);
}

export default thoughtSensor;