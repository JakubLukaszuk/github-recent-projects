import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.sass';

const navigationItem = (props) => (
    <li className = 'navigationItem'>
        <NavLink
        to={props.link}
        exact = {props.exact}
        activeClassName = {'navigationItem__text--active'}>
        {props.children}</NavLink>
    </li>
);

export default navigationItem;