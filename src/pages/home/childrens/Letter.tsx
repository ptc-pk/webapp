import React from 'react';
import './Letter.css';

function LetterCard() {
  return (
    <a href="" className='ptc-letter-card'>
      <img src="http://gtech.ac.th/img/newsletter/015.jpg" alt="" />
    </a>
  )
}

function Letter() {
  const List = [{}, {}, {}, {}];

  return (
    <div className='ptc-main ptc-letter-container'>
      <div className='ptc-content ptc-letter-content'>
        <div className='ptc-letter-header'>
          <div className='borderline'></div>
          <p className='title'>จดหมายข่าวประชาสัมพันธ์กต่างๆ</p>
        </div>
        
        <div className='ptc-letter-result'>
          { List.map(news => <LetterCard /> ) }
        </div>
      </div>
    </div>
  )
}

export default Letter
