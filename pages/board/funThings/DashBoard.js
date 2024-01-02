import React, {useEffect, useState} from 'react'
import Link from "next/link"
import FunNavi from "./FunNavi"
import DashBoardMain from "./DashBoardContents/DashBoardMain"
import GameScreen from './DashBoardContents/Game/GameScreen'
import WorldCupPreStart from './DashBoardContents/Ideal type world cup/WorldCupPreStart'
import ChatRoom from './DashBoardContents/ChatRoom'
import JoinForm from './DashBoardContents/JoinForm'
import WorldCupScreen from './DashBoardContents/Ideal type world cup/WorldCupScreen'

export default function Component() {

    const [componentIdx,setComponentIdx] = useState(0);

    const components =[
        { comp : <DashBoardMain/> },
        { comp : <JoinForm/>},  
        { comp : <GameScreen/> },
        { comp : <WorldCupScreen/> },
        { comp : <ChatRoom/> },
        { comp : <JoinForm/>},
    ]

    const handleChangeComponentIdx = (i) => {
      setComponentIdx(i);
    }

    function ShowComponent(){
        console.log(componentIdx);
        if( componentIdx >= 0 && componentIdx <= components.length )
          return components[componentIdx].comp;
        else 
          return null;
      }

    useEffect(()=>{

    })

  return (
    <div className="flex h-screen">
      <FunNavi onChangeCompIdx={handleChangeComponentIdx}/>
      {/* 여기같음 */}
      <main className="flex-1 bg-gray-100 p-6 overflow-hidden overflow-y-auto">
        <ShowComponent/>
      </main>
    </div>
  )
}
