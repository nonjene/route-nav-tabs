/**
 * @require ./sty.scss
 */
import './sty.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { matchPath } from 'react-router';
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

const indexMap = {
  total: 0,
  earning: 1,
  earningDetail: 2
};
const getIndex = path => {
  const { params: { page, type } } = matchPath(path, {
    path: '/:page?/:type?',
    exact: true
  });
  return indexMap[page + (type ? 'Detail' : '')];
};

//location.pathname
const Main = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div className="wrapper">
          <Route exact path="/" render={() => <Redirect to="/total" />} />
          <ul>
            <NavLink to="/total" label="总资产" isExact={true} />
            <NavLink to="/earning" label="累计收益" isExact={true} />
          </ul>
          <SwipeableViews
            index={getIndex(location.pathname)}
            onChangeIndex={() => console.log('change...')}
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
            <RouteInTheBox
              path="/earning/:type"
              component={EarningDetail}
              className="box box3"
            />
          </SwipeableViews>
        </div>
      )}
    />
  </Router>
);

export default Main;
