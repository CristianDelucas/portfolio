import React from "react";
import {ReactComponent as HomeLogo} from 'assets/images/home-logo.svg';
import Content from "components/Containers/Content";
import Section from "components/Containers/Section";

const HomePage = () => {
  return (
    
        <Section title={'home'}>
        <Content>
          <div className="flex flex-col  sm:flex-row my-10 items-center justify-center rounded-3xl  p-5 " id="home">
            <div className="flex flex-col text-black ">
              <p className="w-full text-2xl xl:text-2xl font-bold ">👋{'Hola'}, soy</p>
              <p className="w-full text-5xl xl:text-8xl font-bold ">CRISTIAN</p>
              <h1 className="w-full text-2xl md:text-3xl">Desarrollador Frontend</h1>
            </div>
            <div >
              <HomeLogo style={{width:'100%', height:'auto'}}  />
            </div>
          </div>
        </Content>
      </Section>
  );
};

export default HomePage;
