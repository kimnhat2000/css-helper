import React from 'react';
import StyleInput from './styleInput';

const BoxTransparency =({transparency, opacity, transparencyChange, opacityChange})=>(
    <div className='box-size'>
        <h3>transparency</h3>
        <StyleInput
            name='transparency'
            value={transparency}
            minVal='10'
            maxVal='100'
            inputChange={transparencyChange}
        />
        <StyleInput
            name='opacity'
            value={opacity}
            minVal='10'
            maxVal='100'
            inputChange={opacityChange}
        />
    </div>    
)
export default BoxTransparency