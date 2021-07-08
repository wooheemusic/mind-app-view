import { useRef } from 'react';
import useViewport from 'common/domStates/useViewport';
import useArrowKeyEventReducer from 'mindCore/states/useArrowKeyEventReducer';
import getMediaClassName from 'mindCore/styles/getMediaClassName';


import { register } from 'common/cssModule';
import ArrowsJss from './ArrowsJss';
const [getClassName] = register(ArrowsJss);

export default function Arrow() {
    const [{ downs, up }, dispatchKeyEvent] = useArrowKeyEventReducer();

    // const [leftHover, setLeftHover] = useState(false);
    // const [rightHover, setRightHover] = useState(false);
    // const [upHover, setUpHover] = useState(false);
    // const [downHover, setDownHover] = useState(false);

    // duplicated... ToDo
    let isLeftPressed = Boolean(downs.find(down => down.code === 'ArrowLeft'));
    let isRightPressed = Boolean(downs.find(down => down.code === 'ArrowRight'));
    let isUpPressed = Boolean(downs.find(down => down.code === 'ArrowUp'));
    let isDownPressed = Boolean(downs.find(down => down.code === 'ArrowDown'));

    const arrows = useRef({});
    // obligate factors
    // 

    // directional factors to be considered (make it switchable later....)
    // 1. more than one touch cancel all events
    // 2. To Keep on touching the screen and move to another triggers a press.
    // 3.

    //{timeStamp: 1350014.100000143, type: "keyup", code: "Digit1", key: "1"}
    function touchStart(e, code = 'ArrowLeft') {
        // const calc = document.elementFromPoint(t.pageX - window.scrollX, t.pageY - window.scrollY);
        // const t = e.touches[0]; // just take one
        dispatchKeyEvent({ type: 'keydown', timeStamp: e.timeStamp, code, key: code })
    }

    function touchMove(e, code = 'ArrowLeft') {

    }

    const { x } = useViewport();

    return (
        <div className={getClassName(getMediaClassName(x, 'arrow-container'))}>
            {/* <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" /> */}
            <svg className={getClassName(getMediaClassName(x, 'arrow-left'))} viewBox="0 0 20 20">
                <polygon ref={node => { arrows.current.left = node }} className={getClassName(isLeftPressed ? 'triangle-active' : 'triangle')} points="10,1 19,19 1,19"
                // {...collectMouseEvent} 
                />
            </svg>
            <svg className={getClassName(getMediaClassName(x, 'arrow-right'))} viewBox="0 0 20 20" >
                <polygon ref={node => arrows.current.right = node} className={getClassName(isRightPressed ? 'triangle-active' : 'triangle')} points="10,1 19,19 1,19"
                // {...collectTouchEvent}
                />
            </svg>
            <svg className={getClassName(getMediaClassName(x, 'arrow-up'))} viewBox="0 0 20 20">
                <polygon className={getClassName(isUpPressed ? 'triangle-active' : 'triangle')} points="10,1 19,19 1,19" />
            </svg>
            <svg className={getClassName(getMediaClassName(x, 'arrow-down'))} viewBox="0 0 20 20">
                <polygon className={getClassName(isDownPressed ? 'triangle-active' : 'triangle')} points="10,1 19,19 1,19"
                // {...collectTouchEvent} {...collectMouseEvent} 
                />
            </svg>
        </div>
    );
}