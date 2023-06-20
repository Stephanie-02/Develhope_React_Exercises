import React, { useState, useEffect } from 'react';

export default function ClickCounter ({onCounterChange}) {
    const[count, setCount] = useState(0);

    useEffect(() => {
        onCounterChange(count);
    },[count, onCounterChange]);

    const handleClickCounter = () => {
        setCount(prevCount => prevCount + 1);
    }
    
    return (
            <div>
              <h1>Count: {count}</h1>
              <button onClick = {handleClickCounter}>
                  Counter
              </button>
            </div>
        )
}
