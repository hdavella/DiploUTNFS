import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import ServiciosPage from "./pages/ServiciosPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="Contacto" element={<ContactoPage />} ></Route>
          <Route path="Servicios" element={<ServiciosPage />} ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
