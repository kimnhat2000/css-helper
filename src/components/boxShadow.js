import React from 'react';
import StyleInput from './StyleInput';

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

            <div className='input-value'>
                <div className='box-shadow-input'>
                    <StyleInput
                        name='h-offsetValue'
                        value={this.state.h_offsetValue}
                        minVal='-20'
                        maxVal='20'
                        inputChange={(value)=>this.setState({h_offsetValue:value})}
                    />
                    <StyleInput
                        name='v-offsetValue'
                        value={this.state.v_offsetValue}
                        minVal='-20'
                        maxVal='20'
                        inputChange={(value)=>this.setState({v_offsetValue:value})}
                    />
                    <StyleInput
                        name='blur'
                        value={this.state.blur}
                        minVal='0'
                        maxVal='20'
                        inputChange={(value)=>this.setState({blur:value})}
                    />
                    <StyleInput
                        name='spread'
                        value={this.state.spread}
                        minVal='0'
                        maxVal='20'
                        inputChange={(value)=>this.setState({spread:value})}
                    />
                    <StyleInput
                        name='borderRadius'
                        value={this.state.borderRadius}
                        minVal='0'
                        maxVal='100'
                        inputChange={(value)=>this.setState({borderRadius:value})}
                    />
                </div>

                <div className='shadow-color'>
                    <h3>shadow color</h3>
                    <StyleInput
                        name='shadow color Red'
                        value={this.state.shadowColorRed}
                        minVal='0'
                        maxVal='255'
                        inputChange={(value)=>this.setState({shadowColorRed:value})}
                    />
                    <StyleInput
                        name='shadow color green'
                        value={this.state.shadowColorGreen}
                        minVal='0'
                        maxVal='255'
                        inputChange={(value)=>this.setState({shadowColorGreen:value})}
                    />
                    <StyleInput
                        name='shadow color blue'
                        value={this.state.shadowColorBlue}
                        minVal='0'
                        maxVal='255'
                        inputChange={(value)=>this.setState({shadowColorBlue:value})}
                    />
                    
                </div>
            </div>

            <div className='box container'>

                <StyleInput
                    name='box opacity'
                    value={this.state.boxOpacity}
                    minVal='0'
                    maxVal='100'
                    inputChange={(value)=>this.setState({boxOpacity:value})}
                />

                <div
                    style={style}
                    className='changeBox'
                />

                <div className='border-style'>
                    <StyleInput
                        name='border thickness'
                        value={this.state.borderThickness}
                        minVal='-1'
                        maxVal='30'
                        inputChange={(value)=>this.setState({borderThickness:value})}
                    />  
                    <div className='border-color'>
                        <h3>border color</h3>
                        <StyleInput
                            name='border red'
                            value={this.state.borderRed}
                            minVal='0'
                            maxVal='255'
                            inputChange={(value)=>this.setState({borderRed:value})}
                        />
                        <StyleInput
                            name='border green'
                            value={this.state.borderGreen}
                            minVal='0'
                            maxVal='255'
                            inputChange={(value)=>this.setState({borderGreen:value})}
                        />
                        <StyleInput
                            name='border blue'
                            value={this.state.borderBlue}
                            minVal='0'
                            maxVal='255'
                            inputChange={(value)=>this.setState({borderBlue:value})}
                        />           
                    </div>    
                </div>          
            </div>

            <div className='box-change'>

                <div className='box-size'>
                    <h3>box size</h3>
                    <StyleInput
                        name='width'
                        value={this.state.width}
                        minVal='10'
                        maxVal='500'
                        inputChange={(value)=>this.setState({width:value})}
                    />
                    <StyleInput
                        name='height'
                        value={this.state.height}
                        minVal='10'
                        maxVal='500'
                        inputChange={(value)=>this.setState({height:value})}
                    />

                </div>

                <div className='change-box-color'>
                    <h3>box color</h3>
                    <StyleInput
                        name='Red'
                        value={this.state.red}
                        minVal='0'
                        maxVal='255'
                        inputChange={(value)=>this.setState({red:value})}
                    />
                    <StyleInput
                        name='green'
                        value={this.state.green}
                        minVal='0'
                        maxVal='255'
                        inputChange={(value)=>this.setState({green:value})}
                    />
                    <StyleInput
                        name='blue'
                        value={this.state.blue}
                        minVal='0'
                        maxVal='255'
                        inputChange={(value)=>this.setState({blue:value})}
                    />                              
                </div>

                <div className='background-transparency'>
                    <h3>background transparency</h3>
                    <StyleInput
                        name='transparency'
                        value={this.state.transparency}
                        minVal='0'
                        maxVal='100'
                        inputChange={(value)=>this.setState({transparency:value})}
                    />                            
                </div>

            </div> 
		</div>
		)
	}
}

export default BoxShadow
