import './Drawing.css';
import {useEffect, useRef, useState} from 'react';

const Drawing = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 1900;
        canvas.height = 900;

        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;
    }, []);

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        setIsDrawing(true);
        nativeEvent.preventDefault();
    };

    const draw = ({nativeEvent}) => {
        if(!isDrawing) {
            return;
        }
        
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        nativeEvent.preventDefault();
    };

    const stopDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const setToDraw = () => {
        contextRef.current.globalCompositeOperation = 'source-over';
    };

    const setToErase = () => {
        contextRef.current.globalCompositeOperation = 'destination-out';
    };

    const saveImageToLocal = (event) => {
        let link = event.currentTarget;
        link.setAttribute('download', 'canvas.png');
        let image = canvasRef.current.toDataURL('image/png');
        link.setAttribute('href', image);
    };

    return (
        <div>
            <canvas className="canvas-container"
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}>
            </canvas>
            <div>
                <button onClick={setToDraw} class="btn bg-info">
                    Draw
                </button>
                <button onClick={setToErase} class="btn bg-info">
                    Erase
                </button>
            </div>
        </div>
    )
}

export default Drawing;