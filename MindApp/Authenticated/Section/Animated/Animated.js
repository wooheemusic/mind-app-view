import { useState, useEffect } from 'react';

import useKeyEvent from 'common/domStates/useKeyEvent';

export default function Animated(props) {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const [{ downs }, dispatchKeyEvent] = useKeyEvent();

    // duplicated... ToDo
    let isLeftPressed = Boolean(downs.find(down => down.code === 'ArrowLeft'));
    let isRightPressed = Boolean(downs.find(down => down.code === 'ArrowRight'));
    let isUpPressed = Boolean(downs.find(down => down.code === 'ArrowUp'));
    let isDownPressed = Boolean(downs.find(down => down.code === 'ArrowDown'));

    useEffect(() => {
        let id = -1;
        if (isLeftPressed) {
            id = setInterval(() => setX(x => x - 1), 10)
        };
        return () => {
            id !== -1 && clearInterval(id);
        }
    }, [isLeftPressed])

    useEffect(() => {
        let id = -1;
        if (isRightPressed) {
            id = setInterval(() => setX(x => x + 1), 10)
        };
        return () => {
            id !== -1 && clearInterval(id);
        }
    }, [isRightPressed])

    useEffect(() => {
        let id = -1;
        if (isUpPressed) {
            id = setInterval(() => setY(y => y - 1), 10)
        };
        return () => {
            id !== -1 && clearInterval(id);
        }
    }, [isUpPressed])

    useEffect(() => {
        let id = -1;
        if (isDownPressed) {
            id = setInterval(() => setY(y=> y + 1), 10)
        };
        return () => {
            id !== -1 && clearInterval(id);
        }
    }, [isDownPressed])

    return (
        <div style={{ transform: `translate(${x}px, ${y}px)` }}>
            'Animated'
        </div>
    );
}