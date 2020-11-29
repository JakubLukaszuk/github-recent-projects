import React from 'react';

import './Backdrop.sass';

const backdrop = (props) => (props.show
  ? <div className='backdrop' onClick={props.clicked}></div>
  : null);

export default backdrop;