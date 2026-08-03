import logo from "../assets/logo/logo.png";
import {Link} from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import "../styles/header.css";

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
              <Link to="/">Inicio</Link>
              <FiChevronRight/>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
              <FiChevronRight/>
            </li>
            <li>
              <Link to="/services">Serviços</Link>
              <FiChevronRight/>
            </li>
            <li>
              <Link to="/gallery">Galeria</Link>
              <FiChevronRight/>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
              <FiChevronRight/>
            </li>
          </ul>

          <a 
            href="https://w.app/ib9hhs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
              Agendar horário
          </a>
         </nav>
           )
         }
         
         
               
      </header>
    )
}

export default Header