import { register } from 'common/cssModule';
import navItemJss from './navItemJss';
const [getClassName] = register(navItemJss);

export default function NavItem(props) {
    return (
    <div className={getClassName('nav-item')}>
        'NavItem'
    </div>
    );
}