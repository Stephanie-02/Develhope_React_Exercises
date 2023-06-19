import React, { useState } from 'react';

export default function ClickCounter () {
    const[count, setCount] = useState(0);

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
