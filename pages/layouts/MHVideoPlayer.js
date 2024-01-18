import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function CustomVideo({filePathVideo, boolAutoPlay, boolMute}){

    const refVideo = useRef(null);

    const [stateAutoPlay,setStateAutoPlay] = useState(boolAutoPlay);
    const [stateMute,setStateMute] = useState(boolMute);

    useEffect(()=>{

        // if( boolAutoPlay ){
            
        //     setStateAutoPlay(boolAutoPlay);
            
        //     refVideo.current.play().catch(error => {
        //         setStateAutoPlay(false);
        //     });

        // } else {

        // }

    },[]);

    return (
        <div className='mx-auto'>
            <div className="video-player">
                <video controls
                    autoPlay = {stateAutoPlay}
                    muted = {stateMute}
                    ref = {refVideo}
                    width="750"
                    height="500"
                >
                    Your browser does not support the video tag.
                    <source src={filePathVideo} type="video/mp4" />
                </video>
                {/* <ReactPlayer url={filePathVideo} playing /> */}
            </div>
        </div>
    );

};