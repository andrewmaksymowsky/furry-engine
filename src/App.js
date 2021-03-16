import React from 'react'
import { useCanvas } from './hooks/useCanvas';
import './App.css';

function App() {

    const [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ] = useCanvas();

    const handleCanvasClick=(event)=>{
        const currentCoord = { x: event.clientX, y: event.clientY };
        setCoordinates([...coordinates, currentCoord]);
    };

    const handleClearCanvas=(event)=>{
        setCoordinates([]);
    };

    return (
        <main className="App-main">
            <canvas
                className="App-canvas"
                ref={canvasRef}
                width={canvasWidth}
                height={canvasHeight}
                onClick={handleCanvasClick} />

            <div className="button">
                <button onClick={handleClearCanvas} > CLEAR </button>
            </div>
        </main>
    );
};


export default App;
