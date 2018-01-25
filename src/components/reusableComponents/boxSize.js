import React from 'react';
import StyleInput from './styleInput';

const BoxSize =({width, widthChange, height, heightChange})=>(
    <div className='box-size'>
        <h3>box size</h3>
        <StyleInput
            name='width'
            value={width}
            minVal='10'
            maxVal='500'
            inputChange={widthChange}
        />
        <StyleInput
            name='height'
            value={height}
            minVal='10'
            maxVal='500'
            inputChange={heightChange}
        />
    </div>    
)
export default BoxSize