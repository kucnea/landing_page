import React, {useEffect, useState, useImperativeHandle, useCallback, forwardRef } from 'react'
import Image from 'next/image'
import HakgyoansimDoldamM from '@public/styles/minho.css'
import chair from '@worldcup/chair.png'

 
export default function WorldCupCard({ card, direction, isClick }){
// const WorldCupCard = forwardRef(({ card, direction }, ref) => {
    const { properties } = card ? card : {properties:{}};
    // const optionalClassName = direction == 'l' ? 'rounded-sm overflow-hidden border-red-500' : 'rounded-sm overflow-hidden border-blue-500';
    // const optionalBorderColor = direction == 'l' ? '#4f3d40' : '#4f555f';
    
    const optionalBorderColor = direction == 'l' ? '#775c60' : '#4f555f';
    // const optionalBackgroundColor = direction == 'l' ? '#d09da6' : '#42678e';
    const [backgroundColor,setBackgroundColor] = useState(direction == 'l' ? '#d09da6' : '#42678e');
    
    const [innerSizeControll,setInnerSizeControll] = useState({
        // heightPic: '50%',
        heightPic: '',
        heightText: '50%',
    });

    const [marginTopPic,setMarginTopPic] = useState('3%');

    const [cardSize,setCardSize] = useState({ width: '', height: ''});

    // const chooseCardResize = useCallback(() => {
    //     console.log("is it real?");
    //     // setCardSize({
    //     //     width: window.innerWidth * 0.3 + 'px',
    //     //     height: window.innerHeight * 0.8 + 'px',
    //     // });

    //     for(var i = 0 ; i <= 50 ; i++ ){
            
    //         const isLastIteration = i === 50;

    //         setTimeout(()=>{
    //             setCardSize({
    //                 width: isLastIteration? '0%' : window.innerWidth * (0.3-(0.06)*i)+'%',
    //                 height: isLastIteration? '0%' : window.innerHeight * (0.8 - (0.16)*i)+'%',  
    //                 display: isLastIteration? 'none' : 'block',
    //             });
    //         }, i * 10);   
    //     }

    // },[]);

    // useImperativeHandle(ref, () => ({
    //     chooseCardResize
    //   }), [chooseCardResize]);
    

    // useEffect(()=>{
    //     const cardResize = () => {
    //         setCardSize({ width: window.innerWidth*0.3, height: window.innerHeight*0.8 });
    //       };
      
    //       window.addEventListener('resize', cardResize);
      
    //       return () => {
    //         window.removeEventListener('resize', cardResize);
    //       };
    // },[]);

    useEffect(()=>{
        const handleResize = () => {
            setCardSize({
              width: window.innerWidth * 0.3+'px',
              height: window.innerHeight * 0.8+'px',
            });
            setInnerSizeControll({
                widthPic: window.innerWidth * ( 0.3 ) * ( 0.3 ) + 'px',
                heightPic: window.innerHeight * ( 0.8 ) * ( 0.5 ) + 'px',
                heightText: '50%',
            });
          };

          handleResize();

          window.addEventListener('resize', handleResize);

          return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[]);

    useEffect(()=>{

        const resetCard = async () => {
            setCardSize({
                width: window.innerWidth * (0.3)+'px',
                height: window.innerHeight * (0.8)+'px',  
                display: 'block',
            });
        }

        const animateDown = async () => {

            const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

            for(var i = 0 ; i <= 50 ; i++ ){
                
                const isLastIteration = i === 50;

                await delay(10);
                
                // setTimeout(()=>{
                setCardSize({
                    width: isLastIteration? '0%' : window.innerWidth * (0.3-(0.06)*i)+'%',
                    height: isLastIteration? '0%' : window.innerHeight * (0.8 - (0.16)*i)+'%',  
                    display: isLastIteration? 'none' : 'block',
                });
                // }, i * 10);   
            }

            await delay(500);
            resetCard();

        }

        const animateUp = async () => {

            const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

            setMarginTopPic('0');

            for(var i = 1 ; i <= 50 ; i++ ){

                await delay(10);

                // setCardSize({
                //     width: window.innerWidth * (0.3 + (0.002)*i)+'px',
                //     height: window.innerHeight * (0.8 + (0.004)*i)+'px',  
                // });
                
                setBackgroundColor(
                    i%2 == 0 ? direction == 'l' ? '#d09da6' : '#42678e' : 'white',
                );

                setInnerSizeControll({
                    // heightPic: 50 + (0.6)*i + '%',

                    // heightPic: 50 + (0.89)*i + '%',
                    // heightText: 50 - i + '%',

                    // widthPic: window.innerWidth * ( 0.3 ) * ( 0.3 + ( 0.14 )*i ) + 'px',
                    heightPic: window.innerHeight * ( 0.8 ) * ( 0.5 + ( 0.01 )*i ) + 'px',
                    heightText: '50%',
                });

            }

            await delay(500);
            resetCard();

        }
        

        // console.log("card comp : "+isClick);
        if( isClick != '' && isClick != direction ){
            animateDown();
        } else if ( isClick == direction ){
            animateUp();
        }

    },[isClick, direction]);

    return (
        <div className="border-2 rounded-sm overflow-hidden"
                style={{width: cardSize.width,height: cardSize.height,backgroundColor:backgroundColor,borderColor:optionalBorderColor}}
        >
            {/* <div className='inline-block w-full h-full bg-contain bg-center bg-no-repeat' style={card.style}/> */}
            <div className='mt-3' style={{position:'relative',minWidth:'100%',minHeight:innerSizeControll.heightPic, marginTop: marginTopPic}}>
            {/* <div className='mt-3' style={{position:'relative',width:innerSizeControll.widthPic, height:innerSizeControll.heightPic}}> */}
                {card && card.src && (
                    <Image
                        src={card.src}
                        alt="hi"
                        layout="fill"
                        objectFit="contain"
                        loading="lazy"
                    />
                    )}
                {/* <Image src={card.src ? card.src : ''}
                        alt="hi"
                        layout="fill"
                        objectFit="contain"
                        loading="lazy"
                        /> */}
            </div>

            <div className='mt-5 overflow-auto' style={{height:innerSizeControll.heightText}}>
                { card && card.name && (
                    <a className='text-3xl' style={{fontFamily:'HakgyoansimDoldamM'}}>&nbsp;&nbsp;&nbsp;{card.name}</a>
                )}
                <br/>
                <ul>
                    {Object.entries(properties).map(([key, value], index) => (
                        <li key={index} className='text-xl' style={{fontFamily:'HakgyoansimDoldamM'}}>
                            <strong>&nbsp;&nbsp;{key} : </strong>
                            {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}
// });

// WorldCupCard.displayName = 'WorldCupCard';

// export default WorldCupCard;