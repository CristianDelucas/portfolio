
import { SiAngular, SiCss3, SiHtml5, SiJavascript, SiNodedotjs, SiReact, SiSass, SiTailwindcss, SiVimeo } from "react-icons/si";

export default function getIcon(iconName) {

        switch(iconName){
            case 'HTML':
                return <SiHtml5 className="w-10 h-10 fill-[#D96342]"/>
            case 'CSS':
                return(<SiCss3 className="w-10 h-10 fill-[#2071F2]"/>)
            case 'SASS':
                return(<SiSass className="w-10 h-10 fill-[rgb(80%,40%,60%)]"/>)
            case 'TAILWIND':
                return(<SiTailwindcss className="w-10 h-10 fill-sky-400"/>)
            case 'REACT':
                return(<SiReact className="w-10 h-10 fill-blue-400"/>)
            case 'NODE':
                return(<SiNodedotjs className="w-10 h-10 fill-[#509941]"/>)
            case 'JAVASCRIPT':
                return(<SiJavascript className="w-10 h-10 fill-[#f1dc50]"/>)
            case 'ANGULAR':
                return(<SiAngular className="w-10 h-10 fill-[#B9002D]"/>)
            case 'VIMEO':
                return(<SiVimeo className="w-10 h-10 fill-[#00B1DF]"/>)
            default: 
            return;
    
    }
}