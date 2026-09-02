import { Link } from "react-router-dom";
import IMGP from "../assets/images/IMG_8860.PNG"
import "./GalleryPreview.css"

function GalleryPreview() {
    return (
        <section className="gallery-preview-section">
            <h2>Nossos trabalhos</h2>
            <div className="gallery-preview-imgs">
                <img src={IMGP} alt="Imagem de teste" />
                <img src={IMGP} alt="Imagem de teste" />
                <img src={IMGP} alt="Imagem de teste" />
                <img src={IMGP} alt="Imagem de teste" />
            </div>

            <Link className="cta-button--secondary" to="/Gallery">VER GALERIA COMPLETA →</Link>

        </section>
    )
}

export default GalleryPreview;