import React, {useEffect, useState} from 'react'
import Link from "next/link"
import FunNavi from "./FunNavi"
import DashBoardMain from "./DashBoardContents/DashBoardMain"
import GameScreen from './DashBoardContents/Game/GameScreen'

export default function Component() {

    const [componentIdx,setComponentIdx] = useState(0);

    const components =[
        { comp : <DashBoardMain/> },
        { comp : <GameScreen/> },
        
    ]

    function selectComponent(i){
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
    <div className="flex h-screen overflow-hidden">
      <FunNavi/>
      
      <main className="flex-1 bg-gray-100 p-6">
        <ShowComponent/>
      </main>
    </div>
  )
}
