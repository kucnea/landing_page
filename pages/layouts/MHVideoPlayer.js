import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import ImgLogo from '/public/image/LogoMinho_noBack_wide.png'
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';


export default function CustomVideo({filePathVideo, boolAutoPlay, boolMute, boolAutoReplay, boolBusiness, vWidth, vHeight}){

    const refVideo = useRef(null);

    const [stateAutoPlay,setStateAutoPlay] = useState(boolAutoPlay);
    const [stateMute,setStateMute] = useState(boolMute);

    const [nextVideo,setNextVideo] = useState(null);
    const [progressRate,setProgressRate] = useState(0);
    const [isPlaying,setIsPlaying] = useState(boolAutoPlay);
    const [isShowFrame,setIsShowFrame] = useState(false);
    const [isShowMiddleRecommand,setIsShowMiddleRecommand] = useState(false);
    const [isShowClosingReCommand,setIsShowClossingReCommand] = useState(false);

    const [advInStart, setAdvInStart] = useState(null);
    const [advInMiddle, setAdvInMiddle] = useState(null);

    function moveToMain(){
        window.location.href = '/'
    }

    const clickPlay = () => {
      if( !isPlaying ) {
        refVideo.current.play();
        setIsPlaying(true);
      }
    }
    // useEffect(()=>{

    //     if( boolAutoPlay ){
            
    //         refVideo.current.play().catch(error => {
    //             setStateMute(true);
    //         });

    //         ((isRun) => {

    //             if( isRun ){
    //                 refVideo.current.play();
    //             }
        
    //         })(stateMute);

    //     }

    // },[]);

    useEffect(() => {

      const video = refVideo.current;
      const handleTimeUpdate = () => {
        
        // const rateVideo = (video.currentTime / video.duration) * 100;
        // console.log("[MHVideoPlayer.js] progressRate : " + rateVideo + "%");
        setProgressRate((video.currentTime / video.duration)*100);
        
      };
  
      video.addEventListener('timeupdate', handleTimeUpdate);
  
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };

    }, []);

    useEffect(()=>{

      // rateVideo에 따라 이벤트 발생 ( 추천영상, 광고, 재생바 )
      // boolBusiness에 따라 광고유무
      // loop유무에 따라 ClossingRecommand 유무

    },[progressRate]);

    useEffect(()=>{
      setIsPlaying(!refVideo.current.paused);
    },[refVideo]);

    useEffect(() => {
        const playVideo = async () => {
          try {
            await refVideo.current.play();
          } catch (error) {
            setStateMute(true);
          }
        };
      
        if (boolAutoPlay) {
          playVideo();
        }
    }, [boolAutoPlay, stateMute]);

    return (
        <div className='mx-auto'>
            <div className="video-player mx-auto" style={{width: vWidth, height: vHeight}}>
                <video
                    ref = {refVideo}
                    // controlslist="nodownload"
                    autoPlay = {stateAutoPlay}
                    muted = {stateMute}
                    loop = {boolAutoReplay}
                    width="100%"
                    height="100%"
                >
                    Your browser does not support the video tag.
                    <source src={filePathVideo} type="video/mp4" />
                </video>
                <div className='video-bottom-ovl flex'>
                  <Image
                      className='video-logo' 
                      src={ImgLogo}
                      alt='LOGO'
                      onClick={moveToMain}
                      style={{ objectFit: 'cover', width: '10%', height: '60%' }}
                  />  
                  { isPlaying? 
                    <PauseOutlined />
                    :
                    <CaretRightOutlined 
                      className='btnPlay text-2xl' 
                      style={{position: 'absolute'}}
                      onClick={clickPlay}
                    />
                  }
                  
                </div>
            </div>
        </div>
    );

};