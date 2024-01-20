import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import ImgLogo from '/public/image/LogoMinho_noBack_wide.png'
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import OvlBottom from './VideoPlayer/OvlBottom';

export default function CustomVideo({filePathVideo, boolAutoPlay, boolMute, boolAutoReplay, boolBusiness, vWidth, vHeight}){

    const refVideo = useRef(null);

    const [isMobile,setIsMobile] = useState(false);
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

    const mobileWidth = process.env.NEXT_PUBLIC_REACT_APP_MOBILE_SIZE;
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

    useEffect(()=>{
        const handleResize = () => {
          setIsMobile(window.innerWidth <= mobileWidth);
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
    },[]);

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
                <OvlBottom isMobile={isMobile} refVideo={refVideo} isPlaying={isPlaying} setIsPlaying={setIsPlaying} progressRate={progressRate}/>
            </div>
        </div>
    );

};