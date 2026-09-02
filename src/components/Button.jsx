import { Link } from "react-router-dom";
import "./Button.css"

function Button({ variant, children, element = "button", to }) {
  if (element === "a") {
    return (
      <a 
        href="https://wa.me/5531987621333?text=Ol%C3%A1%2C+vim+pelo+site+Studio+Inglethe+Nails+e+gostaria+de+agendar+um+hor%C3%A1rio.+%F0%9F%92%85%F0%9F%8F%BB&utm_source=chatgpt.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`cta-button--${variant}` }
      >
         {children}
      </a>
    )
  }

  
  if (element ==="Link") {
    return (
      <Link className={`cta-button--${variant}`} to="/services">
       {children}
      </Link>
    )
  }
  
  return (
      <button className={`cta-button--${variant}`}  >
        {children}
      </button>
    )
}

export default Button;