import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import HakgyoansimDoldamM from '@public/styles/minho.css'
import chair from '@worldcup/chair.png'


export default function WorldCupCard({ card, direction }){

    const { properties } = card;
    // const optionalClassName = direction == 'l' ? 'rounded-sm overflow-hidden border-red-500' : 'rounded-sm overflow-hidden border-blue-500';
    // const optionalBorderColor = direction == 'l' ? '#4f3d40' : '#4f555f';
    const optionalBorderColor = direction == 'l' ? '#775c60' : '#4f555f';
    const optionalBackgroundColor = direction == 'l' ? '#d09da6' : '#42678e';

    const [cardSize,setCardSize] = useState({ width: window.innerWidth, height: window.innerHeight });

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
        setCardSize({ width: window.innerWidth*0.3, height: window.innerHeight*0.8 });
    },[])

    return (
        <div className="border-2 rounded-sm overflow-hidden"
                style={{width: cardSize.width+'px',height: cardSize.height+'px',backgroundColor:optionalBackgroundColor,borderColor:optionalBorderColor}}>
            {/* <div className='inline-block w-full h-full bg-contain bg-center bg-no-repeat' style={card.style}/> */}
            <div className='mt-3' style={{position:'relative',minWidth:'100%',minHeight:'50%'}}>
                <Image src={card.src}
                        alt="hi"
                        layout="fill"
                        objectFit="contain"
                        loading="lazy"
                        />
            </div>

            <div className='mt-5 overflow-auto'>
                <a className='text-3xl' style={{fontFamily:'HakgyoansimDoldamM'}}>&nbsp;&nbsp;&nbsp;{card.name}</a>
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