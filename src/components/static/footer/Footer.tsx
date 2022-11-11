import React from 'react';
import './Footer.css';

function FooterStaticComponent() {
  return (
    <footer className='ptc-static ptc-ft-container'>
      <div className='ptc-content ptc-ft-content'>
        <div className='ptc-ft-card'>Left</div>
        <div className='ptc-ft-card'>Center</div>
        <div className='ptc-ft-card'>Right</div>
      </div>
    </footer>
  )
}

export default FooterStaticComponent
