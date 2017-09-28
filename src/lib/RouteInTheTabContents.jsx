/**
 * @<RouteInTheTabContents/>
 */

import React from 'react';
import { Route } from 'react-router-dom';
//import { matchPath } from 'react-router';
import SwipeableViews from 'react-swipeable-views';
import NavLink from './navLink';
import ShowAWhile from './ShowAWhile';

const getIndex = (aoPath, page) =>
  aoPath.reduce((rtn, item, i) => {
    if (item.pathname === page) return i;
    else return rtn;
  }, 0);

const RouteInTheBox = ({
  className,
  component:Component,
  render,
  children,
  duration,
  ...props
}) => {
  const sub = () =>
    children ? (
      <Route children={children} {...props} />
    ) : (
      <Route
        children={props => {
          if(props.history.action==='POP' && !props.match){
            return null;
          }
          if(render){
            return <ShowAWhile component={render(props)} duration={!props.match && duration} />;
          }
          if(Component){
            console.log(props.match)
            console.log(duration)
            return <ShowAWhile component={<Component {...props}/>} duration={!props.match && duration} />;
          }
          return null;
        }}
        {...props} 
      />
    );
  return <div className={className}>{sub()}</div>;
};
const getPage = (aoPath, index) =>
  (aoPath[index] || {}).pathname || aoPath[0].pathname;

const getChildrenData = children => {
  let data = {};

  React.Children.forEach(children, ({ props, type }) => {
    if (!props.pathname) return;

    if (type() === 'Tab') {
      data[props.pathname] = {
        ...data[props.pathname],
        ...{
          pathname: props.pathname,
          tabName: props.desc
        }
      };
    } else if (type() === 'Content') {
      data[props.pathname] = { ...data[props.pathname], ...props };
    }
  });
  return Object.keys(data).map(pathname => data[pathname]);
};

export const Tab = () => 'Tab';
export const Content = () => 'Content';

export const RouteInTheTabContents = ({
  basePath = '',
  duration = 350,
  easeFunction = 'cubic-bezier(0.15, 0.3, 0.25, 1)',
  delay = 0,
  className = {
    wrap: 'tab-contents',
    contentWrap: 'contents',
    content: 'content'
  },
  children
}) => {
  const aoPath = getChildrenData(children);
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
          <div className={className.contentWrap}>
            <SwipeableViews
              springConfig={{
                duration: `${duration}ms`,
                easeFunction,
                delay: `${delay}ms`
              }}
              style={{ height: '100%' }}
              index={getIndex(aoPath, page) || 0}
              onChangeIndex={index =>
                history.replace(`${basePath}/${getPage(aoPath, index)}`)
              }
            >
              {aoPath.map(
                ({ pathname, className: itemClassName, ...itemProps }, key) => (
                  <RouteInTheBox
                    path={`${basePath}/${pathname}`}
                    className={`${className.content || ''} ${itemClassName ||
                      ''}`}
                    exact
                    duration={duration}
                    key={key}
                    {...itemProps}
                  />
                )
              )}
            </SwipeableViews>
          </div>
        </div>
      )}
    />
  );
};
