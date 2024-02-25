import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaHome, FaFolder,FaEnvelope,FaLinkedin } from "react-icons/fa";
import IconsPage from "./components/pages/icons/IconsPage";
import Envelope from "./components/pages/envelope/Envelope";
import Folder from "./components/pages/folder/Folder";
import Home from "./components/pages/home/Home";
import Footer from "./components/pages/footer/Footer";
import Triangulo from "./components/common/Triangulo";


const App = () => {
  const [ isSelected, setIsSelected ] = useState("boton1")
  const [trianguloVisible, setTrianguloVisible] = useState(1);

  const mostrarTriangulo = (id : number) => setTrianguloVisible(id);
  
  const handleClick = (botonId : string) => setIsSelected(botonId);

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/alan-magliolini', '_blank');

    window.location.href = '/';

  };


  return (
      <BrowserRouter>
      <nav className="my-5 lg:mt-20">
        <ul className="flex justify-center gap-7">
          <li>
            <Link to="/">
              <IconsPage icono={FaHome} selected={isSelected === "boton1" ? "text-opacity-95" : "text-opacity-55"} handleClick = {() => handleClick("boton1")} mostrarTriangulo = {() => mostrarTriangulo(1)}  />
            </Link>
            <Triangulo visible={trianguloVisible === 1} />
          </li>


          <li>
            <Link to="/folder">
            <IconsPage icono={FaFolder} selected={isSelected === "boton2" ? "text-opacity-95" : "text-opacity-55"} handleClick = {() => handleClick("boton2")} mostrarTriangulo = {() => mostrarTriangulo(2)}  />
            </Link>
            <Triangulo visible={trianguloVisible === 2} />
          </li>
          

          <li>
            <Link to="/envelope">
              <IconsPage icono={FaEnvelope} selected={isSelected === "boton3" ? "text-opacity-95" : "text-opacity-55"} handleClick = {() => handleClick("boton3")} mostrarTriangulo = {() => mostrarTriangulo(3)}  />
            </Link>
            <Triangulo visible={trianguloVisible === 3} />
          </li>



          <li>
            <a href="#" onClick={handleLinkedInClick}>
              <FaLinkedin className="text-3xl text-white lg:text-4xl text-opacity-55" />
            </a>   
          </li>
        </ul>
      </nav>


      <div className="container mx-auto px-4 py-4">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/folder" element={<Folder />} />
          <Route path="/envelope" element={<Envelope />} />
       
        </Routes> 
      </div>

      <Footer />
      
    </BrowserRouter>
  )
}

export default App
