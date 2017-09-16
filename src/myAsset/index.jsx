/**
 * @require ./sty.scss
 */
import './sty.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
//import { matchPath } from 'react-router';

import Earning from './earning';
import EarningDetail from './earningDetail';
import Total from './total';
import RouteInTheTabContents from './RouteInTheTabContents';

//location.pathname
const Main = () => (
  <Router>
    <div className="wrapper">
      <Route exact path="/" render={() => <Redirect to="/total" />} />
      <RouteInTheTabContents
        basePath=""
        aoPath={[
          {
            pathname: 'total',
            tabName: '总资产',
            className: 'box1',
            component: Total
          },
          {
            pathname: 'earning',
            tabName: '累计收益',
            className: 'box2',
            component: Earning
          }
        ]}
        className={{
          content: 'box',
          wrap: 'page-wrap'
        }}
      />
      <Route
        path="/earning/:type"
        component={EarningDetail}
        className="box box3"
      />
    </div>
  </Router>
);

export default Main;
