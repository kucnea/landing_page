import { useState } from 'react';

function useLayoutState() {
    const [headerState, setHeaderState] = useState('none');   // no, yes
    const [footerState, setFooterState] = useState('none');        // no, yes

    const useLayout = () => {
        setHeaderState('display');
        setFooterState('display');
    }
    const unUseLayout = () => {
        setHeaderState('none');
        setFooterState('none');
    }

    return { headerState, footerState, useLayout, unUseLayout };

}

export default useLayoutState;