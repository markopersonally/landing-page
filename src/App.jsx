import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import SectionAboutMe from "./components/SectionAbouteMe";
import Footer from "./components/Footer";
import "./index.scss";
import SectionSkills from "./components/SectionSkills";

const App = () => {
  return (
    <>
      <Header />
      <SectionAboutMe />
      <Projects />
      <SectionSkills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
