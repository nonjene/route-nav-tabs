import React from 'react';
import { Link, Route } from 'react-router-dom';

export default ({ label, to, isExact }) =>
    <Route
        path={to}
        exact={isExact}
        children={({ match }) =>
            match ? <li className="active"><span>{label}</span></li> : <li><Link to={to}>{label}</Link></li>}
    />;
