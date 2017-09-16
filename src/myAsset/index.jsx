/**
 * @require ./sty.scss
 */
import './sty.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
//import { matchPath } from 'react-router';
import SwipeableViews from 'react-swipeable-views';

import Earning from './earning';
import EarningDetail from './earningDetail';
import Total from './total';
import NavLink from './navLink';

const RouteInTheBox = props => (
  <div className={props.className}>
    <Route {...props} />
  </div>
);
/*<Route exact path="/total" render={props => <Box component={Total} {...props} />} />*/
/*<Route exact path="/total" component={Total} />
<Route exact path="/earning" component={Earning} />
<Route path="/earning/:type" component={EarningDetail} />*/

const pageMapIndex = {
  total: 0,
  earning: 1
};

const getPage = index =>
  Object.keys(pageMapIndex).find(name => pageMapIndex[name] === index);
//location.pathname
const Main = () => (
  <Router>
    <div className="wrapper">
      <Route exact path="/" render={() => <Redirect to="/total" />} />
      <Route
        exact
        path="/:page"
        render={({ history, match: { params: { page } } }) => (
          <div className="page-wrap">
            <ul>
              <NavLink to="/total" label="总资产" isExact={true} replace />
              <NavLink to="/earning" label="累计收益" isExact={true} replace />
            </ul>
            <SwipeableViews
              index={pageMapIndex[page] || 0}
              onChangeIndex={index => history.replace(`/${getPage(index)}`)}
            >
              <RouteInTheBox
                exact
                path="/total"
                component={Total}
                className="box box1"
              />
              <RouteInTheBox
                exact
                path="/earning"
                component={Earning}
                className="box box2"
              />
            </SwipeableViews>
          </div>
        )}
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
