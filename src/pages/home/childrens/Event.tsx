import React from 'react';
import './Event.css';

function EventCard(props: { imgSrc: string, title: string }) {
  return (
    <a href="" title={ props.title } className='ptc-event-card'>
      <img src={`/events/${ props.imgSrc }.jpg`} alt="" />
      <p>{ props.title }</p>
    </a>
  )
}

function Event() {
  const List = [
    { imgSrc: '1', title: 'สาขาการโรงแรม วิทยาลัยเทคโนโลยีภูเขียว' },
    { imgSrc: '2', title: 'สาขาการโรงแรม วิทยาลัยเทคโนโลยีภูเขียว' },
    { imgSrc: '3', title: 'สาขาการโรงแรม วิทยาลัยเทคโนโลยีภูเขียว' },
    { imgSrc: '4', title: 'ออกบริการชุมชน ซ่อมอุปกรณ์ไฟฟ้า เครื่องยนต์อุปกรณ์การเกษตร ณ บ้านพรมใต้' }
  ];

  return (
    <div className='ptc-main ptc-event-container'>
      <div className='ptc-content ptc-event-content'>
        <div className='ptc-event-header'>
          <div className='borderline'></div>
          <p className='title'>ข่าวงานกิจกรรม</p>
        </div>
        
        <div className='ptc-event-result'>
          { List.map(event => <EventCard imgSrc={ event.imgSrc } title={ event.title } />) }
        </div>
      </div>
    </div>
  )
}

export default Event
