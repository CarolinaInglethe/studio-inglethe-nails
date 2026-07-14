import logo from "../assets/logo/logo.png";
import {Link} from "react-router-dom"
import { FiMenu } from "react-icons/fi";

function Header() {
    return (
      <header className="header">

         <Link to="/">
           <img className="header-logo" src={logo} alt="Logo do Estudio Ingleteh Nails, texo vinho bordo e coração coreano destacando unhas." />   
         </Link>
         
         
         <button type="button" aria-label="Abrir menu">
           <FiMenu />
         </button>

         <nav>
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
          <button>Agendar horário</button>
         </nav>
               
      </header>
    )
}

export default Header