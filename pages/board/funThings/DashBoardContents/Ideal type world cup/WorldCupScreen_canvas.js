import React, { useRef, useEffect } from 'react';
import Canvas from '@lib/hooks/game/Canvas';
import useGameState from '@lib/hooks/game/useGameState';
// import Map from '@lib/hooks/game/Map';

export default function GameScreen(){

    
    const { gameState, start, stop, menu, pause } = useGameState();
    // Canvas(canvasRef)
    // Map(canvasRef)

    // console.log(gameState);

    const canvasRef = useRef(null);
    // const 

    useEffect(()=>{
        const canvas = canvasRef.current;

        const rect = canvas.getBoundingClientRect();

        const context = canvas.getContext('2d');
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        canvas.addEventListener('click', handleCanvasClick);
        // const canvasRect = canvas.getBoundingClientRect();
        // // 선 그리기
        // context.beginPath();
        // context.moveTo(50, 50); // 시작 좌표
        // context.lineTo(200, 50); // 끝 좌표
        // context.stroke(); // 선 그리기
    
        // // 사각형 그리기
        // context.fillStyle = 'blue';
        // context.fillRect(50, 100, 150, 80);
    
        // // 원 그리기
        // context.beginPath();
        // context.arc(150, 250, 50, 0, 2 * Math.PI);
        // context.stroke();
        
        const box_left = {
            position: { x: canvasWidth/8, y: canvasHeight/6, z: 100 },
            size: {width: 90, height: 110},
            rotation: 0,
        };
    
        const box_right = {
            position: { x: (canvasWidth/8) + 130 , y: canvasHeight/6, z: 100 },
            size: {width: 90, height: 110},
            rotation: 0,
        };

        const text_title = {
            position : { x : (canvasWidth/8) + 100, y : canvasHeight/3 , z: 100},
            size : 10,
            color : "black",
            text : "제목란",
        }

        const text_vs = {
            position : { x : (canvasWidth/8) + 105, y : canvasHeight/(1.8) , z: 100},
            size : 10,
            color : "black",
            text : "VS",
        }
    
        function drawBox(box) {
        
            const { position, rotation, size } = box;
            const { x, y, z} = position;
            const {width, height} = size;

            context.save();

            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x + width,   y);
            context.lineTo(x + width,   y + height);
            context.lineTo(x,           y + height);

            context.closePath();
            context.stroke();

            context.restore();
        }

        function drawText(text){
            context.fillStyle = text.color;
            context.font = `${text.size}px sans-serif`;
            context.fillText(text.text, text.position.x, text.position.y);
        }
    
        function animate() {
            context.clearRect(0, 0, canvas.width, canvas.height);

    
            drawBox(box_left);
            drawBox(box_right);
            
            drawText(text_vs);
    
            requestAnimationFrame(animate);
        }

        function handleCanvasClick(event) {
            const mouseX = (event.clientX - rect.left) * canvas.width / rect.width;
            const mouseY = (event.clientY - rect.top) * canvas.height / rect.height;

            if (isPointInBox(mouseX, mouseY, box_left)) {
              console.log('좌측 박스를 클릭했습니다.');
            }    
        }

        function isPointInBox(mouseX, mouseY, box){
            console.log("x : "+box.position.x+" ~ "+ ( box.position.x + box.size.width )+"\n"
            +"y : "+box.position.y+" ~ "+( box.position.y+ box.size.height ) );
            console.log("mouse : "+mouseX+", "+mouseY);
            if( box.position.x <= mouseX && ( box.position.x + box.size.width ) >= mouseX
                && box.position.y <= mouseY && ( box.position.y + box.size.height ) >= mouseY )
                return true;
            
            return false;
        }
    
        animate();
    },[]);

    return (
        <div className='bg-gray-100'>
            {/* gameEngine.main() */}
            <h1 className="text-3xl font-semibold">Minho Ideal WorldCup :: Enjoy your Self!!!</h1>
            <p className="mt-2 text-gray-600">Choose your Pick!!!</p>

            <div className='w-full relative' style={{height :'27rem'}}>
                {/* <canvas ref={canvasRef}  width={window.innerWidth} height={window.innerHeight} style={{ border: '1px solid black' }}/> */}
                <canvas ref={canvasRef} className='w-full h-full relative top-0 left-0 border-solid border border-black'/>
            </div>
            
            
        </div>
    )
}