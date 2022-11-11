import React from 'react';
import './Home.css';

import NavbarStaticComponent from '../../components/static/navbar/Navbar';
import FooterStaticComponent from '../../components/static/footer/Footer';

function HomePage() {
  return (
    <>

    <NavbarStaticComponent />

    <main>
      <p>Home Page</p>
    </main>

    <FooterStaticComponent />

    </>
  )
}

export default HomePage
