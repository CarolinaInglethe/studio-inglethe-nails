import { Link } from "react-router-dom";
import IMGPE from "../assets/images/20181123_162407.jpg"
import IMGP from "../assets/images/IMG_7350.jpg"
import IMGP2 from "../assets/images/IMG_7363.jpg"
import IMGP3 from "../assets/images/IMG_7974.JPG"
import "./GalleryPreview.css"

function GalleryPreview() {
    return (
        <section className="gallery-preview-section">
            <h2>Nossos trabalhos</h2>
            <div className="gallery-preview-imgs">
                <img src={IMGPE} alt="Imagem de teste" />
                <img src={IMGP} alt="Imagem de teste" />
                <img src={IMGP2} alt="Imagem de teste" />
                <img src={IMGP3} alt="Imagem de teste" />
            </div>

            <Link className="cta-button--secondary" to="/Gallery">VER GALERIA COMPLETA →</Link>

        </section>
    )
}

export default GalleryPreview;