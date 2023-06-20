import React, { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";


export function Counter({initialValue = 0, incrementAmount, incrementInterval}) {
    const[count, setCount] = useState(initialValue);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + incrementAmount);
        }, incrementInterval);

        return () => {
            clearInterval(interval);
        }
    },[incrementAmount, incrementInterval])
    
    return (
            <div>
                <CounterDisplay count={count} />
            </div>
        )
    }


// the constructor is no longer required in the Counter component since the state initialization and interval setup are handled within the lifecycle methods