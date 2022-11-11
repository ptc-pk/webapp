import React from 'react';
import './Letter.css';

function LetterCard(props: { imgSrc: string, title: string }) {
  return (
    <a href="" className='ptc-letter-card'>
      <img src={`/letters/${ props.imgSrc }.jpg`} alt={ props.title } />
    </a>
  )
}

function Letter() {
  const List = [
    { imgSrc: '1', title: '' },
    { imgSrc: '2', title: '' },
    { imgSrc: '3', title: '' },
    { imgSrc: '4', title: '' }
  ];

  return (
    <div className='ptc-main ptc-letter-container'>
      <div className='ptc-content ptc-letter-content'>
        <div className='ptc-letter-header'>
          <div className='borderline'></div>
          <p className='title'>จดหมายข่าวประชาสัมพันธ์กต่างๆ</p>
        </div>
        
        <div className='ptc-letter-result'>
          { List.map(letter => <LetterCard imgSrc={ letter.imgSrc } title={ letter.title } /> ) }
        </div>
      </div>
    </div>
  )
}

export default Letter
