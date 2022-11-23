import Aos from "aos";
import React, { useEffect } from "react";
import { ReactComponent as HomeLogo } from "../../assets/images/home-logo.svg";
import Content from "../../components/Containers/Content";
import Section from "../../components/Containers/Section";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Section title={"home"}>
      <Content>
        <div
          className="my-10 flex  flex-col items-center justify-center rounded-3xl p-5 sm:flex-row text-slate-900 dark:text-slate-100"
          id="home"
          data-aos="zoom-in"
        >
          <div className="flex flex-col ">
            <p className="w-full text-2xl font-bold xl:text-2xl ">
              👋{"Hola"}, soy
            </p>
            <p className="w-full text-5xl font-bold xl:text-8xl ">CRISTIAN</p>
            <h1 className="w-full text-2xl md:text-3xl">
              Desarrollador Frontend
            </h1>
          </div>
          <div><HomeLogo style={{ width: "100%", height: "auto", fill:'#064E3B', stroke:'#064E3B'}}    /></div>
            
        </div>
      </Content>
    </Section>
  );
};

export default HomePage;
