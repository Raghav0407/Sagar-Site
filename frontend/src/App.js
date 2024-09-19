import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import AboutUs from './Pages/AboutUs';
import ContactUsPage from './Pages/ContactUsPage';
import Home from './Pages/Home';
import PortfolioPage from './Pages/PortfolioPage';
import ServicesPage from './Pages/ServicesPage';
import Enquiry from "./Components/Enquiry"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/aboutus' element={<AboutUs />}/>
        <Route path='/portfolio' element={<PortfolioPage />}/>
        <Route path='/services' element={<ServicesPage />}/>
        <Route path='/enquiry' element={<Enquiry />}/>
        <Route path='/contactus' element={<ContactUsPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
