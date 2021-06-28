
import { register } from 'common/cssModule';
import navJss from './navJss';
const [getClassName] = register(navJss);

export default function Nav(props) {
    return (
    <nav className={getClassName('nav')}>
        
    </nav>
    );
}