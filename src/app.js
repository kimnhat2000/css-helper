import React from 'react';
import ReactDom from 'react-dom';
import BoxShadow from './components/boxShadow';
import CssHelperRouters from './routers/cssHelperRouters';
import './style/globalStyle.css'

ReactDom.render(<CssHelperRouters/>, document.getElementById('app'))