import React from "react";
import Content from "../../components/Containers/Content";
import Section from "../../components/Containers/Section";
import { ReactComponent as AboutLogo } from "../../assets/images/about-logo.svg";
import Skills from "../Skills/Skills";

const AboutPage = () => {
  return (
    <>
      <Section title="about">
        <Content>
          <div className="my-10 grid max-w-screen-lg grid-cols-1 items-center gap-8 lg:grid-cols-2 ">
            <div
              className="col-span-2 justify-self-center lg:col-span-1"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <AboutLogo style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="col-span-2 flex flex-col gap-10 lg:col-span-1" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <h2 className="text-center text-5xl font-black xl:text-6xl ">
                Sobre mí
              </h2>
              <span className="text-xl">
                En mi carrera como programador de software he manejado
                diferentes tecnologías y lenguajes de programación, centrado
                actualmente como desarrollador Frontend. Me gusta aprender
                nuevas tecnologías y ponerlas en práctica. Podréis ver a
                continuación los diferentes proyectos desarrollados con los
                frameworks y librerías usadas.
              </span>
              <Skills/>
            </div>
          </div>
        </Content>
      </Section>
    </>
  );
};

export default AboutPage;
