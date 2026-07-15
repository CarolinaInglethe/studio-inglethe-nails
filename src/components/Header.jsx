import logo from "../assets/logo/logo.png";
import {Link} from "react-router-dom"
import { FiMenu } from "react-icons/fi";
import "../styles/header.css"

function Header() {
    return (
      <header className="header">

         <Link to="/">
           <img 
             className="header-logo" 
             src={logo} 
             alt="Logo do Estudio Ingleteh Nails, texo vinho bordo e coração coreano destacando unhas." />   
         </Link>
         

         <nav className="header-nav">

          <button className="header-fiMenu" type="button" aria-label="Abrir menu">
           <FiMenu />
         </button>
         
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/services">Serviços</Link>
            </li>
            <li>
              <Link to="/gallery">Galeria</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>

          <a href="https://w.app/ib9hhs" 
             target="_blank" 
             rel="noopener noreferrer"
             className="button-primary"
          >
              Agendar horário
          </a>
         </nav>
               
      </header>
    )
}

export default Header