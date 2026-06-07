import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Navbar } from 'react-bootstrap';
import { TopNav } from './Components/TopNav';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';






function App() {
  return (
    <BrowserRouter>
    <Header/>
   <TopNav></TopNav>
   <Content/>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
       
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App
