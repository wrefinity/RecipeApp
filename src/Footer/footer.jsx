import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='foot'>
        <h5> Wrashtech @ {new Date().getFullYear()}</h5>
    </div>
  )
}

export default Footer