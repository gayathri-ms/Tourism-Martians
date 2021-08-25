import React from 'react';
import {BrowserRouter , Switch, Route} from "react-router-dom"
import Create from './create';
import Home from './home';
import "./App.css";
const Routes=()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            {/* <Route path="/state" exact component={State}/> */}
        </Switch>
        </BrowserRouter>
    );
}
export default Routes;