import React from 'react';
import './Event.css';

function EventCard() {
  return (
    <a href="" title='ฝึกประสบการณ์วิชาชีพ ณ บริษัท แปซิฟิกการทอ จำกัด' className='ptc-event-card'>
      <img src="http://gtech.ac.th/img/eventnews/03/03.jpg" alt="" />
      <p>ฝึกประสบการณ์วิชาชีพ ณ บริษัท แปซิฟิกการทอ จำกัด</p>
    </a>
  )
}

function Event() {
  const List = [
    {},
    {},
    {},
    {}
  ];

  return (
    <div className='ptc-main ptc-event-container'>
      <div className='ptc-content ptc-event-content'>
        <div className='ptc-event-header'>
          <div className='borderline'></div>
          <p className='title'>ข่าวงานกิจกรรม</p>
        </div>
        
        <div className='ptc-event-result'>
          { List.map(news => <EventCard />) }
        </div>
      </div>
    </div>
  )
}

export default Event
