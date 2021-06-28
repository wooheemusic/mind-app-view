import { useState, useEffect, useRef } from 'react';
import useLogIn from 'mindCore/states/useLogIn';
import { validateEmail, validatePassword } from 'mindCore/modules/validations';

import { register } from 'common/cssModule';
import logInJss from './logInJss';
const [getClassName] = register(logInJss);

export default function LogIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('')
    const [isPending, _logIn] = useLogIn();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const submitRef = useRef(null);

    function logIn() {
        !emailError && !passwordError && _logIn(email, password, err => {
            setPasswordError(err.message);
        })
    }

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    return (
        <div className={getClassName('log-in-container')}>
            <div className={getClassName('nav-item')}>
                <label htmlFor="email"
                    className={getClassName(email ? 'nav-item-label-filled' : 'nav-item-label')} >
                    email
                </label>
                <input id="email" disabled={isPending} ref={emailRef} value={email} tabIndex="0"
                    className={getClassName('nav-item-input')}
                    onChange={e => {
                        setEmail(e.target.value);
                        setEmailError(validateEmail(e.target.value));
                    }}
                    onKeyPress={e => { e.key === 'Enter' && passwordRef.current.focus() }} />
                <div className={getClassName('nav-item-invalid')}>
                    {emailError}
                </div>
            </div>
            <div className={getClassName('nav-item')}>
                <label htmlFor="password" className={getClassName(password ? 'nav-item-label-filled' : 'nav-item-label')} >
                    password
                </label>
                <input id="password" disabled={isPending} ref={passwordRef} value={password} tabIndex="0"
                    className={getClassName('nav-item-input')}
                    onChange={e => {
                        setPassword(e.target.value);
                        setPasswordError(validatePassword(e.target.value));
                    }}
                    onKeyPress={e => { e.key === 'Enter' && submitRef.current.focus() }} />
                <div className={getClassName('nav-item-invalid')}>
                    {passwordError}
                </div>
            </div>
            <button ref={submitRef} disabled={!Boolean(password) || !Boolean(email) || isPending || Boolean(emailError) || Boolean(passwordError)}
                className={getClassName('nav-item-button')} tabIndex="0"
                onClick={logIn}
                onKeyPress={e => e.key === 'Enter' && logIn()}>Log in</button>
        </div>
    );
}