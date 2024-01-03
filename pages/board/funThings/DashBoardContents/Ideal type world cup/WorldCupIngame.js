import React, { useRef, useEffect, useState } from 'react';
import Card from './WorldCupCard';
import HakgyoansimDoldamM from '@public/styles/minho.css'
import Image from 'next/image'

export default function WorldCupIngame({onChangeGameState, gameTitle}){

    const [numStage,setNumStage] = useState(0);
    const [isClick,setIsClick] = useState('');

    const cardContainerRef_left = useRef(null);
    const cardOverlayRef_left = useRef(null);
    const [rotateLeft,setRotateLeft] = useState({ x: 0, y: 0});

    const cardContainerRef_right = useRef(null);
    const cardOverlayRef_right = useRef(null);
    const [rotateRight,setRotateRight] = useState({ x: 0, y: 0});

    const [styleScreen,setStyleScreen] = useState({
        minHeight:'40em', height:'100vh'
    });

    const refLeftCard = useRef(null);
    const refRightCard = useRef(null);
    const [styleLeftCard,setStyleLeftCard] = useState({
        position: 'relative'
    });
    const [styleLeftOverlay,setStyleLeftOverlay] = useState('');

    const [styleRightCard,setStyleRightCard] = useState({
        position: 'relative'
    });
    const [styleRightOverlay, setStyleRightOverlay] = useState('');

    const [styleVerseText,setStyleVerseText] = useState({
        fontFamily:'HakgyoansimDoldamM'
    });

    const handleMouseMove = (e, container, overlay, mode) => {
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        const rotateY = -1 / 5 * x + 20;
        const rotateX = 4 / 30 * y - 20;
        
        if (overlay.current && container.current) {
            overlay.current.style.backgroundPosition = `${x / 5 + y / 5}%`;
            overlay.current.style.filter = `opacity(${x / 200}) brightness(1.2)`;

            if( mode == 'l'){
                setRotateLeft({x: rotateX, y: rotateY});
            } else {
                setRotateRight({x: rotateX, y: rotateY});
            }

            container.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            // container.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    };

    const handleMouseOut = (e, container, overlay, mode) => {
        if (overlay.current && container.current) {
            var x;
            var y;
            var EndFlagX = false;
            var EndFlagY = false;

            if( mode == 'l' ){
                x = rotateLeft.x;
                y  = rotateLeft.y;
            } else {
                x = rotateRight.x;
                y = rotateRight.y;
            }
                
            const decreament = 10;

            const intervalId = setInterval(() => {
                if( x >= 0 ) {
                    x -= decreament;
                    if( x <= 0 ) {
                        x = 0;
                        EndFlagX = true;
                    }
                } else {
                    x += decreament;
                    if ( x >= 0 ) {
                        x = 0;
                        EndFlagX = true;
                    }
                }

                if( y >= 0 ) {
                    y -= decreament;
                    if( y <= 0 ) {
                        y = 0;
                        EndFlagY = true;
                    }
                } else {
                    y += decreament;
                    if ( y >= 0 ) {
                        y = 0;
                        EndFlagY = true;
                    }
                }

                if( container.current )
                    container.current.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;

                if ( EndFlagX && EndFlagY ) {
                    clearInterval(intervalId);
                }
            }, 100);

            if( container.current )
                container.current.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
        }
    }

    const leftCardStyle = {
        name: '의자',
        properties:{
            '가격': '2원',
            '설명': '내꺼',
            '비고': '원래 너꺼',
            '하지만': '사랑해',
        },
        src: "/games/worldCup/chair.png"
    }

    // const { leftProperties } = leftCardStyle;

    const rightCardStyle = {
        name: '컴퓨터',
        properties:{
            '가격': '2원',
            '설명': '니꺼',
        },
        src: "/games/worldCup/desk.png"
    }

    // const { RightProperties } = leftCardStyle;

    const chooseCard = (loc) => {
        
        /*
        if( refLeftCard.current && refRightCard.current ){
            switch(choiceCard){
                case 'l':
                    refLeftCard.current.chooseCardResize();
                    break;
                case 'r':
                    refRightCard.current.chooseCardResize();
                    break;    
            }
        }
        */
        console.log("left : "+cardContainerRef_right.current.style.left);
        switch(loc){
            case 'l':
                // setStyleRightCard({
                //     position:'relative',
                //     display: 'none',
                // });
                
                // chgChooseStyle(setStyleRightCard, setStyleRightOverlay);
                // refRightCard.current.chooseCardResize();

                setIsClick('l');
                break;
            case 'r':
                // setStyleLeftCard({
                //     position:'relative',
                //     display: 'none',
                // })

                // chgChooseStyle(setStyleLeftCard, setStyleLeftOverlay);
                // refLeftCard.current.chooseCardResize();

                setIsClick('r');
                break;    
        }
        
    }

    // function chgChooseStyle(refSet, refOvlSet){
    // const chooseAni = (refSet, refOvlSet, setStyleVerseText, setStyleScreen) => {

    //     console.log("do animation?");
        
    //     const animate = async () => {
    //         for(var i = 0 ; i <= 50 ; i++ ){
            
    //             const isLastIteration = i === 50;
    
    //             setTimeout(()=>{
    //                 refSet({
    //                     position:'relative',
    //                     width: isLastIteration? '0%' : (50-i)+'%',
    //                     height: isLastIteration? '0%' : (100 - i*2)+'%',  
    //                     display: isLastIteration? 'none' : 'block',
    //                 });
    //                 refOvlSet({
    //                     width: isLastIteration? '0%' : (50-i)+'%',
    //                     height: isLastIteration? '0%' : (100 - i*2)+'%',  
    //                     display: isLastIteration? 'none' : 'block',
    //                 });
    //                 setStyleVerseText({
    //                     fontFamily:'HakgyoansimDoldamM',
    //                     display: isLastIteration? 'none' :'block',
    //                 });
    //                 setStyleScreen({
    //                     backgroundColor: i % 2 == 0 ? 'white' : 'yellow',
    //                     minHeight:'40em',
    //                     height:'100vh',
    //                 });
    //             }, i * 10);   
    //         }
    //     }

    //     useEffect(()=> {
    //         animate();
    //     },isClick);

    // }

    // function chgChooseStyle(refSet, refOvlSet){

    //     setIsClick('y');

    // }
    
    useEffect(()=>{
        const animate = async () => {

            const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

            for(var i = 1 ; i <= 50 ; i++ ){
            
                const isLastIteration = i === 50;
                
                if( isClick == 'r' ){
                    
                    await delay(10);

                    setStyleLeftCard({
                        position:'relative',
                        width: isLastIteration? '0%' : (50-i)+'%',
                        height: isLastIteration? '0%' : (100 - i*2)+'%',  
                        display: isLastIteration? 'none' : 'block',
                    });
                    setStyleLeftOverlay({
                        width: isLastIteration? '0%' : (50-i)+'%',
                        height: isLastIteration? '0%' : (100 - i*2)+'%',  
                        display: isLastIteration? 'none' : 'block',
                    });
                    
                    setStyleVerseText({
                        fontFamily:'HakgyoansimDoldamM',
                        display: 'none',
                    });

                    setStyleScreen({
                        backgroundColor: i % 2 == 0 ? 'white' : 'yellow',
                        minHeight:'40em',
                        height:'100vh',
                    });
                    // setTimeout(()=>{
                    //     setStyleLeftCard({
                    //         position:'relative',
                    //         width: isLastIteration? '0%' : (50-i)+'%',
                    //         height: isLastIteration? '0%' : (100 - i*2)+'%',  
                    //         display: isLastIteration? 'none' : 'block',
                    //     });
                    //     setStyleLeftOverlay({
                    //         width: isLastIteration? '0%' : (50-i)+'%',
                    //         height: isLastIteration? '0%' : (100 - i*2)+'%',  
                    //         display: isLastIteration? 'none' : 'block',
                    //     });
                    //     setStyleVerseText({
                    //         fontFamily:'HakgyoansimDoldamM',
                    //         display: isLastIteration? 'none' :'block',
                    //     });
                    //     setStyleScreen({
                    //         backgroundColor: i % 2 == 0 ? 'white' : 'yellow',
                    //         minHeight:'40em',
                    //         height:'100vh',
                    //     });
                    //     console.log("i : "+i+", "+styleScreen);
                    // }, i * 10);   

                } else if ( isClick == 'l' ){

                    await delay(10);

                    setStyleRightCard({
                        position:'relative',
                        width: isLastIteration? '0%' : (50-i)+'%',
                        height: isLastIteration? '0%' : (100 - i*2)+'%',  
                        display: isLastIteration? 'none' : 'block',
                    });
                    setStyleRightOverlay({
                        width: isLastIteration? '0%' : (50-i)+'%',
                        height: isLastIteration? '0%' : (100 - i*2)+'%',  
                        display: isLastIteration? 'none' : 'block',
                    });

                    setStyleVerseText({
                        fontFamily:'HakgyoansimDoldamM',
                        display: 'none',
                    });
                    
                    setStyleScreen({
                        backgroundColor: i % 2 == 0 ? 'white' : 'yellow',
                        minHeight:'40em',
                        height:'100vh',
                    });

                    // setTimeout(()=>{
                    //     setStyleRightCard({
                    //         position:'relative',
                    //         width: isLastIteration? '0%' : (50-i)+'%',
                    //         height: isLastIteration? '0%' : (100 - i*2)+'%',  
                    //         display: isLastIteration? 'none' : 'block',
                    //     });
                    //     setStyleRightOverlay({
                    //         width: isLastIteration? '0%' : (50-i)+'%',
                    //         height: isLastIteration? '0%' : (100 - i*2)+'%',  
                    //         display: isLastIteration? 'none' : 'block',
                    //     });
                    //     setStyleVerseText({
                    //         fontFamily:'HakgyoansimDoldamM',
                    //         display: isLastIteration? 'none' :'block',
                    //     });
                    //     setStyleScreen({
                    //         backgroundColor: i % 2 == 0 ? 'white' : 'yellow',
                    //         minHeight:'40em',
                    //         height:'100vh',
                    //     });
                    //     console.log("i : "+i+", "+styleScreen);
                    // }, i * 10);   
                }
               
            }
        }

        animate();

        setNumStage((preNumStage) => preNumStage+1);

        console.log("[WorldCupIngame.js] gameTitle : "+gameTitle);
    },[isClick]);

    useEffect(()=>{
        console.log("[WorldCupIngame.js] numStage : "+ numStage);

        setRotateLeft({x: 0, y: 0});
        setRotateRight({x: 0, y: 0});

    },[numStage]);

    return (
        <div className='flex items-center justify-evenly min-h-4/5'
                style={styleScreen}>
            {/* <div className='w-35 h-80 border-2 border-pink-500 max-w-1/3 min-h-4/5 max-h-4/5 min-w-1/3'
                    style={{width:'35%'}}>
                <div className='inline-block w-full h-full bg-contain bg-center bg-no-repeat' style={leftCardStyle.style}/>
                <a className='text-white text-2xl' style={{fontFamily:'HakgyoansimDoldamM'}}>{leftCardStyle.name}</a>
                <ul>
                    {Object.entries(leftProperties).map(([key, value], index) => (
                        <li key={index}>
                            <strong>{key} : </strong>
                            {value}
                        </li>
                    ))}
                </ul>
            </div> */}
            {/* <div className='cardOverlay border-8' /> */}
            <div style={styleLeftCard} ref={cardContainerRef_left}
                onMouseMove={(e) => handleMouseMove(e,cardContainerRef_left,cardOverlayRef_left,'l')}
                onMouseOut={(e) => handleMouseOut(e,cardContainerRef_left,cardOverlayRef_left,'l')}
                onClick={()=>{chooseCard('l')}}
                >
                <Card card={leftCardStyle} direction='l' isClick={isClick} />
                <div className='cardOverlay'  ref={cardOverlayRef_left} style={{styleLeftOverlay}}/>
            </div>
            <div>
                <a className='w-30 text-red-500 text-2xl font-extrabold' style={styleVerseText}>
                    VS
                </a></div>

            {/* <div className='w-35 h-80 border-2 border-blue-500 max-w-1/3 min-h-4/5 max-h-4/5 min-w-1/3'
                    style={{width:'35%'}}>
                <div className='inline-block w-full h-full bg-contain bg-center bg-no-repeat' style={rightCardStyle.style}/>
            </div> */}
            <div style={styleRightCard} ref={cardContainerRef_right}
                onMouseMove={(e) => handleMouseMove(e,cardContainerRef_right,cardOverlayRef_right,'r')}
                onMouseOut={(e) => handleMouseOut(e,cardContainerRef_right,cardOverlayRef_right,'r')}
                onClick={()=>{chooseCard('r')}}
                >
                <Card card={rightCardStyle} direction='r' isClick={isClick}/>
                <div className='cardOverlay' ref={cardOverlayRef_right} style={{styleRightOverlay}}/>
            </div>
        </div>
    )
}