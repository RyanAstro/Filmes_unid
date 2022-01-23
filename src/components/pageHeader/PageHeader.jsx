import React from 'react';

import './pageHeader.scss';

const PageHeader = props => { 
  return (
    <div >
      <h1 className='page-header'></h1>
      <h2>{props.children}</h2>
    </div>
  );
}

export default PageHeader;