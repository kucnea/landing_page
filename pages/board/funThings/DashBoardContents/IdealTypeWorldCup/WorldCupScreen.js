import React, { useRef, useEffect, useState } from 'react';
import WorldCupPreStart from './WorldCupPreStart';
import WorldCupIngame from './WorldCupIngame';
import WorldCupInput from './WorldCupInput';


export default function WorldCupScreen(){

    const [gameState,setGameStat] = useState('normal');
    const [gameTitle,setGameTitle] = useState();
    // init때 핸들러 만들어지는데
    // 그 때 랜더링된 컴포넌트에 넣어줄 수가 없음.
    // const gameComponent = [
    //     { comp : <WorldCupPreStart /> },
    //     { comp : <WorldCupIngame /> },
    // ]

    const handleChangeGameState = (state) => {
        setGameStat(state);
    }

    const handleChangeGameTitleState = (state) => {
        setGameTitle(state);
    }  

    function ShowScreen(){
          
        switch(gameState){
            case 'normal': 
                return <WorldCupPreStart onChangeGameState={handleChangeGameState} onChangeGameTitle={handleChangeGameTitleState}/>;
            case 'inGame':
                return <WorldCupIngame onChangeGameState={handleChangeGameState} gameTitle={gameTitle}/>
            case 'inputWorldCup':
                return <WorldCupInput onChangeGameState={handleChangeGameState}/>
            default:
                return null;
        }

      }

    useEffect(()=>{
        console.log("[WorldCupScreen.js] select gameState : "+gameState+", gameTitle : "+gameTitle);
    },[gameState, gameTitle]);

    return (
        <div className='bg-gray-100'>
            <h1 className="text-3xl font-semibold">Minho Ideal WorldCup :: Enjoy your Self!!!</h1>
            <p className="mt-2 text-gray-600">Choose your Pick!!!</p>

            <ShowScreen onChangeGameState={handleChangeGameState}/>

        </div>
    )
}