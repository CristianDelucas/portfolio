import { useState } from "react";
import AboutPage from "./@pages/AboutPage/AboutPage";
import Contact from "./@pages/Contact/Contact";
import HomePage from "./@pages/HomePage/HomePage";
import Projects from "./@pages/Projects/Projects";
import "./App.css";
import ThemeToggle from "./components/Buttons/ThemeToggle";
import Footer from "./components/core/Footer/Footer";
import Navbar from "./components/core/Navbar/Navbar";
function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col bg-slate-200 ">
      {/* -- Navbar -- */}
      <Navbar/>
      {/* -- Navbar -- */}

        <HomePage/>
        <AboutPage/>
        <Projects/>
        <Contact/>

      {/* -- Footer -- */}
        <Footer/>
      {/* -- Footer -- */}
      {/* utils */}
        <ThemeToggle/>
      {/* utils */}
    </div>
  );
}

export default App;
