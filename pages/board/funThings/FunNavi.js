import { CloseCircleOutlined } from "@ant-design/icons"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function FunNavi({ onChangeCompIdx, handleFunNavi, isMobile, isFunNaviOpen }){

    const [styleFunNavi,setStyleFunNavi] = useState({width: isMobile? '50%' : '30%'});

    useEffect(()=>{

        setStyleFunNavi({width: isMobile? '50%' : '30%'});

    },[isMobile])

    useEffect(()=>{

        const animateFunNaviClose = async () => {

            const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

            if( !isMobile ){
                for( var i = 30 ; i >= 0 ; i-- ){
                    await delay(3);
                    setStyleFunNavi((prevStyle) => ({
                        ...prevStyle,width: i+'%'}));
                        // console.log("[FunNavi.js] closeAnimation : "+styleFunNavi.width);
                }
            } else {
                for( var i = 50 ; i >= 0 ; i-- ){
                    await delay(1.8);
                    setStyleFunNavi((prevStyle) => ({
                        ...prevStyle,width: i+'%'}));
                }
            }

            setStyleFunNavi({width: '0%', visibility:'hidden', padding:'0%'});

        }


        const animateFunNaviOpen = async () => {

            const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

            if( !isMobile ){
                for( var i = 1 ; i <= 30 ; i++ ){
                    await delay(3);
                    setStyleFunNavi({width: i+'%'});
                }
            } else {
                for( var i = 1 ; i <= 50 ; i++ ){
                    await delay(1.8);
                    setStyleFunNavi({width: i+'%'});
                }
            }
            

            setStyleFunNavi({width: (isMobile? '50%' : '30%'), visibility:'visible', padding: '1.5rem'});
        }

        if( isFunNaviOpen ){
            animateFunNaviOpen();
        } else {
            animateFunNaviClose();
        }

    },[isFunNaviOpen]);

    return(
        // w-64
        <aside className={`bg-gray-800 text-white p-6 z-20
                            ${ isMobile ? 'fixed top-0 h-full' : ''}
                         `}
            // ${ isMobile ? 
            //     ( isFunNaviOpen ? ' fixed top-0 transform translate-x-0' : ' fixed top-0 transform -translate-x-full') 
            //     : isFunNaviOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
            // } transition-transform ease-in-out duration-300`}
            style={styleFunNavi}
        >
            <h1 className="text-2xl mb-4 relative" onClick={()=>onChangeCompIdx(0)}>Minho Board <CloseCircleOutlined className="absolute top-0 right-0 mt-4" onClick={() => handleFunNavi()}/></h1>
            <nav>
                <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#"
                        onClick={()=>onChangeCompIdx(1)}>
                    Join Me
                </div>
                <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#"
                        onClick={()=>onChangeCompIdx(2)}>
                    Game
                </div>
                <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#"
                        onClick={()=>onChangeCompIdx(3)}>
                    ideal type world cup
                </div>
                <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#"
                        onClick={()=>onChangeCompIdx(4)}>
                    Chat
                </div>
                <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#"
                        onClick={()=>onChangeCompIdx(5)}>
                    Join Me
                </div>
                {/* <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" href="#"
                        onClick={()=>onChangeCompIdx(0)}>
                    Info
                </div> */}
            </nav>
        </aside>
    )
}