import centerChildren from 'common/styles/centerChildren';
import { panelColor, getPanelBackgroundColor } from 'mindCore/styles/variables';


function getKeyStyle(pxu) {
    const keySize = pxu * 4;
    const keyMargin = pxu / 8;
    const keyBorderWidth = pxu / 4;
    const keyBorderRadius = pxu;

    const keyContainer = {
        flex: '1 1 auto',
        margin: keyMargin,
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
    };
    const key = {
        backgroundColor: getPanelBackgroundColor(1 - 1 / 8),
        borderRadius: keyBorderRadius,
        borderColor: panelColor,
        borderWidth: keyBorderWidth,
        borderStyle: 'dashed',
        flex: '0 0 auto',
        margin: keyMargin,
        width: keySize,
        height: keySize,
        ...centerChildren,
    };
    return [keyContainer, key];
}

const [mediumKeyContainer, mediumKey] = getKeyStyle(16);
const [smallKeyContainer, smallKey] = getKeyStyle(8);

export default {
    'key-container': mediumKeyContainer,
    'key': mediumKey,
    'key-active': {
        ...mediumKey,
        backgroundColor: 'rgb(255, 245, 54, 0.8)',
        borderColor: '#b39500',
    },
    'key-container-small': smallKeyContainer,
    'key-small': smallKey,
    'key-active-small': {
        ...smallKey,
        backgroundColor: 'rgb(255, 245, 54, 0.8)',
        borderColor: '#b39500',
    }
}