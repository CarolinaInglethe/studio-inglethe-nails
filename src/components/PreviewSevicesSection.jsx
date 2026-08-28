import { Link } from "react-router-dom";
import Button from './Button';
import IMGM from "../assets/images/IMG_8830.PNG"
import IMGP from "../assets/images/IMG_8860.PNG"
import IMGS from "../assets/images/IMG_8870.PNG"
import "./PreviewServicesSection.css"

function PreviewServicesSection() {
    return (
        <section className="preview-services-section">
            <h2>Nossos Serviços</h2>
            <div className="preview-services-card">
                <img src={IMGM}  alt="Imagem de uma mao segurando esmalte azul da dailus com foco nas unhas pintadas" />
                <h3>Manicure Perfeita</h3>
                <Link to="/services">Saiba mais →</Link>
            </div>
            <div className="-preview-ervices-card">
                <img src={IMGP}  alt="Imagem de pès com destaque nas unhas cutiladas e esmaltadas com francesinha" />
                <h3>Pedicure + Esfoliação</h3>
                <Link to="/services">Saiba mais →</Link>
            </div>
            <div className="preview-services-card">
                <img src={IMGS}  alt="Imagem de um pé e um balse de agua" />
                <h3>Spa dos pés</h3>
                <Link to="/services">Saiba mais →</Link>
            </div>

            <Button variant="secondary" element="Link">VER TODOS SERVIÇOS →</Button>
        </section>
    )
}

export default PreviewServicesSection;