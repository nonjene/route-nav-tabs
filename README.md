# route-nav-tabs

A react component of swipeable nav tabs. 
It is composed with [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) and react-router.

## Demo

[demo](http://nonjene.github.io/demo/route-nav-tabs/)

## Usage

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

        {/* Content will receive and pass Route's render methods (component/render/children). */}
        <Content pathname="foo" className="content-foo" component={Foo} />
        <Content pathname="bar" className="content-bar" render={props=><Bar {...props}/> unmountWhenNotMatch={true}} />
        
      </RouteInTheTabContents>
  </Router>
);
ReactDOM.render(<App />, document.getElementById('root'));
```
when navigate to `localhost:3000/#/foo`, Foo component will render.

when swipe or tap the tabs from `foo` to `bar`, Foo will unmount and Bar will render.

### API

#### Content

| props               | type    | default | description                                                                                                                                                                                              |
|---------------------|---------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| unmountWhenNotMatch | boolean | false   | when tab switches, whether to umount previous tab's component.  Only work when using  `component` or `render` as `Route`'s render function . This prop will ignore if using `children` to render. |
| onRender | function | noop   | callback when route change and match. |