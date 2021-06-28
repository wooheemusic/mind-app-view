import { memo } from 'react';
import useKeyEvent from 'common/domStates/useKeyEvent';

import Arrows from './Arrows';
import Numbers from './Numbers';
import Instruction from './Instruction';

import { register } from 'common/cssModule';
import controllerJss from './controllerJss';
const [getClassName] = register(controllerJss);

export default memo(function Controller(props) {
    const [{ downs, up }, dispatchKeyEvent] = useKeyEvent();

    return (
        <div className={getClassName('controller')}>
            <Arrows downs={downs} dispatchKeyEvent={dispatchKeyEvent} />
            <Numbers downs={downs} up={up} dispatchKeyEvent={dispatchKeyEvent} />
            <Instruction />
        </div>
    );
})