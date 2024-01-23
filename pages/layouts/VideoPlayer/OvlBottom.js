import React, { useRef, useEffect, useState } from 'react';
import { CaretRightOutlined, CompressOutlined, ExpandOutlined, PauseOutlined } from '@ant-design/icons';
import Image from 'next/image';
import ProgressBar from '../ProgressBar';
import ImgLogo from '/public/image/LogoMinho_noBack_wide.png';
import { NotificationOutlined } from '@ant-design/icons';
import { FormatTime, ExpandAnimateFontGrow, ResetAnimateFontGrow } from '@utils/commonFunc_minho';

export default function OvlBottom({isMobile, isFullScreen, setIsFullScreen, isStreaming, timeCurrent, lengthTotVideo, refVideo, isPlaying, setIsPlaying}){

    const [volume, setVolume] = useState(1);
    const [beforeVolume,setBeforeVolume] = useState(1);
    const [showVolumeBar,setShowVolumeBar] = useState(true);
    const refExpandBtn = useRef(null);
    
    const [stylePlayBtn,setStylePlayBtn] = useState({
                                                        fontSize : isMobile? '80%' : '180%',
                                                        top: isMobile? 'calc(13.7%)' : 'calc(13.7%)',
                                                    });
    const [styleVolumeBtn,setStyleVolumeBtn] = useState({
                                                            left: '16%',
                                                            fontSize : isMobile? '30%' : '130%',
                                                            top : isMobile? 'calc(21%)' : 'calc(21%)',
                                                        });
    const [styleVolumeBar,setStyleVolumeBar] = useState({
                                                            width: '12%',
                                                            height: '11%',
                                                            thumbColorBar: 'white',
                                                            beforeColorBar: 'gray',
                                                            afterColorBar: '#d09da6',
                                                            position: 'absolute',
                                                            left: '20%',
                                                            top: '49%',
                                                        });
    const [styleTextTimer,setStyleTextTimer] = useState({
                                                            left:'35.7%',
                                                            top:'calc(26%)',
                                                            fontSize:'78%',
                                                        });
    const [styleExpandBtn,setStyleExpandBtn] = useState({
                                                            left:'95%',
                                                            fontSize:'120%',
                                                        });
    const refHiddenVolume = useRef(null);
    const [hiddenVolume,setHiddenVolume] = useState(1-volume);

    const handleVolumeChange = (e) => {
        // const newVolume = e.target.value;
        setVolume(e);
        if(refVideo.current) {
            refVideo.current.volume = e;
        }
      };

    function moveToMain(){
        window.location.href = '/'
    }

    const clickPlay = () => {
        if( !isPlaying && refVideo.current ) {
          refVideo.current.play();
          setIsPlaying(true);
        }
    }

    const clickPause = () => {
        if( isPlaying && refVideo.current ) {
            refVideo.current.pause();
            setIsPlaying(false);
        }        
    }

    const clickSpeaker = () => {
        if( volume > 0 ){
            setBeforeVolume(volume);
            setVolume(0);
        } else {
            setVolume(beforeVolume);
        }
    }

    useEffect(() => {
        if(refVideo.current) {
            refVideo.current.volume = volume;
        }
        if(refHiddenVolume.current){
            var length = refHiddenVolume.current.getBoundingClientRect().right - refHiddenVolume.current.getBoundingClientRect().left;
            setHiddenVolume(length*volume);
        }
      }, [volume]);

    useEffect(()=>{
        setStylePlayBtn(prevState => {
            return {...prevState, fontSize : isMobile? '60%' : '180%'};
        });
        setStyleVolumeBtn(prevState => {
            return {...prevState, fontSize : isMobile? '40%' : '140%'};
        });
    },[isMobile]);

    useEffect(()=>{
        const chgFullScreen = () => {

            var video;
            if ( refVideo.current ) video = refVideo.current;
            else return;

            // console.log("[OvlBottom.js] isFullScreenn : "+isFullScreen);
            if( isFullScreen ){

                if (typeof document !== 'undefined') {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.mozCancelFullScreen) { /* Firefox */
                        document.mozCancelFullScreen();
                      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) { /* IE/Edge */
                        document.msExitFullscreen();
                      }
                }
    
            } else {
                
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                  } else if (video.mozRequestFullScreen) { /* Firefox */
                    video.mozRequestFullScreen();
                  } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                    video.webkitRequestFullscreen();
                  } else if (video.msRequestFullscreen) { /* IE/Edge */
                    video.msRequestFullscreen();
                }
                
            }
        }

        if( refExpandBtn.current )
            refExpandBtn.current.addEventListener('click', chgFullScreen);

        return () => {
            if( refExpandBtn.current )
                refExpandBtn.current.removeEventListener('click', chgFullScreen);
        };
    },[]);

    // useEffect(()=>{
    //     console.log("[OvlBottom.js] isPlaying : "+isPlaying);
    // },[])

    return (
        <div className='video-bottom-ovl flex'>
            <Image
                className='video-logo' 
                src={ImgLogo}
                alt='LOGO'
                onClick={moveToMain}
                style={{ position:'absolute', objectFit: 'cover', width: '10%', height: '60%', left: 0, top: 'calc(25%)' }}
            />  
            { isPlaying == true ? 
            <PauseOutlined 
                className='btnPlay'
                style={{position: 'absolute', fontSize:stylePlayBtn.fontSize, top: stylePlayBtn.top}}
                onClick={clickPause}
            />
            :
            <CaretRightOutlined 
                className='btnPlay' 
                style={{position: 'absolute', fontSize:stylePlayBtn.fontSize, top:stylePlayBtn.top}}
                onClick={clickPlay}
            />
            }
            <NotificationOutlined style={{position:'absolute',
                                          left: styleVolumeBtn.left,
                                          top: styleVolumeBtn.top,
                                          fontSize: styleVolumeBtn.fontSize,
                                          color:styleVolumeBar.beforeColorBar,
                                          overflow: 'hidden',
                                          }}
                                  ref={refHiddenVolume}
                                  onClick={clickSpeaker}
            />
            <NotificationOutlined style={{position:'absolute',
                                          left: styleVolumeBtn.left,
                                          top: styleVolumeBtn.top,
                                          fontSize: styleVolumeBtn.fontSize,
                                          color:styleVolumeBar.afterColorBar,
                                          overflow: 'hidden',
                                          width:hiddenVolume+'px'
                                          }}
                                  onClick={clickSpeaker}
                                          />
            { showVolumeBar == true  && 
                <ProgressBar 
                    isMobile={isMobile}
                    maxValue={1} 
                    curValue={volume} 
                    handleValue={handleVolumeChange} 
                    widthBar={styleVolumeBar.width}
                    heightBar={styleVolumeBar.height}
                    thumbColorBar={styleVolumeBar.thumbColorBar}
                    beforeColorBar={styleVolumeBar.beforeColorBar}
                    afterColorBar={styleVolumeBar.afterColorBar}
                    positionBar={styleVolumeBar.position}
                    leftBar={styleVolumeBar.left}
                    topBar={styleVolumeBar.top}
                /> }
            <a
                style={{ position: 'absolute',
                         left: styleTextTimer.left,
                         top: styleTextTimer.top,
                         color: 'white',
                         fontSize: styleTextTimer.fontSize,
                         }}>
                {FormatTime( timeCurrent )} / 
                {FormatTime(lengthTotVideo)}
            </a>

            <a
                style={{
                            position:'absolute',
                            left:styleExpandBtn.left,
                            fontSize:styleExpandBtn.fontSize,
                          }}
                ref={refExpandBtn}
            >
                { isFullScreen != true ?
                    <ExpandOutlined 
                        onMouseOver={ExpandAnimateFontGrow}   
                        onMouseOut={ResetAnimateFontGrow}     
                        onClick={()=>setIsFullScreen(true)}
                    />
                    :
                    <CompressOutlined 
                        onMouseOver={ExpandAnimateFontGrow}   
                        onMouseOut={ResetAnimateFontGrow}
                        onClick={()=>setIsFullScreen(false)}    
                    />
                }
            </a>
        </div>
    );
}