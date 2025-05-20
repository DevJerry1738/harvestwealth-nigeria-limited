import './App.css';
import Header from './components/header/header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/home';
import About from './components/pages/about/about';

import References from './components/pages/references/references';
import Panel from './components/pages/panel/panel';
import Footer from './components/footer/footer';
import Contact from './components/pages/contact/contact';
import Epc from './components/pages/epc/epc';
import Spa from './components/pages/spa/spa';
import Engineering from './components/pages/engineering/engineering';
import Procurement from './components/pages/procurement/procurement';
import Construction from './components/pages/construction/construction';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/epc" element={<Epc />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/procurement" element={<Procurement />} />
        <Route path="/construction" element={<Construction />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
