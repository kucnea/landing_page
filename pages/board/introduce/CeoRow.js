import { CONFIG_FILES } from 'next/dist/shared/lib/constants';
import React, {useEffect, useState} from 'react'

export default function Ceo({isStart}) {

    const [msg,setMsg] = useState("");

    useEffect(()=>{
        console.log("[Ceo.js] isStart : "+isStart);

        const tmpMsg = "안녕하세요 이민호 입니다.\ 각종 개발을 참 좋아라 합니다.";

        const animateText = async () => {

            const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

            for( var i = 0 ; i < tmpMsg.length ; i++ ){

                await delay(50);

                ((index) => {
                    if (tmpMsg.charAt(index) === '\n') {
                        setMsg((preMsg) => preMsg + '<br>');
                    } else {
                    setMsg((preMsg) => preMsg + tmpMsg.charAt(index));
                    }
                })(i);
                

            }
            

        }

        animateText();

        
        
    },[isStart])

    return (
    <aside className="bg-black text-white p-6 rounded-lg w-full font-mono">
        <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
            <p className="text-sm">bash</p>
        </div>
        <div className="mt-4 text-left">
            <p className="text-green-400">$ minho install next</p>
            <p className="text-white">+ minho@23.11.13</p>
            <p className="text-white">added 1 package, and audited 2 packages in 3s</p>
            <p className="text-green-400">$ {msg}<a className="blinkingCursor">_</a></p>
            {/* <p className="text-green-400" dangerouslySetInnerHTML={{ __html: `$ ${msg}<a className="blinkingCursor">_</a>` }} /> */}
        </div>
    </aside>
    )
  }
  