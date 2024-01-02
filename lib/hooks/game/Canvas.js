import { useEffect } from 'react';

function Canvas(canvasRef) {
    useEffect(() => {
        const handleResize = () => {
            if (!canvasRef.current) return;

            const canvas = canvasRef.current;
            canvas.width = window.innerWidth * 0.75;
            canvas.height = window.innerHeight * 0.8;

            const context = canvas.getContext('2d');

            // context.fillStyle = 'blue';
            // context.fillRect(0, 0, canvas.width, canvas.height);
        }

        // 초기 렌더링 시에 한 번 실행
        handleResize();

        // 윈도우 resize 이벤트 리스너 추가
        window.addEventListener('resize', handleResize);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [canvasRef]);
}

export default Canvas;