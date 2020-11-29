import React from 'react';
import NavItem from './NavigationItem/NavigationItem';
import * as ROUTES from '../../../constants/routes';
import './NavigationItems.sass'

const NavigationItems = () => (
    <ul className = {'navigationItems'}>
        <NavItem link = {ROUTES.HOME} exact>Home</NavItem>
        <NavItem link = {ROUTES.ASSUMPTIONS}>Assumptions</NavItem>
    </ul>
);

export default NavigationItems;