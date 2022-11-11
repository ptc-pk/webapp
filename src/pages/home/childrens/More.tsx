import React from 'react';
import './More.css';

function More() {
  return (
    <div className='ptc-main ptc-more-container'>
      <div className="ptc-content ptc-more-content">
        <a href="" className='ptc-more-card'>
          <img src="http://gtech.ac.th/img/icon/bookshelf.png" alt="" />
          <p className='header'>หลักสูตรที่เปิดสอน</p>
          <p className='content'>รายละเอียดสาขาวิชาที่เปิดสอน ระดับปวช./ปวส.</p>
        </a>

        <a href="" className='ptc-more-card'>
          <img src="http://gtech.ac.th/img/icon/compose.png" alt="" />
          <p className='header'>ใบสมัครเรียนออนไลน์</p>
          <p className='content'>สมัครเรียนกับเราแบบออนไลน์</p>
        </a>

        <a href="" className='ptc-more-card'>
          <img src="http://gtech.ac.th/img/icon/download.png" alt="" />
          <p className='header'>ดาวน์โหลดเอกสาร</p>
          <p className='content'>เอกสารที่เกี่ยวกับวิทยาลัยฯ/โลโก้วิทยาลัยฯ</p>
        </a>
      </div>
    </div>
  )
}

export default More
