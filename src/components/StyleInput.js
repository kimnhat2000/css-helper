import React from 'react'

class StyleInput extends React.Component{
    constructor(props){
        super(props);
        const {name, minVal, maxVal, value}=this.props
        this.state={
            name,
            value,
            minVal,
            maxVal,
        }
    }

    onValueChange=(e)=>{
        this.setState({value:e.target.value})
        this.props.inputChange(this.state.value)
    }

    render(){
        const {name, minVal, maxVal, value}=this.state  
        return(
            <div className='all-inputs'>
                <h3>{name}</h3>
                <input
                    type='range'
                    min={minVal}
                    max={maxVal}
                    value={value}
                    onChange={this.onValueChange}
                />
                <input
                    type='number'
                    value={value}
                    onChange={this.onValueChange}
                />                   
            </div>
        )
}

}

export default StyleInput