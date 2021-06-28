import createGetRem from 'common/modules/createGetRem';
import centerChildren from 'common/styles/centerChildren';
import transitionDefault from 'mindCore/styles/transitionDefault';
import getInputBorder from 'mindCore/styles/getInputBorder';
import { panelColor, getPanelBackgroundColor, mainTheme, zIndexMenu } from 'mindCore/styles/variables';

const unit = 1;
const getRem = createGetRem(unit);

const instructionHeight = 2;

const instruction = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(240, 226, 79, 0.4)',
    top: getRem(-instructionHeight - 0.5),
    borderRadius: getRem(0.5),
}

const svg = {
    fill: '#ad6231',
    width: getRem(instructionHeight),
    height: getRem(instructionHeight),
    
}

export default {
    instruction,
    svg,
}