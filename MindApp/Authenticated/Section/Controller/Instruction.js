import { register } from 'common/cssModule';
import instructionJss from './instructionJss';
const [getClassName] = register(instructionJss);

export default function Intruction(props) {
    return (
    <div className={getClassName('instruction')}>
        <svg className={getClassName('svg')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        키보드를 사용하세요. 터치와 마우스는 구현 중입니다.
    </div>
    );
}