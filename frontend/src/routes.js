import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import New from './pages/New';

//Switch permite que apenas uma rota seja executada por vez
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={DashBoard} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    );
}