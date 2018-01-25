import React from 'react'
import ShadowStyle from './reusableComponents/shadowStyle';
import Color from './reusableComponents/color';
import StyleInput from './reusableComponents/styleInput';
import {Link} from 'react-router-dom';
import '../style/textShadow.css';

class TextShadow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            h_offsetValue:5,
            v_offsetValue:5,
            blur:5,
            spread:5,
            shadowColorRed:255,
            shadowColorGreen:0,
            shadowColorBlue:0,
            opacity:100,
        }
    }

    render(){
        const {h_offsetValue, v_offsetValue, blur, spread, shadowColorRed, shadowColorGreen, shadowColorBlue, opacity}=this.state
        let style={
            textShadow:`${h_offsetValue}px ${v_offsetValue}px ${blur}px rgba(${shadowColorRed},${shadowColorGreen},${shadowColorBlue}, ${opacity})`
        }

        return(
            <div className='text-shadow-container'>               
                <div className='text-shadow-style'>
                    <ShadowStyle
                        h_offsetValue={h_offsetValue}
                        v_offsetValue={v_offsetValue}
                        blur={blur} 
                        spread={spread}
                        h_offsetValueChange={(v)=>this.setState({h_offsetValue:v})}
                        v_offsetValueChange={(v)=>this.setState({v_offsetValue:v})}
                        blurChange={(v)=>this.setState({blur:v})}
                        spreadChange={(v)=>this.setState({spread:v})}
                    />
                    <h3>shadow color</h3>
                    <Color
                        red={shadowColorRed}
                        green={shadowColorGreen}
                        blue={shadowColorBlue}
                        redChange={(v)=>this.setState({shadowColorRed:v})}
                        greenChange={(v)=>this.setState({shadowColorGreen:v})}
                        blueChange={(v)=>this.setState({shadowColorBlue:v})}
                    />
                    <StyleInput
                        name='opacity'
                        value={opacity}
                        minval='0'
                        maxval='100'
                        inputChange={(v)=>this.setState({opacity:v/100})}
                    />
                </div>

                <div className='text-shadow-info'>
                    <h2 style={style}>CSS is cool!! React is cool</h2>
                    <h5>textShadow:`{h_offsetValue}px {v_offsetValue}px {blur}px rgba({shadowColorRed},{shadowColorGreen},{shadowColorBlue}, {opacity});`</h5> 
                    <Link to='/'>box shadow</Link>  
                </div>             
            </div>
        )
    }
}

export default TextShadow