import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import ImgLogo from '/public/image/LogoMinho_noBack_wide.png'
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import OvlBottom from './VideoPlayer/OvlBottom';

export default function CustomVideo({filePathVideo, lengthTot, boolStreaming, boolAutoPlay, boolMute, boolAutoReplay, boolBusiness, vWidth, vHeight}){

    const refVideo = useRef(null);
    const refPlayer = useRef(null);

    const [isMobile,setIsMobile] = useState(false);
    const [isFullScreen,setIsFullScreen] = useState(false);
    const [isStreaming,setIsStreaming] = useState( boolStreaming != null ? boolStreaming : false);
    // 스트리밍 프로토콜 사용: HLS나 MPEG-DASH와 같은 스트리밍 프로토콜
    const [lengthTotVideo,setLengthTotVideo] = useState( lengthTot != null ? 
                                                                              isStreaming ? -1
                                                                                            : lengthTot
                                                                              : isStreaming ? -1
                                                                                              : 0 );
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
    
    useEffect(()=>{
        const handleResize = () => {
          setIsMobile(window.innerWidth <= mobileWidth);
        };

        const handlePlay = () => {
          
          if( !isPlaying && refVideo.current )
            try {
              refVideo.current.play();
              setIsPlaying(true);
            } catch (error) {
              setIsPlaying(false);
            }
            
          else if ( isPlaying && refVideo.current )
            try {
              refVideo.current.pause();
              setIsPlaying(false);
            } catch (error) {
              setIsPlaying(true);
            }
        }
    
        handleResize();
        // console.log("[MHVideoPlayer.js] isPlaying : "+isPlaying+", boolAutoPlay : "+boolAutoPlay);
        window.addEventListener('resize', handleResize);
        if( refPlayer.current )
          refPlayer.current.addEventListener('click', handlePlay);
        // if( refPlayer.current ) 
        //   refPlayer.current.addEventListener('mouseover', showFrame);

        return () => {
          window.removeEventListener('resize', handleResize);
          if( refPlayer.current )
            refPlayer.current.removeEventListener('click', handlePlay);
          // if( refPlayer ) 
          //   refPlayer.current.removeEventListener('mouseover', showFrame);
        };
    },[isPlaying]);

    useEffect(() => {

      const video = refVideo.current;

      // const getLengthTotVideo = () => {
        
      //   console.log("[MHVideoPlayer.js] video duration : "+video.duration);
      //   if( isStreaming ){
      //     setLengthTotVideo(-1);
      //   } else {
      //     if( lengthTot == null ){
      //       setLengthTotVideo(video.duration);
      //     } else {
      //       setLengthTotVideo(lengthTot);
      //     }
      //   }
      // };

      const handleTimeUpdate = () => {
        
        // const rateVideo = (video.currentTime / video.duration) * 100;
        // console.log("[MHVideoPlayer.js] progressRate : " + rateVideo + "%");
        setProgressRate((video.currentTime / video.duration)*100);
        
        if( lengthTotVideo == 0 ){
          setLengthTotVideo(video.duration);
        }
      };
  
      // if( !isStreaming && lengthTot == null )
      //   video.addEventListener('loadedmetadata', getLengthTotVideo);

      video.addEventListener('timeupdate', handleTimeUpdate);
  
      return () => {
        // if( !isStreaming && lengthTot == null )
        //   video.removeEventListener('loadedmetadata', getLengthTotVideo);
        if (video) {
          video.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };

    }, []);

    useEffect(()=>{

      // rateVideo에 따라 이벤트 발생 ( 추천영상, 광고, 재생바 )
      // boolBusiness에 따라 광고유무
      // loop유무에 따라 ClossingRecommand 유무

    },[progressRate]);

    /*
    useEffect(()=>{
      setIsPlaying(!refVideo.current.paused);
    },[refVideo]);
    */
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
            <div className="video-player mx-auto" style={{width: vWidth, height: vHeight}}
                  ref={refPlayer}
                  onMouseOver={()=>setIsShowFrame(true)}
                  onMouseOut={()=>setIsShowFrame(false)}
                  >
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
                { ( !isPlaying || isShowFrame ) &&
                  <OvlBottom 
                    isMobile={isMobile}
                    isFullScreen={isFullScreen}
                    setIsFullScreen={setIsFullScreen}
                    isStreaming={isStreaming}
                    lengthTotVideo={lengthTotVideo}
                    refVideo={refVideo}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    progressRate={progressRate}
                  />
                }
                
            </div>
        </div>
    );

};