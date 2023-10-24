import './App.css';
// import Typical from 'react-typical';
import Navbar from './Components/Navbar'; 
import Projects from './Components/Projects';
import HomePage from './Components/HomePage';
// import About from './Components/About';
import Tools from './Components/Tools';
import Skills from './Components/Skills';
// import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <>
   <Navbar />
      <HomePage/>
      {/* <About/> */}
      <Projects/>
      <Skills/>
      <Tools/>
      {/* <Contact/> */}
      <Footer/>

    </>
  );
}

export default App;
