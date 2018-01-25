import React from 'react';
import ShadowStyle from './reusableComponents/shadowStyle';
import Color from './reusableComponents/color';
import BorderStyle from './reusableComponents/borderStyle';
import BoxSize from './reusableComponents/boxSize';
import BoxTransparency from './reusableComponents/boxTransparency';
import {Link} from 'react-router-dom';
import '../style/boxShadow.css';

class BoxShadow extends React.Component{
	constructor(props){
		super(props);
		this.state={
			h_offsetValue:3,
			v_offsetValue:3,
			blur: 3,
            spread: 3,
            borderRadius:0,
            red:255,
            green:100,
            blue:100,
            shadowColorRed:100,
            shadowColorGreen:100,
            shadowColorBlue:100,
            borderThickness:5,
            boxOpacity:100,
            borderRed:0,
            borderGreen:0,
            borderBlue:0,
            width: 150,
            height: 200,
            transparency:100,
		}
    }

	render(){
        const { 
            h_offsetValue, 
            v_offsetValue, 
            blur, 
            spread, 
            borderRadius, 
            red, 
            green, 
            blue, 
            shadowColorRed, 
            shadowColorGreen, 
            shadowColorBlue, 
            boxOpacity, 
            borderThickness, 
            borderRed, 
            borderGreen, 
            borderBlue,
            width,
            height,
            transparency
        } = this.state
        const style={   
            width:`${width}px`,
            height:`${height}px`,
            boxShadow: `${h_offsetValue}px ${v_offsetValue}px ${blur}px ${spread}px rgb(${shadowColorRed},${shadowColorGreen},${shadowColorBlue})`, 
            borderRadius: `${borderRadius}px`,
            backgroundColor: `rgba(${red},${green},${blue}, ${transparency/100})`,
            opacity:`${boxOpacity/100}`,
            border:`${borderThickness}px solid rgb(${borderRed},${borderGreen},${borderBlue})`,
        }
		return(

		<div className='box-shadow-container'>    
            <div className='all-input'>
                <div className='input-value'>
                    <ShadowStyle
                        h_offsetValue={h_offsetValue}
                        h_offsetValueChange={(v)=>this.setState({h_offsetValue:v})}
                        v_offsetValue={v_offsetValue}
                        v_offsetValueChange={(v)=>this.setState({v_offsetValue:v})}
                        blur={blur}
                        blurChange={(v)=>this.setState({blur:v})}
                        spread={spread}
                        spreadChange={(v)=>this.setState({spread:v})}
                        borderRadius={borderRadius}
                        borderRadiusChange={(v)=>this.setState({borderRadius:v})}
                    />
                    <Color
                        name='shadow color'
                        red={shadowColorRed} green={shadowColorGreen} blue={shadowColorBlue}
                        redChange={(v)=>this.setState({shadowColorRed:v})} 
                        greenChange={(v)=>this.setState({shadowColorGreen:v})}
                        blueChange={(v)=>this.setState({shadowColorGreen:v})}
                    />
                </div>

                <div className='border'>
                    <BorderStyle
                        borderThickness={borderThickness}
                        borderThicknessChange={(v)=>this.setState({borderThickness:v})}
                        borderRadius={borderRadius}
                        borderRadiusChange={(v)=>this.setState({borderRadius:v})}
                        borderRed={borderRed}
                        borderRedChange={(v)=>this.setState({borderRed:v})}
                        borderGreen={borderGreen}
                        borderGreenChange={(v)=>this.setState({borderGreen:v})}
                        borderBlue={borderBlue}
                        borderBlueChange={(v)=>this.setState({borderBlue:v})}
                    />
                </div>

                <div className='box-change'>
                    <BoxSize
                        width={width}
                        widthChange={(v)=>this.setState({width:v})}
                        height={height}
                        heightChange={(v)=>this.setState({height:v})}
                    />
                    <Color
                        name='box color'
                        red={red} green={green} blue={blue}
                        redChange={(v)=>this.setState({red:v})}
                        greenChange={(v)=>this.setState({green:v})}
                        blueChange={(v)=>this.setState({blue:v})}
                    />
                    <BoxTransparency
                        transparency={transparency}
                        opacity={boxOpacity}
                        transparencyChange={(v)=>this.setState({transparency:v})}
                        opacityChange={(v)=>this.setState({boxOpacity:v})}
                    />   
                </div>
            </div>

            <div className='box-text'>
                <div className='box'>
                    <div
                        style={style}
                    />       
                </div>

                <div className='show-style-text'>
                    <h5>width:{width}px;</h5>
                    <h5>height:{height}px;</h5>
                    <h5>box-shadow:{h_offsetValue}px {v_offsetValue}px {blur}px {spread}px rgb({shadowColorRed},{shadowColorGreen},{shadowColorBlue});</h5>
                    <h5>border-radius: {borderRadius}px;</h5>
                    <h5>backgroundColor: rgba({red},{green},{blue}, {transparency/100});</h5>
                    <h5>opacity:{boxOpacity/100};</h5>
                    <h5>border:{borderThickness}px solid rgb({borderRed},{borderGreen},{borderBlue});</h5>
                </div> 
                <Link to='/textShadow'>text shadow</Link>   
            </div>   

		</div>
		)
	}
}

export default BoxShadow
