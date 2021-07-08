import useViewport from 'common/domStates/useViewport';

import useKeyEventReducer from 'mindCore/states/useKeyEventReducer';
import useKeyToNumberInput from 'mindCore/states/useKeyToNumberInput';
import getMediaClassName from 'mindCore/styles/getMediaClassName';

import { register } from 'common/cssModule';
import keysJss from './keysJss';
const [getClassName] = register(keysJss);

// 'Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9',
// 'Enter', 'Backspace',

export default function Numbers() {

    const [keyEvents] = useKeyEventReducer();
    const { downs } = keyEvents;

    let is0Pressed = Boolean(downs.find(down => down.code === 'Digit0'));
    let is1Pressed = Boolean(downs.find(down => down.code === 'Digit1'));
    let is2Pressed = Boolean(downs.find(down => down.code === 'Digit2'));
    let is3Pressed = Boolean(downs.find(down => down.code === 'Digit3'));
    let is4Pressed = Boolean(downs.find(down => down.code === 'Digit4'));
    let is5Pressed = Boolean(downs.find(down => down.code === 'Digit5'));
    let is6Pressed = Boolean(downs.find(down => down.code === 'Digit6'));
    let is7Pressed = Boolean(downs.find(down => down.code === 'Digit7'));
    let is8Pressed = Boolean(downs.find(down => down.code === 'Digit8'));
    let is9Pressed = Boolean(downs.find(down => down.code === 'Digit9'));
    let isEnterPressed = Boolean(downs.find(down => down.code === 'Enter'));
    let isBackspacePressed = Boolean(downs.find(down => down.code === 'Backspace'));

    useKeyToNumberInput(keyEvents); // keyEvents to useEffect

    const { x } = useViewport();

    return (
        <div className={getClassName('key-container')}>
            <div className={is1Pressed ? getClassName(getMediaClassName(x, 'key-active')) : getClassName(getMediaClassName(x, 'key'))}>1</div>
            <div className={is2Pressed ? getClassName(getMediaClassName(x, 'key-active')) : getClassName(getMediaClassName(x, 'key'))}>2</div>
            <div className={is3Pressed ? getClassName(getMediaClassName(x, 'key-active')) : getClassName(getMediaClassName(x, 'key'))}>3</div>
            <div className={is4Pressed ? getClassName(getMediaClassName(x, 'key-active')) : getClassName(getMediaClassName(x, 'key'))}>4</div>
            <div className={is5Pressed ? getClassName(getMediaClassName(x, 'key-active')) : getClassName(getMediaClassName(x, 'key'))}>5</div>
            <div className={is6Pressed ? getClassName(getMediaClassName(x, 'key-active')) : getClassName(getMediaClassName(x, 'key'))}>6</div>
            <div className={is7Pressed ? getClassName(getMediaClassName(x, 'key-active')) : getClassName(getMediaClassName(x, 'key'))}>7</div>
            <div className={is8Pressed ? getClassName(getMediaClassName(x, 'key-active')) : getClassName(getMediaClassName(x, 'key'))}>8</div>
            <div className={is9Pressed ? getClassName(getMediaClassName(x, 'key-active')) : getClassName(getMediaClassName(x, 'key'))}>9</div>
            <div className={is0Pressed ? getClassName(getMediaClassName(x, 'key-active')) : getClassName(getMediaClassName(x, 'key'))}>0</div>
            <div className={isBackspacePressed ? getClassName(getMediaClassName(x, 'key-active')) : getClassName(getMediaClassName(x, 'key'))}>-</div>
            <div className={isEnterPressed ? getClassName(getMediaClassName(x, 'key-active')) : getClassName(getMediaClassName(x, 'key'))}>L</div>
        </div>
    );
}