import React from 'react';

import Backdrop from '../../UI/Backdrop/BackDrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.sass';

const sideDrawer = (props) => {
    const {opened, close} = props;
    let attachedClasses = ['sideDrawer', 'sideDrawer__close'];

    if(opened){
        attachedClasses = ['sideDrawer', 'sideDrawer__open'];
    }

    return (
    <React.Fragment>
        <Backdrop show = {opened} clicked = {close}/>
            <div className={attachedClasses.join(' ')} onClick={close}>
            <nav>
            <NavigationItems/>
            </nav>
        </div>
    </React.Fragment>
  );
}

export default sideDrawer;