import createGetRem from 'common/modules/createGetRem';
import flexColumn from 'common/styles/flexColumn';
import { getInputSize, getInputBorder, transitionDefault, variables } from 'mindCore/styles';

const unit = 1;
const getRem = createGetRem(unit);
const inputSize = getInputSize(unit);
const inputBorder = getInputBorder(unit);
const { opacityDisabled, getPanelBackgroundColor, mainTheme } = variables;
const focusedInputBorder = mainTheme;

const label = {
    display: 'block',
    position: 'absolute',
    top: getRem(1/8),
    left: getRem(1/2 + 1/16 + 1/32), // =~ 0.6
    backgroundColor: getPanelBackgroundColor(0),
    padding: `${getRem(1/16 + 1/32)} ${getRem(1/8 + 1/16)}`, // =~ 0.1 0.2
    cursor: 'text',
    ...transitionDefault,
};

const input = {
    ...inputBorder,
    ...inputSize,
    display: 'block',
};

export default {
    'log-in-container': {
        ...flexColumn,
    },
    'nav-item': {
        position: 'relative',
        margin: getRem(1/8 + 1/16),
    },
    'nav-item-label': label,
    'nav-item-label-filled': {
        ...label,
        top: `-${getRem(1/8 + 1/16)}`,  // =~ -0.2
        fontSize: getRem(1/4 + 1/32), // =~ 0.3
        lineHeight: getRem(1/4 + 1/32), // =~ 0.3
        backgroundColor: getPanelBackgroundColor(1),
    },
    'nav-item-input': {
        ...input,
        '&:focus': {
            borderColor: focusedInputBorder,
        },
        '&:disabled': {
            opacity: opacityDisabled,
        }
    },
    'nav-item-button': {
        ...input,
        margin: getRem(1/2),
        backgroundColor: '#eeff77',
        '&:focus': {
            borderColor: focusedInputBorder,
        },
        '&:disabled': {
            opacity: opacityDisabled,
        }
    },
    'nav-item-invalid': {
        height: getRem(1+ 1/4 + 1/32),
        paddingLeft: getRem(1/2),
        fontSize: getRem(1/2 + 1/4 + 1/8),
        color: 'red',
    },
};