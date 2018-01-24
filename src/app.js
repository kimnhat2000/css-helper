import React from 'react';
import ReactDom from 'react-dom';
import BoxShadow from './components/boxShadow';
import './style/globalStyle.css'

const CssHelper =()=>(
    <div>
        <BoxShadow/>
    </div>
)

ReactDom.render(<CssHelper/>, document.getElementById('app'))