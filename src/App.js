import AboutPage from "./@pages/AboutPage/AboutPage";
import Contact from "./@pages/Contact/Contact";
import HomePage from "./@pages/HomePage/HomePage";
import Projects from "./@pages/Projects/Projects";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto w-11/12 h-full lg:w-8/12  min-h-screen">
      <HomePage/>
      <AboutPage/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
