import React from "react";
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {ReactComponent as FooterLogo} from '../../../assets/images/footer-logo.svg';

const Footer = () => {
  return (
    <div className=" bg-black px-5 text-base">
      <div className="flex max-w-screen-xl flex-col items-center justify-center  mx-auto gap-12 py-12 text-white">
        <div className="flex w-full flex-row flex-wrap gap-10 justify-around items-center">
          <div className="w-[250px]">
            <FooterLogo />
          </div>

          <div>
            <ul className="flex flex-col gap-2">
                <li >
                    <a href="https://www.linkedin.com/in/cristian-de-lucas-noguero-51a952197" className="flex items-start items-center" target="_blank" rel="noreferrer">
                        <button className="bg-white rounded-full p-2"><AiFillLinkedin className="w-7 h-7 fill-black" /></button>
                        <div className="ml-4">
                            <h6 className="text-gray-500">Linkedin</h6>
                            <p className="text-gray-50">linkedin.com/in/cristian-de-lucas-noguero-51a952197</p>
                    </div>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/CristianDelucas" className="flex items-start items-center " target="_blank" rel="noreferrer">
                        <button className="bg-white rounded-full p-2"><AiFillGithub className="w-7 h-7 fill-black" /></button>
                        <div className="ml-4">
                            <h6 className="text-gray-500">Github</h6>
                            <p className="text-gray-50">github.com/CristianDelucas</p>
                    </div>
                    </a>
                </li>
            </ul>
          </div>
          
        </div>

        <div className="w-full border-t-[1px] p-4 text-center" >
          CRISTIAN DE LUCAS NOGUERO
        </div>
      </div>
    </div>
  );
};

export default Footer;
