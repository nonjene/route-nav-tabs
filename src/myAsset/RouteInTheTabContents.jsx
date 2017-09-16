/**
 * @<RouteInTheTabContents/> 用法栗子🌰
 * <Router>
    <div className="wrapper">
      <Route exact path="/" render={() => <Redirect to="/total" />} />
      {//开始}
      <RouteInTheTabContents
        basePath=""
        aoPath={[
          {
            pathname: 'total',
            tabName: '总资产',
            className: 'box1',
            component: Total
          },{
            pathname: 'earning',
            tabName: '累计收益',
            className: 'box2',
            component: Earning
          }
        ]}
        className={{ content: 'box', wrap: 'page-wrap'}}
      />
      {//结束}
      <Route path="/earning/:type" component={EarningDetail} className="box box3" />
    </div>
  </Router>
 */

import React from 'react';
import { Route } from 'react-router-dom';
//import { matchPath } from 'react-router';
import SwipeableViews from 'react-swipeable-views';
import NavLink from './navLink';

const getIndex = (aoPath, page) =>
  aoPath.reduce((rtn, item, i) => {
    if (item.pathname === page) return i;
    else return rtn;
  }, 0);

const RouteInTheBox = ({className, ...props}) => (
  <div className={className}>
    <Route {...props} />
  </div>
);
const getPage = (aoPath, index) => (aoPath[index] || {}).pathname || aoPath[0].pathname;

export default ({
  basePath = '',
  aoPath = [
    {
      pathname: 'page1',
      tabName: 'tab1',
      className: '',
      component: <div />
    }
  ],
  className = {
    content: '',
    wrap: ''
  }
}) => {
  return (
    <Route
      exact
      path={`${basePath}/:page`}
      render={({ history, match: { params: { page } } }) => (
        <div className={className.wrap}>
          <ul>
            {aoPath.map((item, key) => (
              <NavLink
                to={`${basePath}/${item.pathname}`}
                label={item.tabName}
                isExact={true}
                replace
                key={key}
              />
            ))}
          </ul>
          <SwipeableViews
            index={getIndex(aoPath, page) || 0}
            onChangeIndex={index => history.replace(`/${getPage(aoPath, index)}`)}
          >
            {aoPath.map((item, key) => (
              <RouteInTheBox
                path={`${basePath}/${item.pathname}`}
                component={item.component}
                className={`${className.content || ''} ${item.className || ''}`}
                exact
                key={key}
              />
            ))}
          </SwipeableViews>
        </div>
      )}
    />
  );
};
