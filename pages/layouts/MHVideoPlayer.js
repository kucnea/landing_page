import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function CustomVideo({filePathVideo}){

    const refVideo = useRef(null);

    useEffect(()=>{
        // console.log("[MHVideoPlayer.js] run Page.");
        // if( refVideo.current ){
        //     console.log("[MHVideoPlayer.js] run play1");
        //     // refVideo.current.play();
            
        //     refVideo.current.play().catch(error => {
        //         console.error('[MHVideoPlayer.js] run fail', error);
        //     });
        //     console.log("[MHVideoPlayer.js] run play2");
        // }
    },[]);

    return (
        <div className='mx-auto'>
            <div className="video-player">
                <video autoPlay controls muted
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