import React from 'react';
import './Home.css';

import NavbarStaticComponent from '../../components/static/navbar/Navbar';
import FooterStaticComponent from '../../components/static/footer/Footer';
import SliderBanner from './childrens/SliderBanner';
import Menu from './childrens/Menu';
import News from './childrens/News';
import Event from './childrens/Event';
import Letter from './childrens/Letter';
import Gallary from './childrens/Gallary';
import More from './childrens/More';

function HomePage() {
  return (
    <>

    <NavbarStaticComponent />

    <main>
      <SliderBanner />
      <Menu />
      <News />
      <Event />
      <Letter />
      <Gallary />
      <More />
    </main>

    <FooterStaticComponent />

    </>
  )
}

export default HomePage
