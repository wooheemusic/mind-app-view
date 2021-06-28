import centerChildren from 'common/styles/centerChildren';
import { getPanelBackgroundColor, panelColor } from 'mindCore/styles/variables'
 
export default {
    dialog: {
        flex: 'initial', // flex: 0 1 auto
        width: '30rem',
        minHeight: '20rem',
        margin: '1rem',
        padding: '1rem',
        borderRadius: '10% 30% 50% 70%',
        backgroundColor: getPanelBackgroundColor(0.9),
        color: panelColor,
        ...centerChildren,
        flexDirection: 'column',
        '@global': {
            header: {
                textAlign: 'center',
            },
        },
    },
};