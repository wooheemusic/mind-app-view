import { getPanelBackgroundColor } from 'mindCore/styles/variables';

const navThickness = '3rem';

const nav = {
    position: 'fixed',
    top: 0,
    right: 0,
    backgroundColor: getPanelBackgroundColor(0.1),
}

export default {
    'nav-top': {
        ...nav,
        width: '100%',
        height: navThickness,
        
    },
    'nav-right': {
        ...nav,
        width: '4rem',
        height: navThickness,
    },
}