/**
 * @require ./sty.scss
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

import Earning from './earning';
import EarningDetail from './earningDetail';
import Total from './total';
import NavLink from './navLink';

/*<Route exact path="/total" render={props => <Box component={Total} {...props} />} />*/
/*<Route exact path="/total" component={Total} />
<Route exact path="/earning" component={Earning} />
<Route path="/earning/:type" component={EarningDetail} />*/

const Main = () => (
  <Router>
    <div className="wrapper">
      <Route exact path="/" render={() => <Redirect to="/total" />} />
      <ul>
        <NavLink to="/total" label="总资产" isExact={true} />
        <NavLink to="/earning" label="累计收益" isExact={true} />
      </ul>
      <Route exact path="/total" component={Total} />
      <Route exact path="/earning" component={Earning} />
      <Route path="/earning/:type" component={EarningDetail} />
    </div>
  </Router>
);

export default Main;
