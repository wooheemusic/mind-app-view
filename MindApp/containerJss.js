import centerChildren from 'common/styles/centerChildren';
import { mario } from 'mindCore/images';

export default {
    container: {
        height: '100%',
        backgroundImage: `url('${mario}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%', // stretch
        ...centerChildren,
    },
};