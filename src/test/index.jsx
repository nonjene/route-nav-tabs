import React from 'react';

import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
//import { matchPath } from 'react-router';

import Content1 from './Content1';
import Content2 from './Content2';
import Content2Detail from './Content2Detail';
import RouteInTheTabContents from '../lib/RouteInTheTabContents';

//location.pathname
const App = () => (
  <Router>
    <div className="wrapper">
      <Route exact path="/" render={() => <Redirect to="/content1" />} />
      <RouteInTheTabContents
        basePath=""
        aoPath={[
          {
            pathname: 'content1',
            tabName: 'tab1',
            className: 'content-1',
            component: Content1
          },
          {
            pathname: 'content2',
            tabName: 'tab2',
            className: 'content-2',
            component: Content2
          }
        ]}
        className={{
          content: 'content',
          wrap: 'page-wrap',
          contentWrap: 'content-wrap'
        }}
      />
      <Route
        path="/Content2/:type"
        render={props => (
          <Content2Detail className="content content-3" {...props} />
        )}
      />
    </div>
  </Router>
);

export default App;
