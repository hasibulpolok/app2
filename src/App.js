import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { TopNav } from './Components/TopNav';
import Header from './Components/Header';
import Footer from './Components/Footer';







function App() {
  return (
     <BrowserRouter>
      <Header />
      <TopNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App
