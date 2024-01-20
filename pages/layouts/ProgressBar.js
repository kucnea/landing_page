import React, { useRef, useEffect, useState } from 'react';

export default function ProgressBar({isMobile, maxValue, curValue, handleValue, widthBar, heightBar, thumbColorBar, beforeColorBar, afterColorBar, positionBar, leftBar, topBar}){
    
    const [numWidth,setNumWidth] = useState(widthBar.substring(0,widthBar.length - 1));
    const [isClickThumb,setIsClickThumb] = useState(false);
    const [locVolume,setLocVolume] = useState(curValue/maxValue);

    const refBar = useRef(null);
    useEffect(()=>{
        setNumWidth(widthBar.substring(0,widthBar.length - 1));
    },[widthBar]);

    useEffect(()=>{
        // console.log("[ProgessBar.js] width : "+(curValue/maxValue)*numWidth);
        // console.log("[ProgessBar.js] width1 : "+curValue);
        // console.log("[ProgessBar.js] width2 : "+maxValue);
        // console.log("[ProgessBar.js] refBar.lx : "+refBar.current.getBoundingClientRect().left);
        // console.log("[ProgessBar.js] refBar.rx : "+refBar.current.getBoundingClientRect().right);
    });

    useEffect(()=>{
  
        const moveThumb = (e) => {

          if ( isClickThumb ) {
            var loc;

            if( isMobile) {
                var touch = e.touches[0];
                loc = touch.clientX;
            } else {
                e.preventDefault();
                loc = (e.clientX);
            }

            var left = refBar.current.getBoundingClientRect().left;
            var right = refBar.current.getBoundingClientRect().right;
            
            if( loc <= left ) loc = left;
            else if( loc >= right ) loc = right;

            var rslt = (loc-left)/(right-left);
            setLocVolume(rslt);
            handleValue(rslt);
          }
        };

        const handleMouseUp = (e) => {
            setIsClickThumb(false);
        }

        document.addEventListener('mousemove', moveThumb);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', moveThumb);
        document.addEventListener('touchend', handleMouseUp);
  
        return () => {
          document.removeEventListener('mousemove', moveThumb);
          document.removeEventListener('mouseup', handleMouseUp);
          document.removeEventListener('touchmove', moveThumb);
          document.removeEventListener('touchend',handleMouseUp);
        };
  
    },[isClickThumb]);

    return (
        <div>
            <div
                className='progressRail-minho progressBar'
                ref={refBar}
                style={{position: positionBar,
                        width: widthBar,
                        left: leftBar,
                        top: topBar,
                        height: heightBar,
                        zIndex:-1,
                        backgroundColor: beforeColorBar}}
            />
            <div
                className='progressRailFill-minho progressBar'
                style={{position: positionBar, backgroundColor: afterColorBar,
                        height: heightBar,
                        width: locVolume*numWidth+'%',
                        left: leftBar,
                        height: heightBar,
                        top: topBar,}}
            />
            <div
                className='progressBarThumb'
                style={{position: positionBar, backgroundColor: thumbColorBar,
                        width: parseInt(widthBar)*1.5/10+'%',
                        height: parseInt(heightBar)+20+"%",
                        cursor: 'pointer',
                        left: (parseInt(leftBar)+locVolume*numWidth)+'%',
                        top: parseInt(topBar)-10+'%',
                        borderRadius: '3px',}}
                onMouseDown={()=>setIsClickThumb(true)}
                onMouseUp={()=>setIsClickThumb(false)}
                onTouchStart={()=>setIsClickThumb(true)}
                onTouchEnd={()=>setIsClickThumb(false)}
                
            />
            <div
                className='progressRail-minho progressBar'
                style={{position: positionBar,
                        width: widthBar,
                        left: parseInt(leftBar)+15+'%',
                        top: topBar,
                        height: heightBar,
                        zIndex:-1,
                        backgroundColor: beforeColorBar}}
            />
            <div
                className='progressRailFill-minho progressBar'
                style={{position: positionBar, backgroundColor: afterColorBar,
                        height: heightBar,
                        width: locVolume*numWidth+'%',
                        left: parseInt(leftBar)+15+'%',
                        height: heightBar,
                        top: topBar,}}
            />
            <input 
                className='progressBar-minho progressBar'
                style={{position: positionBar,
                        width: widthBar,
                        left: parseInt(leftBar)+15+'%',
                        top: parseInt(topBar)+3+'%',
                        height:'0px',
                        // background: 'transparent',
                        outline: 'none',
                        }}
                type="range" 
                min="0" 
                max={maxValue} 
                step='0.01'
                value={curValue} 
                // onChange={handleValue} 
            />
        </div>
    );
}