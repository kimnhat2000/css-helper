import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import BoxShadow from '../components/boxShadow';
import TextShadow from '../components/textShadow';
import Main from '../testing/main';

const CssHelperRouters=()=>(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={BoxShadow} exact={true}/>
            <Route path='/textShadow' component={TextShadow}/>
            <Route path='/main' component={Main}/>
        </Switch>
    </BrowserRouter>
)

export default CssHelperRouters