import React from 'react';
import './Footer.css';

import Logo from '../../../img/logo.png';

function FooterStaticComponent() {
  return (
    <footer className='ptc-static ptc-ft-container'>
      <div className='ptc-content ptc-ft-content'>
        
        <div className='ptc-ft-card left'>
          <img className='lg' src={ Logo } alt="" />
          <p className='header'>ที่อยู่</p>
          <p className='content'>57 หมู่ 4 ถนนชุมแพ - ภูเขียว บ.โนนศิลา ต.ชุมแพ อ.ชุมแพ จ.ขอนแก่น 40130</p>

          <p className='header'>ติดต่อ</p>
          <div className='call'>
            <a href="" className='block-icon'>
              <svg width='18px' fill='#aaa' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"/></svg>
              <p>043313234</p>
            </a>
            <a href="" className='block-icon'>
              <svg width='18px' fill='#aaa' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zm-90.7 96.7c-9.7-2.6-19.9 2.3-23.7 11.6l-20 48c-3.4 8.2-1 17.6 5.8 23.2L280 231.7c-16.6 35.2-45.1 63.7-80.3 80.3l-20.2-24.7c-5.6-6.8-15-9.2-23.2-5.8l-48 20c-9.3 3.9-14.2 14-11.6 23.7l12 44C111.1 378 119 384 128 384c123.7 0 224-100.3 224-224c0-9-6-16.9-14.7-19.3l-44-12z"/></svg>
              <p>083-6784505</p>
            </a>
          </div>

          <div style={{ display: 'flex' }}>
            <a href="" className='block-icon'>
              <svg width='18px' fill='#aaa' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z"/></svg>
              <p>gtech2559@gmail.com</p>
            </a>
          </div>
        </div>

        <div className='ptc-ft-card center'>
          <p className='header'>หน่วยงานส่วนอื่นๆ</p>
          <ul>
            <li><a href="" className='content'>ศูนย์เครือข่ายกำลังคนอาชีวศึกษา</a></li>
            <li><a href="" className='content'>กระทรวงศึกษาธิการ</a></li>
            <li><a href="" className='content'>สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน</a></li>
            <li><a href="" className='content'>สำนักงานคณะกรรมการส่งเสริมการศึกษาเอกชน</a></li>
            <li><a href="" className='content'>คุรุสภา</a></li>
            <li><a href="" className='content'>กองทุนกู้ยืมเพื่อการศึกษา</a></li>
            <li><a href="" className='content'>ระบบรายงานการประเมินตนเองของสถานศึกษาอาชีวศึกษา</a></li>
          </ul>
        </div>

        <div className='ptc-ft-card'>Right</div>
      </div>
    </footer>
  )
}

export default FooterStaticComponent
