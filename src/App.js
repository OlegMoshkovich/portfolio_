import React from 'react';
import styled from 'styled-components'
import { Section } from './components/setup'
import { Hero } from './components/hero'
import './App.css';
import gs1 from './img/gs/gs1.png'
import gs2 from './img/gs/gs2.png'
import gs3 from './img/gs/gs3.png'
import hcs1 from './img/hcs/image1.png'
import hcs2 from './img/hcs/image2.png'
import hcs3 from './img/hcs/image3.png'


function App() {
  return (
    <div >
      <Hero color={'white'} img={gs1} />
      <Section color={'red'} />
      <Section color={'blue'} />
    </div>
  );
}

export default App;
