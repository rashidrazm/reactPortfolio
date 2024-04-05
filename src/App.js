import './App.css';
import AboutMe from './components/AboutMe';
import Bot from './components/Bot';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    <div className='p-[20px] main'>
     {/* Nav Bar */}
     <NavBar />
     {/* Bot  */}
     <Bot />
     {/* Intro */}
     <Home/>

     {/* About me */}
     <AboutMe/>

     {/* Skills */}
     <Skills />

     {/* portfolio */}
     <Portfolio/>

     {/* Contact us */}
     <Contact/>

     {/* Footer */}
     <Footer/>
     

    </div>
  );
}

export default App;
