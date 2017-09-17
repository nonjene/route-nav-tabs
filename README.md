# route-nav-tabs

A react component of swipeable nav tabs. 
It is composed with [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) and react-router.

## usage

run `npm i route-nav-tabs react-router-dom --save`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { RouteInTheTabContents, Tab, Content } from 'route-nav-tabs';

// example of content components
import Foo from './Foo';
import Bar from './Bar';

const App = () => (
  <Router>
    <RouteInTheTabContents
        basePath=""
        className={{
          wrap: 'nav-tabs', 
          contentWrap: 'contents',
          content: 'content'
        }}
      >
        <Tab pathname="foo" desc="foo's tab" />
        <Tab pathname="bar" desc="bar's tab" />

        <Content pathname="foo" className="content-foo" component={Foo} />
        <Content pathname="bar" className="content-bar" component={Bar} />
        
      </RouteInTheTabContents>
  </Router>
);
ReactDOM.render(<App />, document.getElementById('root'));
```
when navigate to `localhost:3000/#/foo`, Foo component will render.

when swipe or tap the tabs from `foo` to `bar`, Foo will unmount and Bar will render.

[demo](http://nonjene.github.io/demo/route-nav-tabs/)