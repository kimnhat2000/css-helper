import React from 'react';
import Second from './second';

class Third extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:this.props.value
        }
    }

    onValueChange=(e)=>{
        this.setState({value:e.target.value})
        this.props.inputChange(e)
    }

    render(){
        return(
            <div>
                <input
                    type='range'
                    min='0'
                    max='100'
                    value={this.state.value}
                    onChange={this.onValueChange}
                />
                <h3>{this.state.value}</h3>
            </div>
        )
    }
}

export default Third
