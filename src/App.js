import AboutPage from "./@pages/AboutPage/AboutPage";
import HomePage from "./@pages/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto w-11/12 h-full lg:w-8/12  min-h-screen">
      <HomePage/>
      <AboutPage/>
    </div>
  );
}

export default App;
