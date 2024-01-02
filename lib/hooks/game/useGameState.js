import { useState } from 'react';

function useGameState() {
    const [gameState, setGameState] = useState('notRunning'); // running, notRunning, pause, menu

    const start = () => setGameState('runnging');
    const pause = () => setGameState('pause');
    const menu = () => setGameState('menu');
    const stop = () => setGameState('notRunning');

    return { gameState, start, pause, menu, stop };

}

export default useGameState;