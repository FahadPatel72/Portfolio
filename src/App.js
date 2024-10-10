import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <Footer />
      </>
  );
}

export default App;
