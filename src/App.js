import NavBar from "./componenets/NavBar";
import Home from "./componenets/Home";
import SocialLinks from "./componenets/SocialLinks";
import AboutPage from "./componenets/AboutPage";
import Project from "./componenets/Project";
import Education from "./componenets/Education";
import Experience from "./componenets/Experience";
import Contact from "./componenets/Contact";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutPage/>
      <Education/>
      <Project/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
