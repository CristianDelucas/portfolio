import React from "react";
import { ReactComponent as HomeLogo } from "../../assets/images/home-logo.svg";
import Content from "../../components/Containers/Content";
import Section from "../../components/Containers/Section";

const HomePage = () => {
  return (
    <Section title={"home"}>
      <Content>
        <div
          className="my-10 flex  flex-col items-center justify-center rounded-3xl bg-zinc-900 p-5 sm:flex-row "
          id="home"
        >
          <div className="flex flex-col text-white ">
            <p className="w-full text-xl font-bold xl:text-2xl ">
              👋{"Hola"}, soy
            </p>
            <p className="w-full text-5xl font-bold xl:text-8xl ">CRISTIAN</p>
            <h1 className="w-full text-2xl md:text-3xl">
              Desarrollador Frontend
            </h1>
          </div>
          <div>
            <HomeLogo style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
      </Content>
    </Section>
  );
};

export default HomePage;
