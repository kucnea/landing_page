import React, { useRef, useEffect, useState } from 'react';
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import Image from 'next/image';
import ProgressBar from '../ProgressBar';
import ImgLogo from '/public/image/LogoMinho_noBack_wide.png';
import { NotificationOutlined } from '@ant-design/icons';

export default function CustomVideo({isMobile, refVideo, isPlaying, setIsPlaying, progressRate}){

    const [volume, setVolume] = useState(1);
    const [sizePlayBtn,setSizePlayBtn] = useState(isMobile? '80%' : '180%');
    const [sizeVolumeBtn,setSizeVolumeBtn] = useState(isMobile? '30%' : '130%');
    const refHiddenVolume = useRef(null);
    const [hiddenVolume,setHiddenVolume] = useState(1-volume);

    const handleVolumeChange = (e) => {
        // const newVolume = e.target.value;
        setVolume(e);
        setHiddenVolume(1-e);
        if(refVideo.current) {
            refVideo.current.volume = e;
        }
      };

    function moveToMain(){
        window.location.href = '/'
    }

    const clickPlay = () => {
        if( !isPlaying ) {
          refVideo.current.play();
          setIsPlaying(true);
        }
    }

    const clickPause = () => {
        if( isPlaying ) {
            refVideo.current.pause();
            setIsPlaying(false);
        }        
    }

    useEffect(() => {
        if(refVideo.current) {
            refVideo.current.volume = volume;
        }
        if(refHiddenVolume.current){
            var length = refHiddenVolume.current.getBoundingClientRect().right - refHiddenVolume.current.getBoundingClientRect().left;
            
        }
      }, [volume]);

    useEffect(()=>{
        setSizePlayBtn(isMobile? '60%' : '180%');
        setSizeVolumeBtn(isMobile? '40%' : '140%');
    },[isMobile]);

    return (
        <div className='video-bottom-ovl flex'>
            <Image
                className='video-logo' 
                src={ImgLogo}
                alt='LOGO'
                onClick={moveToMain}
                style={{ position:'absolute', objectFit: 'cover', width: '10%', height: '60%', left: 0, top: 'calc(25%)' }}
            />  

            { isPlaying ? 
            <PauseOutlined 
                className='btnPlay'
                style={{position: 'absolute', fontSize:sizePlayBtn, top:'calc(13.7%)'}}
                onClick={clickPause}
            />
            :
            <CaretRightOutlined 
                className='btnPlay' 
                style={{position: 'absolute', fontSize:sizePlayBtn, top:'calc(13.7%)'}}
                onClick={clickPlay}
            />
            }
            <NotificationOutlined style={{position:'absolute',
                                          left:'16%',
                                          top:'calc(23%)',
                                          fontSize: sizeVolumeBtn,
                                          color:'white',
                                          overflow: 'hidden',
                                          }}/>
            <NotificationOutlined style={{position:'absolute',
                                          left:'16%',
                                          top:'calc(23%)',
                                          fontSize: sizeVolumeBtn,
                                          color:'#d09da6',
                                          overflow: 'hidden',
                                          width:'10px'
                                          }}
                                  ref={refHiddenVolume}          
                                          />
            <ProgressBar 
                isMobile={isMobile}
                maxValue={1} 
                curValue={volume} 
                handleValue={handleVolumeChange} 
                widthBar={'12%'}
                heightBar={'11%'}
                thumbColorBar={'white'}
                beforeColorBar={'gray'}
                afterColorBar={'#d09da6'}
                positionBar={'absolute'}
                leftBar={'20%'}
                topBar={'50%'}
            />
            
        </div>
    );
}