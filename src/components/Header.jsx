import logo from "../assets/logo/logo.png";
import {Link} from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import "./Header.css";
import Button from "./Button";

function Header() {
  const [ menuOpen, setMenuOpen ] = useState(false);

    return (
      <header className="header">

         <div className="header-top">
          <Link to="/">
           <img 
             className="header-logo" 
             src={logo} 
             alt="Logo do Estudio Ingleteh Nails, texo vinho bordo e coração coreano destacando unhas." />   
          </Link>

          {
            !menuOpen ? 
            <button 
             className="header-button-icon"
             type="button" 
             aria-label="Abrir menu"
             onClick={() => setMenuOpen(true)
             }
            >
              <FiMenu className="header-icon"/>
            </button> :
            <button 
             className="header-button-icon" 
             type="button" 
             aria-label="Abrir menu"
             onClick={() => setMenuOpen(false)}
            >
              <FiX className="header-icon"/>
            </button>
          }

          
         </div>

         {
           menuOpen && (
         <nav className="header-nav">
          <ul className="menu-links">
            <li>
              <Link to="/">
                <span>Inicio</span>
                <FiChevronRight/>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>Sobre</span>
                <FiChevronRight/>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <span>Serviços</span>
                <FiChevronRight/>
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                <span>Galeria</span>
                <FiChevronRight/>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span>Contato</span>
                <FiChevronRight/>
              </Link>
            </li>
          </ul>

          <Button variant="primary"> Agendar horário </ Button>
         </nav>
           )
         }
         
         
               
      </header>
    )
}

export default Header