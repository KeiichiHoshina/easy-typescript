import React, { useState } from 'react';

const Counter =()=> {
    const [currentValue, setValue] = useState(0);

    return (
        <>
            <h2>{currentValue}</h2>
            <button onClick={() => setValue(currentValue - 1)}>-1</button>
            <button onClick={() => setValue(currentValue + 1)}>+1</button>
        </>
    );
}

export default Counter;
