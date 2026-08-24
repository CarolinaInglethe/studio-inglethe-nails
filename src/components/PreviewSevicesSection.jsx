import { Link } from "react-router-dom";
import IMGM from "../assets/images/IMG_8830.PNG"
import IMGP from "../assets/images/IMG_8860.PNG"
import IMGS from "../assets/images/IMG_8870.PNG"

function PreviewServicesSection() {
    return (
        <section className="preview-services-section">
            <h2>Nossos Serviços</h2>
            <div className="preview-services-card">
                <img src={IMGM} width="160px" alt="" />
                <h3>Manicure Perfeita</h3>
                <Link to="/services">Saiba mais </Link>
            </div>
            <div className="-preview-ervices-card">
                <img src={IMGP} width="160px" alt="" />
                <h3>Pedicure + Esfoliação</h3>
                <Link to="/services">Saiba mais </Link>
            </div>
            <div className="preview-services-card">
                <img src={IMGS} width="160px" alt="" />
                <h3>Spa dos pés</h3>
                <Link to="/services">Saiba mais </Link>
            </div>

        </section>
    )
}

export default PreviewServicesSection;