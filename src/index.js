import React from 'react';
import { render } from 'react-dom';
import './assets/scss/app.scss';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import { Provider as StoreProvider } from "./components/Store/Store";
import * as routes from './consts/route.js';
// import reportWebVitals from './reportWebVitals';


import Header from "./components/Header";
import Home from "./routes/home";

render(
    <StoreProvider>
      <BrowserRouter>
          <Route  render={props => (
              <Header
                  history={props.history}
              />
          )}/>
          <Switch>
              <Route exact path={routes.ROUTE_HOME}>
                  <Home />
              </Route>
              <Route exact path={routes.ROUTE_VOTES}>
              </Route>
              {/*<Route*/}
              {/*    link='/'*/}
              {/*    // render={() => <Redirect to="/mountain" />}*/}
              {/*>*/}
              {/*</Route>*/}
          </Switch>
      </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
