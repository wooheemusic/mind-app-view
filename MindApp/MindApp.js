import useTokenRefresh from 'mindCore/states/useTokenRefresh';
import useIsLoggedIn from 'mindCore/states/useIsLoggedIn';
import KeyEventRegistration from 'common/domStates/KeyEventRegistration';

import Container from './Container';
import Guest from './Guest';
import Authenticated from './Authenticated';

export default function MindApp(props) {
    useTokenRefresh(); // refresh token on its impending experation
    const loggedIn = useIsLoggedIn();
    return (
        <>
            <Container>
                {!loggedIn
                    ? <Guest />
                    : <Authenticated />}

            </Container>
            <KeyEventRegistration allowed={[
                'Digit0',
                'Digit1',
                'Digit2',
                'Digit3',
                'Digit4',
                'Digit5',
                'Digit6',
                'Digit7',
                'Digit8',
                'Digit9',
                ' ',
                'Enter',
                'Escape',
                'Backspace',
                'ArrowLeft',
                'ArrowRight',
                'ArrowUp',
                'ArrowDown',
            ]} />
        </>
    );
};