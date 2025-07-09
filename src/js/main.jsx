import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Container from './components/Container';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Container/>
    <Footer/>
  </React.StrictMode>
)
