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

import Header from "./components/Header";
import Home from "./routes/home";
import Vote from "./routes/vote";
import Votes from "./routes/votes";

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
                  <Votes/>
              </Route>
              <Route exact path={routes.ROUTE_VOTE}>
                  <Vote/>
              </Route>
          </Switch>
      </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
