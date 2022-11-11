import React from 'react';
import './Menu.css';

function MenuCard(prop: {imgSrc: string, name: string}) {
  return (
    <a href="" title={ prop.name } className='ptc-menu-card'>
      <img src={ prop.imgSrc } alt="" />
      <p>{ prop.name }</p>
    </a>
  )
}

function Menu() {
  const List = [
    {
      imgSrc: 'http://gtech.ac.th/img/icon/megaphone.png',
      name: 'ประชาสัมพันธ์'
    },
    {
      imgSrc: 'http://gtech.ac.th/img/icon/document.png',
      name: 'ข่าวงานกิจกรรม'
    },
    {
      imgSrc: 'http://gtech.ac.th/img/icon/news.png',
      name: 'จดหมายข่าว'
    },
    {
      imgSrc: 'http://gtech.ac.th/img/icon/polaroids.png',
      name: 'รูปกิจกรรม'
    },
    {
      imgSrc: 'http://gtech.ac.th/img/icon/play.png',
      name: 'วิดีโอแนะนำวิทยาลัยฯ'
    },
    {
      imgSrc: 'http://gtech.ac.th/img/icon/location.png',
      name: 'ติดต่อสอบถาม'
    }
  ];

  return (
    <menu className='ptc-menu-list'>
      { List.map(card => <MenuCard imgSrc={ card.imgSrc } name={ card.name } />) }
    </menu>
  )
}

export default Menu
