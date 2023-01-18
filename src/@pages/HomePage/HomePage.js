import Aos from "aos";
import React, { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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
          className="my-10 flex flex-col items-center justify-center rounded-3xl p-5 text-slate-900 dark:text-slate-100 sm:flex-row"
          id="home"
          data-aos="zoom-in"
        >
          <div className="flex flex-col ">
            <p className="w-full text-2xl font-bold xl:text-2xl ">
              👋{"Hola"}, soy
            </p>
            <p className="w-full text-5xl font-bold xl:text-8xl ">CRISTIAN</p>
            <h1 className="w-full text-2xl md:text-3xl">
              Desarrollador Fullstack
            </h1>
          </div>
          <div>
            <HomeLogo
              style={{
                width: "100%",
                height: "auto",
                fill: "#064E3B",
                stroke: "#064E3B",
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <ul className="flex flex-row gap-10">
            <li>
              <a
                href="https://www.linkedin.com/in/cristian-de-lucas-noguero-51a952197"
                className="flex items-start items-center"
                target="_blank"
                rel="noreferrer"
              >
                <button className="rounded-full bg-white p-2">
                  <AiFillLinkedin className="h-7 w-7 fill-black" />
                </button>
                <div className="ml-2">
                  <h6 className="text-xl font-semibold text-gray-900 dark:text-gray-300">
                    Linkedin
                  </h6>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/CristianDelucas"
                className="flex items-start items-center "
                target="_blank"
                rel="noreferrer"
              >
                <button className="rounded-full bg-white p-2">
                  <AiFillGithub className="h-7 w-7 fill-black" />
                </button>
                <div className="ml-2">
                  <h6 className="text-xl font-semibold text-gray-900 dark:text-gray-300">
                    Github
                  </h6>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </Content>
    </Section>
  );
};

export default HomePage;
