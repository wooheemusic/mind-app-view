import Arrows from './Arrows';
import Keys from './Keys';
import Instruction from './Instruction';

import { register } from 'common/cssModule';
import controllerJss from './controllerJss';
const [getClassName] = register(controllerJss);

export default function Controller() {
    return (
        <div className={getClassName('controller')}>
            <Arrows />
            <Keys />
            <Instruction />
        </div>
    );
}