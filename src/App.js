import React from 'react';
import './App.css';
import Encabezado from './components/Encabezado/Encabezado';
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Servicios from './components/Servicios/Servicios';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import ParaRegalar from './components/ParaRegalar/ParaRegalar';
import PreguntasFrecuentes from "./components/PreguntasFrecuentes/PreguntasFrecuentes"
import Contacto from "./components/Contacto/Contacto"
import Footer from "./components/Footer/Footer"
import AnchorsProvider from './context/anchorsContext';
import ContactoFlotante from "./components/BotonFlotante/BotonFlotante"



function App() {
  return (
    <div className="contenedorBordes">
      <div className="bordeIzquierdo">

      </div>
      <div className="bordeDerecho">

      </div>

      <AnchorsProvider>
        <Encabezado />
        <Nav />
        <Home />
        <Servicios />
        <QuienesSomos />
        <ParaRegalar />
        <PreguntasFrecuentes />
        <Contacto />
        <Footer />
      </AnchorsProvider>

      <ContactoFlotante />
    </div>
  );
}

export default App;
