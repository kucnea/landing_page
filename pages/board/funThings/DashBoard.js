import React, {useEffect, useState, useRef} from 'react'
import Link from "next/link"
import FunNavi from "./FunNavi"
import DashBoardMain from "./DashBoardContents/DashBoardMain"
import GameScreen from './DashBoardContents/Game/GameScreen'
import WorldCupPreStart from './DashBoardContents/IdealTypeWorldCup/WorldCupPreStart'
import ChatRoom from './DashBoardContents/ChatRoom'
import JoinForm from './DashBoardContents/JoinForm'
import WorldCupScreen from './DashBoardContents/IdealTypeWorldCup/WorldCupScreen'
import { MenuOutlined, ProfileOutlined } from '@ant-design/icons'

export default function Component() {

    const [componentIdx,setComponentIdx] = useState(0);
    const mobileWidth = 768;
    const [isMobile,setIsMobile] = useState(false);
    const [isFunNaviOpen, setIsFunNaviOpen] = useState(true);
    const [isDragOrClickFunNavi,setIsDragOrClickFunNavi] = useState(false);
    
    const [isClickFunNavi,setIsClickFunNavi] = useState(false);
    const [isOnFunNavi,setIsOnFunNavi] = useState(false);
    const [locFunNavi,setLocFunNavi] = useState({x : 0, y: 0});
    const [locBase,setLocBase] = useState({x: 0, y : 0});

    const components =[
        { comp : <DashBoardMain/> },
        { comp : <JoinForm/>},  
        { comp : <GameScreen/> },
        { comp : <WorldCupScreen/> },
        { comp : <ChatRoom/> },
        { comp : <JoinForm/>},
    ]

    const handleFunNavi = () => {
      setIsFunNaviOpen(preIsOpen => !preIsOpen);
      setIsClickFunNavi(false);
    }
    

    const handleChangeComponentIdx = (i) => {
      if( isMobile )
        setIsFunNaviOpen(false);
      
      setComponentIdx(i);
    }

    function ShowComponent(){
        console.log(componentIdx);
        if( componentIdx >= 0 && componentIdx <= components.length )
          return components[componentIdx].comp;
        else 
          return null;
    }

    const handleFunNaviMouseUp = () => {
      console.log("[DashBoard.js] mouse up : "+isDragOrClickFunNavi);
      if( !isDragOrClickFunNavi ){
        handleFunNavi();
      }
      setIsDragOrClickFunNavi(false);
      setIsClickFunNavi(false);
    }

    useEffect(()=>{
      const handleResize = () => {
        setIsMobile(window.innerWidth <= mobileWidth);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);

      if( window.innerWidth <= mobileWidth )
          setIsFunNaviOpen(false);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },[]);

    useEffect(()=>{
      setLocFunNavi({x : '1%', y : '0%'});
    },[]);

    useEffect(()=>{

      // while(isClickFunNavi){
      //   setLocFunNavi({
      //     x: (e.clientX-3)+'px', 
      //     y: (e.clientY-3)+'px'
      //   });
      // }

      const moveWebFunNavi = (e) => {
        if ( isClickFunNavi ) {
          setIsDragOrClickFunNavi(true);

          setLocFunNavi({
            x: (e.clientX ) + 'px',
            y: (e.clientY ) + 'px',
          });
          
        }
      };
      const moveMoFunNavi = (e) => {
        if ( isClickFunNavi ) {
          setIsDragOrClickFunNavi(true);

          const touch = e.touches[0];
          const mx = touch.clientX;
          const my = touch.clientY;

          setLocFunNavi({
            x: (mx ) + 'px',
            y: (my ) + 'px',
          });
          
        }
      };

      if( !isMobile ){
        document.addEventListener('mousemove', moveWebFunNavi);
        document.removeEventListener('touchmove', moveMoFunNavi);
      } else {
        document.addEventListener('touchmove', moveMoFunNavi);
        document.removeEventListener('mousemove', moveWebFunNavi);
      }

      return () => {
        document.removeEventListener('mousemove', moveWebFunNavi);
        document.removeEventListener('touchmove', moveMoFunNavi);
      };

    },[isClickFunNavi,isMobile]);


  return (
    <div className="flex h-screen">
      { isFunNaviOpen ? 
        <FunNavi 
          onChangeCompIdx={handleChangeComponentIdx} 
          handleFunNavi={handleFunNavi} 
          isMobile={isMobile} 
          isFunNaviOpen={isFunNaviOpen}
        />
        :
        <ProfileOutlined
          className='fixed text-2xl'
          style={{width:'24px', height:'24px', left: locFunNavi.x, top: locFunNavi.y}}
          // onClick={()=>handleFunNaviMouseUp('click')}
          onMouseDown={()=>setIsClickFunNavi(true)}
          // onMouseUp={()=>setIsClickFunNavi(false)}
          onMouseUp={handleFunNaviMouseUp}
          // onMouseMove={handleFunNaviMove}
          onMouseOver={()=>setIsOnFunNavi(true)}
          onMouseOut={()=>setIsOnFunNavi(false)}
          onTouchStart={()=>setIsClickFunNavi(true)}
          onTouchEnd={()=>setIsClickFunNavi(true)}
        />
      }
      { isFunNaviOpen? isMobile? 
        <div 
            className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 
                        ${ isMobile ? isFunNaviOpen? 'block' : 'hidden' : 'hidden' }
                      `}
        />
        :
        ''
        :
        ''
      }
      {/* <FunNavi 
        onChangeCompIdx={handleChangeComponentIdx} 
        handleFunNavi={handleFunNavi} 
        isMobile={isMobile} 
        isFunNaviOpen={isFunNaviOpen}
      /> */}
      
      <main className={`flex-1 bg-gray-100 p-6 overflow-hidden overflow-y-auto
                        ${ isFunNaviOpen ? 'ml-0' : 'ml-30' }
                        transition-margin ease-in-out duration-300 `}
            >
        <ShowComponent/>
      </main>
    </div>
  )
}

