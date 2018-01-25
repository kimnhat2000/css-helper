import React from 'react';
import Second from './second';
import Third from './third';
import {Link} from 'react-router-dom';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:50,
        }
    }
    render(){
        const {value}=this.state
        return(
            <div>
                <Link to='/'>return to app</Link>
                <Third
                    value={this.state.value}
                    inputChange={(v)=>this.setState({value:v})}
                />
                <Second
                    value={this.state.value}
                    inputChange={(v)=>this.setState({value:v})}
                />
            </div>
        )
    }
}

export default Main