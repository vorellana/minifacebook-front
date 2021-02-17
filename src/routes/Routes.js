import React, { useEffect, useState } from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from '../components/login/Login';
import Menu from '../components/menu/Menu';
import Cookies from 'universal-cookie';

const ProtectedRoute = ({ component: Component, isAuth ,  ...rest }) => (
  
  <Route {...rest} render={(props) => (
    isAuth === "true"
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
  )} />
);

function Routes() {
  const cookies = new Cookies();
  const [isAuthenticated, setIsAuthenticated ] = useState(cookies.get('isAuthenticated'));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        {/* <Route exact path="/menu" component={Menu}/> */}
        <ProtectedRoute exact path="/menu" component={Menu} isAuth={isAuthenticated}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;