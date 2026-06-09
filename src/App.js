import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import { TopNav } from './Components/TopNav';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { About } from './pages/About';
import NewProps from './pages/NewProps';
import Events from './pages/Events';
import List from './Components/LIst';











function App() {
  return (
     <BrowserRouter>
      
      <TopNav />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} /> 
       <Route path="/props" element={<NewProps/>}/>
       <Route path="/events" element={<Events/>}/>
       <Route path="/list" element={<List/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App
