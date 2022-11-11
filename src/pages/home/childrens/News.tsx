import React from 'react';
import './News.css';

function NewsCard(props: { imgSrc: string, title: string, description: string, date: string }) {
  return (
    <a href="" className='ptc-news-card'>
      <img src={`/news/${ props.imgSrc }.jpg`} alt="" />
      <div className='ptc-news-create_at'>
        <svg width='14px' fill='#888' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M216.1 408.1C207.6 418.3 192.4 418.3 183 408.1L119 344.1C109.7 335.6 109.7 320.4 119 311C128.4 301.7 143.6 301.7 152.1 311L200 358.1L295 263C304.4 253.7 319.6 253.7 328.1 263C338.3 272.4 338.3 287.6 328.1 296.1L216.1 408.1zM128 0C141.3 0 152 10.75 152 24V64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0zM400 192H48V448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192z"/></svg>
        <p>{ props.date }</p>
      </div>
      <p className='ptc-news-title ptc-news-limit' title={ props.title }>{ props.title }</p>
      <p className='ptc-news-description ptc-news-limit' title={ props.description }>{ props.description }</p>
    </a>
  )
}

function News() {
  const List = [
    {
      imgSrc: '2',
      title: 'สาขาคอมพิวเตอร์',
      description: 'อดีตไม่สำคัญ ปัจจุบัน มีอนาคต',
      date: 'วันศุกร์ที่ 11 พฤษจิกายน 2565'
    },
    {
      imgSrc: '3',
      title: 'สาขาการบัญชี',
      description: 'สอบบัญชีก็แค่ปวดหัวยังดีกว่ามีรักรั่วๆแล้วปวดใจ',
      date: 'วันศุกร์ที่ 11 พฤษจิกายน 2565'
    },
    {
      imgSrc: '4',
      title: 'สาขาไฟฟ้ากำลัง',
      description: 'การเดินทางนับพันลี้ ยังต้องมีก้าวแรกเสมอ',
      date: 'วันพฤหัสบดีที่ 10 พฤษจิกายน 2565'
    },
    {
      imgSrc: '1',
      title: 'สาขาช่างยนต์',
      description: 'ยกใจให้สองล้อ ดีกว่าไปง้อคนสองใจ',
      date: 'วันพฤหัสบดีที่ 10 พฤษจิกายน 2565'
    }
  ];

  return (
    <div className='ptc-main ptc-news-container'>
      <div className='ptc-content ptc-news-content'>
        <div className='ptc-news-header'>
          <div className='borderline'></div>
          <p className='title'>ข้อมูลข่าวสาร/ประชาสัมพันธ์</p>
        </div>
        
        <div className='ptc-news-result'>
          { List.map(news => <NewsCard imgSrc={ news.imgSrc } title={ news.title } description={ news.description } date={ news.date } />) }
        </div>
      </div>
    </div>
  )
}

export default News
