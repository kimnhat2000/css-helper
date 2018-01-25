import React from 'react';
import StyleInput from './styleInput';

const Color =({
    name,
    red, redChange,
    green, greenChange,
    blue, blueChange,
})=>(
    <div className='shadow-color'>
        <h3>{name}</h3>
        <StyleInput
            name='Red'
            value={red}
            minVal='0'
            maxVal='255'
            inputChange={redChange}
        />
        <StyleInput
            name='green'
            value={green}
            minVal='0'
            maxVal='255'
            inputChange={greenChange}
        />
        <StyleInput
            name='blue'
            value={blue}
            minVal='0'
            maxVal='255'
            inputChange={blueChange}
        />
    </div>
)
export default Color