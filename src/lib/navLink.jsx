import React from 'react';
import { Link, Route } from 'react-router-dom';

/* const routeChange = (history, e)=>{
    e.preventDefault();
    setTimeout(()=>{
      if(props.replace){
        history.replace(to);
      }else{
        history.push(to);
      }
    }, delay);
    
  } */
export default ({ label, to, isExact, ...props }) => (
  <Route
    path={to}
    exact={isExact}
    children={({ match }) =>
      match ? (
        <li className="active">
          <span>{label}</span>
        </li>
      ) : (
        <li>
          <Link to={to} {...props}>
            {label}
          </Link>
        </li>
      )}
  />
);
