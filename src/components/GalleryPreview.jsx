import { Link } from "react-router-dom";

function GalleryPreview() {
    return (
        <section>
            <h2>Nossos trabalhos</h2>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>

            <Link to="/Gallery">VER GALERIA COMPLETA →</Link>

        </section>
    )
}

export default GalleryPreview;