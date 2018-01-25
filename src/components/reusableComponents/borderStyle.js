import React from 'react';
import StyleInput from './styleInput';

const BorderStyle =({
    borderThickness, borderThicknessChange,
    borderRed, borderRedChange,
    borderGreen, borderGreenChange,
    borderBlue, borderBlueChange,
    borderRadius, borderRadiusChange,
})=>(
    <div className='box-attribute'>
            <h3>border</h3>
            <StyleInput
                name='border thickness'
                value={borderThickness}
                minVal='-1'
                maxVal='30'
                inputChange={borderThicknessChange}
            /> 
            <StyleInput
                name='borderRadius'
                value={borderRadius}
                minVal='0'
                maxVal='20'
                inputChange={borderRadiusChange}
            />
            <h3>border color</h3>
            <StyleInput
                name='border red'
                value={borderRed}
                minVal='0'
                maxVal='255'
                inputChange={borderRedChange}
            />
            <StyleInput
                name='border green'
                value={borderGreen}
                minVal='0'
                maxVal='255'
                inputChange={borderGreenChange}
            />
            <StyleInput
                name='border blue'
                value={borderBlue}
                minVal='0'
                maxVal='255'
                inputChange={borderBlueChange}
            />                    
    </div>
)

export default BorderStyle