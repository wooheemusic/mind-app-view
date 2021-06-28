// import { useState } from 'react';

import { register } from 'common/cssModule';
import ArrowsJss from './ArrowsJss';
const [getClassName] = register(ArrowsJss);

export default function Arrow({ downs, dispatchKeyEvent }) {
    // const [leftHover, setLeftHover] = useState(false);
    // const [rightHover, setRightHover] = useState(false);
    // const [upHover, setUpHover] = useState(false);
    // const [downHover, setDownHover] = useState(false);

    // duplicated... ToDo
    let isLeftPressed = Boolean(downs.find(down => down.code === 'ArrowLeft'));
    let isRightPressed = Boolean(downs.find(down => down.code === 'ArrowRight'));
    let isUpPressed = Boolean(downs.find(down => down.code === 'ArrowUp'));
    let isDownPressed = Boolean(downs.find(down => down.code === 'ArrowDown'));

    function onMouseDown() {
        console.log('mouseDown - not implemented'); 
    }
    function onMouseUp() {
        console.log('mouseUp - not implemented');
    }

    return (
        <div className={getClassName('arrow-container')} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
            {/* <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" /> */}
            <svg className={getClassName('arrow-left')} viewBox="0 0 20 20">
                <polygon className={getClassName(isLeftPressed ? 'triangle-active' : 'triangle' )} points="10,1 19,19 1,19" />
            </svg>
            <svg className={getClassName('arrow-right')} viewBox="0 0 20 20">
                <polygon className={getClassName(isRightPressed ? 'triangle-active' : 'triangle' )} points="10,1 19,19 1,19" />
            </svg>
            <svg className={getClassName('arrow-up')} viewBox="0 0 20 20">
                <polygon className={getClassName(isUpPressed ? 'triangle-active' : 'triangle' )} points="10,1 19,19 1,19" />
            </svg>
            <svg className={getClassName('arrow-down')} viewBox="0 0 20 20">
                <polygon className={getClassName(isDownPressed ? 'triangle-active' : 'triangle' )} points="10,1 19,19 1,19" />
            </svg>
        </div>
    );
}