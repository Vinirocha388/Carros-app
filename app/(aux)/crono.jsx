import React, { useState, useRef } from 'react';

const Crono = () => {
    const [time, setTime] = useState({ minutes: 0, seconds: 0, milliseconds: 0 });
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => {
                    let { minutes, seconds, milliseconds } = prevTime;

                    milliseconds += 10;
                    if (milliseconds >= 1000) {
                        milliseconds = 0;
                        seconds += 1;
                    }
                    if (seconds >= 60) {
                        seconds = 0;
                        minutes += 1;
                    }

                    return { minutes, seconds, milliseconds };
                });
            }, 10);
        }
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    };

    const reset = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime({ minutes: 0, seconds: 0, milliseconds: 0 });
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>
                {String(time.minutes).padStart(2, '0')}:
                {String(time.seconds).padStart(2, '0')}:
                {String(time.milliseconds / 10).padStart(2, '0')}
            </h1>
            <button onClick={start} disabled={isRunning} style={{ margin: '5px' }}>
                Iniciar
            </button>
            <button onClick={stop} disabled={!isRunning} style={{ margin: '5px' }}>
                Parar
            </button>
            <button onClick={reset} style={{ margin: '5px' }}>
                Zerar
            </button>
        </div>
    );
};

export default Crono;