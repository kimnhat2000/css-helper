import React from 'react';
import StyleInput from './StyleInput';

const ShadowInput =({h_offsetValue, v_offsetValue, blur, spread, borderRadius, inputChange})=>{
    return(
        <div className='box-shadow-input'>
            <StyleInput
                name='h-offsetValue'
                value={h_offsetValue}
                minVal='-20'
                maxVal='20'
                inputChange={inputChange}
            />
            <StyleInput
                name='v-offsetValue'
                value={v_offsetValue}
                minVal='-20'
                maxVal='20'
                inputChange={inputChange}
            />
            <StyleInput
                name='blur'
                value={blur}
                minVal='0'
                maxVal='20'
                inputChange={inputChange}
            />
            <StyleInput
                name='spread'
                value={spread}
                minVal='0'
                maxVal='20'
                inputChange={inputChange}
            />
            <StyleInput
                name='borderRadius'
                value={borderRadius}
                minVal='0'
                maxVal='100'
                inputChange={inputChange}
            />
        </div>
    )
}

export default ShadowInput