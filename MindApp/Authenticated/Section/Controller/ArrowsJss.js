import centerChildren from 'common/styles/centerChildren';
import { panelColor, getPanelBackgroundColor } from 'mindCore/styles/variables';

// 16 for document.body.clientWidth > 770
// 8 for <= 770

function getArrowStyle(pxu) {
    const containerBorderRadius = pxu;
    const arrowContainerSize = pxu * 10;
    const arrowSize = pxu * 2.5;
    const arrowDistance = arrowSize + pxu * 3 / 4
    const arrowMargin = pxu / 2;
    const arrowContainer = {
        ...centerChildren,
        flex: '0 0 auto',
        backgroundColor: getPanelBackgroundColor(1 - 1 / 8),
        borderRadius: containerBorderRadius,
        margin: arrowMargin,
        width: arrowContainerSize,
        height: arrowContainerSize,
    }
    const arrow = {
        flex: 'none',
        position: 'absolute',
        width: arrowSize,
        height: arrowSize,
    }

    return [arrowContainer, arrow, arrowDistance];
}

const [mediumArrowContainer, mediumArrow, mediumArrowDistance] = getArrowStyle(16);
const [smallArrowContainer, smallArrow, smallArrowDistance] = getArrowStyle(8);

const triangle = {
    fill: 'rgb(0,0,0,0.1)',
    stroke: panelColor,
    strokeWidth: 2,
    strokeDasharray: '2 4',
    strokeLinecap: "round",
    strokeLinejoin: "round",
}

export default {
    'arrow-container': mediumArrowContainer,
    'triangle': triangle,
    'triangle-active': {
        ...triangle,
        fill: 'rgb(255, 245, 54, 0.8)',
        stroke: '#b39500',
    },
    'arrow-up': {
        ...mediumArrow,
        transform: `translateY(-${mediumArrowDistance}px)`
    },
    'arrow-right': {
        ...mediumArrow,
        transform: `translateX(${mediumArrowDistance}px) rotate(90deg)`
    },
    'arrow-down': {
        ...mediumArrow,
        transform: `translateY(${mediumArrowDistance}px) rotate(180deg)`
    },
    'arrow-left': {
        ...mediumArrow,
        transform: `translateX(-${mediumArrowDistance}px) rotate(-90deg)`
    },
    'arrow-container-small': smallArrowContainer,
    'triangle': triangle,
    'triangle-active': {
        ...triangle,
        fill: 'rgb(255, 245, 54, 0.8)',
        stroke: '#b39500',
    },
    'arrow-up-small': {
        ...smallArrow,
        transform: `translateY(-${smallArrowDistance}px)`
    },
    'arrow-right-small': {
        ...smallArrow,
        transform: `translateX(${smallArrowDistance}px) rotate(90deg)`
    },
    'arrow-down-small': {
        ...smallArrow,
        transform: `translateY(${smallArrowDistance}px) rotate(180deg)`
    },
    'arrow-left-small': {
        ...smallArrow,
        transform: `translateX(-${smallArrowDistance}px) rotate(-90deg)`
    },
}