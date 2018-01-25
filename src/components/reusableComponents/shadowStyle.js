import React from 'react';
import StyleInput from './styleInput';

const ShadowStyle =({
    h_offsetValue, h_offsetValueChange,
    v_offsetValue, v_offsetValueChange,
    blur, blurChange,
    spread, spreadChange,
})=>(
    <div className='shadow-value'>
        <h3>shadow</h3>
        <div className='box-shadow-input'>
            <StyleInput
                name='h-offsetValue'
                value={h_offsetValue}
                minVal='-20'
                maxVal='20'
                inputChange={h_offsetValueChange}
            />
            <StyleInput
                name='v-offsetValue'
                value={v_offsetValue}
                minVal='-20'
                maxVal='20'
                inputChange={v_offsetValueChange}
            />
            <StyleInput
                name='blur'
                value={blur}
                minVal='0'
                maxVal='20'
                inputChange={blurChange}
            />
            <StyleInput
                name='spread'
                value={spread}
                minVal='0'
                maxVal='20'
                inputChange={spreadChange}
            />
        </div>
    </div>
)

export default ShadowStyle