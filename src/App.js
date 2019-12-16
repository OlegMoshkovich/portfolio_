import React from 'react';
import { Section } from './components/section/section'
import { Video } from './components/section/video'
import { Hero } from './components/hero/hero'
import { Nav } from './components/nav/globalNav'
import { PageNav } from './components/nav/pageNav'
import './App.css';
import gs5_hero from './img/gs/gs2.png'
import map from './img/gs/map.png'
import ava from './img/gs/image_gif.gif'
import world from './img/gs/WORLD.png'
import hcs1 from './img/hcs/image1.png'
import hcs2 from './img/hcs/image2.png'
import hcs3 from './img/hcs/image3.png'
import emilie1 from './img/emilie/emilie1.png'
import emilie2 from './img/emilie/emilie2.png'
import emilie3 from './img/emilie/emilie3.png'
import ribbon1 from './img/ribbon1.png'
import ribbon2 from './img/ribbon2.png'
import ribbon3 from './img/ribbon3.png'
import hcs_hero from './img/hcs_dashboard_1.png'
import ribbon_hero from './img/ribbon_dwg.png'
import ribbon_realized from './img/ribbon_realized.png'
import emilie_hero from './img/emilie-01.png'
import title from './img/title.png'
import prototype1 from './img/gs/prototype1.png'
import prototype2 from './img/gs/prototype2.png'
import gs_video from './img/gs_short_demo.mp4'
import hcs_video from './img/HCS.mp4'





function App() {

  return (
    <div >
      <Nav />
      <PageNav />

      <Hero color={'blue'} fontColor={'white'} header={true} title={'Oleg Moshkovich / Engineer'} img={title} proportions={'93%'} />
      {/* -----------------gs */}
      <Hero color={'blue'} fontColor={'white'} header={true} title={'Girls Scouts / React Native Development'} img={gs5_hero} proportions={'100%'} />

      <Video src={gs_video} proportions={'110%'}
        description1={'In 2017 I joined omission.studio, то develop a fully functioning prototype of the Girls Scouts mobile application designed for 1.2 million users. The prototype was built using React Native Library and EXPO toolchain.'}
      />
      <Hero color={'white'} fontColor={'blue'} weight={'light'} header={true} title={'Product Map'} img={map} proportions={'93%'} />
      {/* -----------------gs */}

      <Section color={'white'} border={'transparent'} images={[world, ava]}
        description1={'In 2017 I joined omission.studio, то develop a fully functioning prototype of the Girls Scouts mobile application designed for 1.2 million users. The prototype was build using React Native Framework and EXPO toolchain.'}
      />
      <Section color={'white'} border={'transparent'} images={[prototype1, prototype2]}
        description1={' Extensive user research and testing took place in New York and Washington DC, gathered feedback resulted in the definition of the first release feature set.The production team was engaged in September of 2018. The first version of the application is on schedule to be released in March of 2019.'} />
      {/* -----------------emilie */}

      <Hero color={'blue'} fontColor={'white'} header={true} title={'BCG.DV / ReactJs + Redux + Material'} img={emilie_hero} proportion={'50%'} proportions={'85%'} />
      <Section color={'white'} images={[emilie1, emilie2, emilie3]}
        description1={'In 2019 I joined Boston Consultant Group to work on Emilie Scientific platform as a front end engineer. The platform included user facing assesment survey, and 2 adminn portals used for management of varies aspects of the application.'} />
      {/* -----------------hcs */}
      <Hero color={'blue'} fontColor={'white'} header={true} title={'HCS / ReactJS and Unity development'} img={hcs_hero} proportions={'100%'} />
      <Section color={'white'} images={[hcs1, hcs2, hcs3]}
        description1={'In 2015 I joined mission driven start up to work on products designed to increase safety in the industrial space.'}
      // description2={'During my time in HCS I developed JS(React) analytical dashboards to visualize data obtained during product pilots and worked on a simmulation engine created using Unity3D.'} 
      />
      <Video src={hcs_video} proportions={'90%'}
        description1={'During my time in HCS I developed JS(React) analytical dashboards to visualize data obtained during product pilots and worked on a simmulation engine created using Unity3D.'}
      />
      {/* -----------------ribbon */}
      <Hero color={'blue'} fontColor={'white'} header={true} title={'10 Design / CATIA Computational design'} img={ribbon_hero} proportions={'140%'} />
      <Section color={'white'} images={[ribbon1, ribbon2, ribbon3]}
        description1={'In 2012 I participated in designing a cultural portion of chinese city - Zhuhai. I was asked to move to Hong Kong for 6 month and consult 10 Design during design development phase of the project.'}
        description2={' As a computational designer I created parametric models contolled by a comprehensive set of data points. The objective was to find the optimal form for the bespoke geometrical object on the scale of architecture.'} />
      <Section color={'white'} images={[ribbon_realized]} border={'transparent'}
        description2={' The workflow involved using object oriented programing to construct the geometrical system to produced the final form of the structure. The designed object was realized in 2017.'} />


    </div>
  );
}

export default App;
