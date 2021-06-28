import createGetRem from 'common/modules/createGetRem';
import centerChildren from 'common/styles/centerChildren';
import getInputBorder from 'mindCore/styles/getInputBorder';
import { panelColor, mainTheme, getMainTheme, getPanelBackgroundColor } from 'mindCore/styles/variables';

const unit = 1;
const getRem = createGetRem(unit);

const arrowContainerSize = 10;
const arrowSize = 2.5;

const arrowContainer = {
    ...centerChildren,
    flex: '0, 0, auto',
    backgroundColor: getPanelBackgroundColor(1 - 1 / 8),
    borderRadius: getRem(2),
    // padding: getRem(1),
    margin: getRem(1),
    width: getRem(arrowContainerSize),
    height: getRem(arrowContainerSize),
}

//fill:lime;stroke:purple;stroke-width:1

const arrow = {
    flex: 'none',
    position: 'absolute',
    width: getRem(arrowSize),
    height: getRem(arrowSize),
}

const triangle = {
    fill: 'rgb(0,0,0,0.1)',
    stroke: panelColor,
    strokeWidth: `${1 / 8}rem`,
    strokeDasharray: `${getRem(0.1)} ${getRem(0.3)}`,
    strokeLinecap: "round",
    strokeLinejoin: "round",
}

export default {
    'arrow-container': arrowContainer,
    'triangle': triangle,
    'triangle-active': {
        ...triangle,
        fill: 'yellow',
        stroke: '#b39500',
    },
    'arrow-up': {
        ...arrow,
        transform: `translateY(-${arrowSize + 0.75}rem)`
    },
    'arrow-right': {
        ...arrow,
        transform: `translateX(${arrowSize + 0.75}rem) rotate(90deg)`
    },
    'arrow-down': {
        ...arrow,
        transform: `translateY(${arrowSize + 0.75}rem) rotate(180deg)`
    },
    'arrow-left': {
        ...arrow,
        transform: `translateX(-${arrowSize + 0.75}rem) rotate(-90deg)`
    },
}