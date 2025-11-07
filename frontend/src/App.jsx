import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Delivery from './pages/Delivery.jsx';
import Payment from './pages/Payment.jsx';
import Store from './pages/Store.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;