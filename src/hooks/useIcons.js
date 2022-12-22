import {
  SiAngular,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiVimeo,
} from "react-icons/si";
import Firebase from "../components/Icons/Firebase";
import Nextjs from "../components/Icons/Nextjs";

export default function getIcon(iconName) {
  switch (iconName) {
    case "HTML":
      return <SiHtml5 className="h-10 w-10 fill-[#D96342]" />;
    case "CSS":
      return <SiCss3 className="h-10 w-10 fill-[#2071F2]" />;
    case "SASS":
      return <SiSass className="h-10 w-10 fill-[rgb(80%,40%,60%)]" />;
    case "TAILWIND":
      return <SiTailwindcss className="h-10 w-10 fill-sky-400" />;
    case "NEXTJS":
      return <Nextjs className="h-10 w-10 fill-gray-900 dark:fill-gray-400" />;
    case "REACT":
      return <SiReact className="h-10 w-10 fill-blue-400" />;
    case "NODE":
      return <SiNodedotjs className="h-10 w-10 fill-[#509941]" />;
    case "JAVASCRIPT":
      return <SiJavascript className="h-10 w-10 fill-[#f1dc50]" />;
    case "ANGULAR":
      return <SiAngular className="h-10 w-10 fill-[#B9002D]" />;
    case "VIMEO":
      return <SiVimeo className="h-10 w-10 fill-[#00B1DF]" />;
    case "FIREBASE":
      return <Firebase className="h-10 w-10" />;
    default:
      return;
  }
}
