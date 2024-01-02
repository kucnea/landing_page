import React, { useRef } from 'react';
import Canvas from '@lib/hooks/game/Canvas';
import useGameState from '@lib/hooks/game/useGameState';
// import Map from '@lib/hooks/game/Map';

export default function GameScreen(){

    const canvasRef = useRef(null);
    const { gameState, start, stop, menu, pause } = useGameState();

    Canvas(canvasRef)
    // Map(canvasRef)

    console.log(gameState);

    return (
        <div className='bg-gray-100'>
            {/* gameEngine.main() */}
            <h1 className="text-3xl font-semibold">Minho Game :: Enjoy your Self!!!</h1>
            <p className="mt-2 text-gray-600">Prove your abilities</p>
            <h1>
                이전 자바스크립트 바닐라로 만들었던걸 리액트 구조로 변환에 시간이 소요돼,
                유니티로 새로 만들어 웹에 해보려 준비중...
            </h1>
            <canvas ref={canvasRef}/>
            
        </div>
    )
}