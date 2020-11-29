import React from 'react';
import HamburgerButton from '../UI/HamburgerButton/HamburgerButton';
import NavigationItems from './NavigationItems/NavigationItems';
import './Navigation.sass'


const Navigation = (props) => {
    const {openSideDrawer} = props;

    return(
        <header className='navigation'>
        <HamburgerButton click = {openSideDrawer}/>
        <nav className={['navigation__itemWrapper', 'navigation__itemWrapper--desktopOnly'].join(' ')}>
          <NavigationItems/>
        </nav>
      </header>
    )
};
  export default Navigation;