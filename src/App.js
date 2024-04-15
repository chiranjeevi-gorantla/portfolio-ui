import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
