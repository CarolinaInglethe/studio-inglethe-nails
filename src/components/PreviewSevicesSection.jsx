import { Link } from "react-router-dom";

function PreviewServicesSection() {
    return (
        <section className="preview-services-section">
            <h2>Nossos Serviços</h2>
            <div className="preview-services-card">
                <img src="" alt="" />
                <h3>Manicure Perfeita</h3>
                <Link to="/services">Saiba mais </Link>
            </div>
            <div className="-preview-ervices-card">
                <img src="" alt="" />
                <h3>Pedicure + Esfoliação</h3>
                <Link to="/services">Saiba mais </Link>
            </div>
            <div className="preview-services-card">
                <img src="" alt="" />
                <h3>Spa dos pés</h3>
                <Link to="/services">Saiba mais </Link>
            </div>

        </section>
    )
}

export default PreviewServicesSection;