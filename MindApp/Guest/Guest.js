import LogIn from './LogIn';

import { register } from 'common/cssModule';
import guestJss from './guestJss';
const [getClassName] = register(guestJss);


export default function Guest() {
    return (
        <section className={getClassName('dialog')}>
            <header>
                <p>
                    안녕하세요. :)<br />
                    이 앱은 프론트엔드 입사 지원 포트폴리오입니다.<br />
                    react hook의 웹앱 기능 구현을 보여주기 위한 테스트 앱입니다.<br />
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/wooheemusic/jsonthefly">
                        https://github.com/wooheemusic/jsonthefly 
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" 
                            fill="#aadd00" style={{height: '1rem', transform: 'translateY(0.2rem)'}}>
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                        </svg>
                    </a><br/>
                    를 상호 참조하여 둘러봐 주세요. <br />
                    감사합니다. <br />
                </p>
            </header>
            <LogIn />
            <br />
        </section>
    );
}

// @react-router
// export default class Guest extends Component {
//     // export default class Guest extends PureComponent {
//     constructor(props) {
//         super(props);

//         this.details = [
//             'PlayceWASup is a simple, fast and scalable next generation web application server.',
//             'undefined 2',
//             'undefined 3'
//         ];

//         this.state = {
//             step: 0
//         };
//         this.before = this.before.bind(this);
//         this.next = this.next.bind(this);
//     }

//     before() {
//         const l = this.details.length;
//         this.setState({ step: (this.state.step - 1 + l) % l });
//     }

//     next() {
//         this.setState({ step: (this.state.step + 1) % this.details.length });
//     }

//     render() {
//         const {
//             state: { step },
//             details,
//             before,
//             next
//         } = this;
//         const isFirst = this.state.step === 0;
//         const isLast = this.state.step === this.details.length - 1;
//         return (
//             <div className={getClassName('parent')}>
//                 <div className={getClassName('dialog')}>
//                     <div className={getClassName('desc')}>
//                         <div className={getClassName('header')}>
//                             Welcome to <img src={logoWhite} alt='logo' />
//                         </div>
//                         <div className={getClassName('details')}>
//                             123123
//                         </div>

//                     </div>
//                     <div className={getClassName('form')}>
//                         LOGIN COMPONENT
//                     </div>
//                 </div>
//                 <div className={getClassName('copyright')}>
//                     Playce WAS 버전: 12.2.1.3.0
//                     <br />
//                     Copyright © 2018 Open Source Consulting, Inc. All rights reserved.
//                 </div>
//             </div>
//         );
//     }
// }
