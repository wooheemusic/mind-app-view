import createGetRem from 'common/modules/createGetRem';
import textEllipsis from 'common/styles/textEllipsis';
import transitionDefault from 'mindCore/styles/transitionDefault';
import getOutline from 'mindCore/styles/getOutline';
import { getPanelBackgroundColor, mainTheme, zIndexMenu } from 'mindCore/styles/variables';

const unit = 1;
const getRem = createGetRem(unit);
const widthOpen = 14;
const heightOpen = 10;
const svgSize = 2;

const block = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.2,
    zIndex: zIndexMenu - 5,
    cursor: 'pointer',
}

const standAloneAccount = {
    ...transitionDefault,
    zIndex: zIndexMenu,
    position: 'fixed',
    top: getRem(1),
    right: getRem(1),
    backgroundColor: getPanelBackgroundColor(),
    borderRadius: getRem(svgSize/2),
}

const title = {
    ...transitionDefault,
    display: 'flex',
    cursor: 'pointer',
}

const svgRadius = getRem(svgSize);
const svg = {
    flex: 'none',
    width: svgRadius,
    height: svgRadius,
    fill: mainTheme,
    '&:focus': getOutline(unit)
};

const email = {
    ...transitionDefault,
    flex: 'none',
    width: getRem(0),
    height: getRem(svgSize),
    color: mainTheme,
    display: 'flex',
    alignItems: 'center',
}

const details = {
    ...transitionDefault,
    width: getRem(svgSize),
    height: getRem(0),
    // padding: getRem(1/2),
    overflow: 'hidden',
    position: 'relative',
}


export default {
    'block': block,
    'stand-alone-account': standAloneAccount,
    'title': title,
    'svg': svg,
    'email': email,
    'email-spread': {
        ...email,
        // width: 'auto',
        width: getRem(widthOpen - svgSize),
    },
    'email-text': {
        ...textEllipsis,
        width: getRem(widthOpen - svgSize),
    },
    'details': details,
    'details-spread': {
        ...details,
        width: getRem(widthOpen),
        height: getRem(heightOpen),
        '@global': {
            'div': {
                margin: getRem(1/2),
            }
        },
    },
    'log-out': {
        position: 'absolute',
        bottom: getRem(1),
        right: getRem(1),
        cursor: 'pointer',
        '&:focus': getOutline(unit),
        color: mainTheme,
    }
}