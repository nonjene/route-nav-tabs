import React from 'react';

import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
//import { matchPath } from 'react-router';

import Content1 from './Content1';
import Content2 from './Content2';
import Content2Detail from './Content2Detail';
import {
  RouteInTheTabContents,
  Tab,
  Content
} from '../lib/RouteInTheTabContents';

//location.pathname
const App = () => (
  <Router>
    <div className="wrapper">
      <Route exact path="/" render={() => <Redirect to="/content1" />} />
      <RouteInTheTabContents
        basePath=""
        className={{
          wrap: 'tab-contents',
          contentWrap: 'contents',
          content: 'content'
        }}
      >
        <Tab pathname="content1" desc="tab1" />
        <Tab pathname="content2" desc="tab2" />
        <Content
          pathname="content1"
          className="content-1"
          render={props=><Content1 foo="bar" {...props}/>}
        />
        <Content
          pathname="content2"
          className="content-2"
          component={Content2}
        />
      </RouteInTheTabContents>
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
