import React from 'react';
import './Gallary.css';

function Gallary() {
  return (
    <div className='ptc-main ptc-gallery-container'>
      <div className='ptc-content ptc-gallery-content'>
        <a href="" className='ptc-gallery-card'>
          <img src="/galleries/1.jpg" alt="" />
        </a>
        <a href="" className='ptc-gallery-card'>
          <img src="/galleries/2.jpg" alt="" />
        </a>
        <a href="" className='ptc-gallery-card'>
          <img src="/galleries/3.jpg" alt="" />
        </a>
        <a href="" className='ptc-gallery-card'>
          <img src="/galleries/4.jpg" alt="" />
        </a>
        <a href="" className='ptc-gallery-card'>
          <img src="/galleries/5.jpg" alt="" />
        </a>
        <a href="" className='ptc-gallery-card'>
          <img src="/galleries/6.jpg" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Gallary
