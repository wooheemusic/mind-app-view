import { register } from 'common/cssModule';
import containerJss from './containerJss';
const [ getClassName ] = register(containerJss);

export default function Container(props) {
    return (
    <div className={getClassName('container')}>
        {props.children}
    </div>
    );
}