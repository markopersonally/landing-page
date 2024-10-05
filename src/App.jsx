import Footer from "./components/Footer.jsx";
import Navigation from "./components/Navigation.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
