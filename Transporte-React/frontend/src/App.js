//import logo from './logo.svg';
//import './App.css';
//import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";


import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import GaleriaPage from "./pages/GaleriaPage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";
import ServiciosPage from "./pages/ServiciosPage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="Contacto" element={<ContactoPage />} ></Route>
          <Route path="Galeria" element={<GaleriaPage />} ></Route>
          <Route path="Nosotros" element={<NosotrosPage />} ></Route>
          <Route path="Novedades" element={<NovedadesPage />} ></Route>
          <Route path="Servivicios" element={<ServiciosPage />} ></Route>

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
