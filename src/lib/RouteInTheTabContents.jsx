/**
 * @<RouteInTheTabContents/>
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

const RouteInTheBox = ({ className, ...props }) => (
  <div className={className}>
    <Route {...props} />
  </div>
);
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

export const Tab = ()=> "Tab";
export const Content = ()=> "Content";


export const RouteInTheTabContents = ({
  basePath = '',
  
  className = {
    wrap: 'tab-contents',
    contentWrap: 'contents',
    content: 'content',
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
              style={{ height: '100%' }}
              index={getIndex(aoPath, page) || 0}
              onChangeIndex={index =>
                history.replace(`${basePath}/${getPage(aoPath, index)}`)}
            >
              {aoPath.map(({pathname, className: itemClassName, ...itemProps}, key) => (
                <RouteInTheBox
                  path={`${basePath}/${pathname}`}
                  className={`${className.content || ''} ${itemClassName ||
                    ''}`}
                  exact
                  key={key}
                  {...itemProps}
                />
              ))}
            </SwipeableViews>
          </div>
        </div>
      )}
    />
  );
};
