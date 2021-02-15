import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from '../components/login/Login';
import Menu from '../components/menu/Menu';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/menu" component={Menu}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
