import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
// import Header from './Header';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />
    }
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
    </>

  );
}

export default App;
