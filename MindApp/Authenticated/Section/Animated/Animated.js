import useAnimatedArrows from 'common/domStates/useAnimatedArrows';

import useNumberInputReducer from 'mindCore/states/useNumberInputReducer';

export default function Animated() {

    const [x, y] = useAnimatedArrows(2); // two pixels in one refresh of your monitor
    const [text] = useNumberInputReducer();

    return (
        <div style={{ transform: `translate(${x}px, ${y}px)` }}>
            'Animated' {text}
        </div>
    );
}