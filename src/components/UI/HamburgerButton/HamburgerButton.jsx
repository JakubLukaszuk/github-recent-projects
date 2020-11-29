import React from 'react';
import './HamburgerButton.sass';

const HamburgerButton = (props) =>{
    const {click} = props;

    return(
        <div className={'haburgerButton'} onClick={click}>
            <div className = {'haburgerButton__bar'}/>
            <div className = {'haburgerButton__bar'}/>
            <div className = {'haburgerButton__bar'}/>
        </div>
  )
};

export default HamburgerButton;