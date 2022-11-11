import React from 'react';
import './Navbar.css';

import BannerLogo from '../../../img/banner-logo.png';

function NavbarStaticComponent() {
  return (
    <nav className='ptc-static ptc-nb-container'>
      <div className='ptc-content ptc-nb-content'>
        <a href="" title='' className='ptc-nb-lg'>
          <img src={ BannerLogo } alt="" />
        </a>

        <div className='ptc-nb-menu'>
          <a href="" className='ptc-nb-card'>
            <p>หน้าหลัก</p>
          </a>
          <a href="" className='ptc-nb-card'>
            <p>เกี่ยวกับวิทยาลัยฯ</p>
            <svg width='6px' fill='#ddd' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
          </a>
          <a href="" className='ptc-nb-card'>
            <p>ฝ่ายบริหาร</p>
            <svg width='6px' fill='#ddd' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
          </a>
          <a href="" className='ptc-nb-card'>
            <p>ข้อมูลสถานศึกษา</p>
            <svg width='6px' fill='#ddd' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
          </a>
          <a href="" className='ptc-nb-card'>
            <p>งานประกันคุณภาพ</p>
            <svg width='6px' fill='#ddd' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
          </a>
          <a href="" className='ptc-nb-card'>
            <p>แผนกวิชา</p>
            <svg width='6px' fill='#ddd' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavbarStaticComponent
