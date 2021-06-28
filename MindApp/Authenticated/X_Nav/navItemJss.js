import getInputBorder from 'mindCore/styles/getInputBorder'

export default {
    'nav-item': {
        flex: 'none',
        width: '2rem',
        height: '3rem',
        '&:focus': {
            ...getInputBorder
        }
    },
}