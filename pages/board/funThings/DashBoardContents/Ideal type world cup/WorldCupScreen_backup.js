import React, { useRef, useEffect, useState } from 'react';
import Card from './WorldCupCard';
import worldCupCardOverlay from './WorldCupCardOverlay';
import HakgyoansimDoldamM from '@public/styles/minho.css'
import { Car } from 'lucide-react';
import Image from 'next/image'
import { contains } from 'jquery';

export default function WorldCupScreen(){

    const cardContainerRef_left = useRef(null);
    const cardOverlayRef_left = useRef(null);
    const [rotateLeft,setRotateLeft] = useState({ x: 0, y: 0});

    const cardContainerRef_right = useRef(null);
    const cardOverlayRef_right = useRef(null);
    const [rotateRight,setRotateRight] = useState({ x: 0, y: 0});

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

                container.current.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;

                if ( EndFlagX && EndFlagY ) {
                    clearInterval(intervalId);
                }
            }, 100);

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
    
    useEffect(()=>{
        
    },[]);

    return (
        <div className='bg-gray-100'>
            <h1 className="text-3xl font-semibold">Minho Ideal WorldCup :: Enjoy your Self!!!</h1>
            <p className="mt-2 text-gray-600">Choose your Pick!!!</p>

            <div className='flex items-center justify-evenly min-h-4/5'
                    style={{minHeight:'40em', height:'100vh'}}>
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
                <div style={{position:'relative'}} ref={cardContainerRef_left}
                    onMouseMove={(e) => handleMouseMove(e,cardContainerRef_left,cardOverlayRef_left,'l')}
                    onMouseOut={(e) => handleMouseOut(e,cardContainerRef_left,cardOverlayRef_left,'l')}
                    >
                    <Card card={leftCardStyle} direction='l' />
                    <div className='cardOverlay'  ref={cardOverlayRef_left}/>
                </div>
                <div><a className='w-30 text-yellow-500 text-2xl font-extrabold' style={{fontFamily:'HakgyoansimDoldamM'}}>VS</a></div>

                {/* <div className='w-35 h-80 border-2 border-blue-500 max-w-1/3 min-h-4/5 max-h-4/5 min-w-1/3'
                        style={{width:'35%'}}>
                    <div className='inline-block w-full h-full bg-contain bg-center bg-no-repeat' style={rightCardStyle.style}/>
                </div> */}
                <div style={{position:'relative'}} ref={cardContainerRef_right}
                    onMouseMove={(e) => handleMouseMove(e,cardContainerRef_right,cardOverlayRef_right,'r')}
                    onMouseOut={(e) => handleMouseOut(e,cardContainerRef_right,cardOverlayRef_right,'r')}
                    >
                    <Card card={rightCardStyle} direction='r'/>
                    <div className='cardOverlay' ref={cardOverlayRef_right}/>
                </div>
            </div>

        </div>
    )
}