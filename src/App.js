import React, { useState } from 'react';
import styled from 'styled-components'
import { Section } from './components/section'
import { Hero } from './components/hero'
import './App.css';
import gs1 from './img/gs/gs1.png'
import gs2 from './img/gs/gs2.png'
import gs3 from './img/gs/gs3.png'
import gs4 from './img/gs/gs1.png'
import gs5 from './img/gs/gs2.png'
import hcs1 from './img/hcs/image1.png'
import hcs2 from './img/hcs/image2.png'
import hcs3 from './img/hcs/image3.png'
import hcs_hero from './img/hcs_dashboard_1.png'


function App() {

  return (
    <div >
      <Hero color={'white'} img={hcs_hero} />
      <Section color={'white'} images={[hcs1, hcs2, hcs3]} />
      {/* <Section color={'white'} images={[gs1, gs2, gs3]} /> */}
    </div>
  );
}

export default App;
