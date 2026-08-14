import "./BenefitsSection.css"
import ICONPERFIL from "../assets/icons/ICON-PERFIL.png";
import ICONDOMICILIO from "../assets/icons/ICON-DOMICILIO.png";
import ICONPREMIUM from "../assets/icons/ICON-PREMIUM.png";
import ICONAMBIENTE from "../assets/icons/ICON-AMBIENTE.png";

function BenefitsSection() {
    return (
        <section className="benefits-section">
                <div className="benefits-card">
                    <img src={ICONPERFIL} alt="Icone perfil de uma pessoa traços cor dourado" />
                    <div>
                       <h3>Atendimento <br/>Personalizado</h3>
                       <p>Cada detalhe feito <br/>especialmente para você</p>
                    </div>
                </div>
                <div className="benefits-card"> 
                    <img src={ICONDOMICILIO} alt="Icone de uma casinha com traços criativos e elegante cor dourada" />
                    <div>
                       <h3>Atendimento <br/> a Domicílio</h3>
                       <p>Atendemos também <br/>no conforto de sua casa</p>
                    </div>
                </div>
                <div className="benefits-card">
                    <img src={ICONPREMIUM} alt="Icone de um diamante com traços finos e dourado" />
                    <div>
                       <h3>Materiais <br/>Premium</h3>
                       <p>Produtos de alta qualidade  para sua segurança e conforto</p>
                    </div>                   
                </div>
                <div className="benefits-card">
                    <img src={ICONAMBIENTE} alt="Icone de um sofa , traços finos delicados e dourado" />
                    <div>
                       <h3>Ambiente <br/>Acolhedor</h3>
                       <p>Espaço pensado para proporcionar bem-estar e relaxamento</p>
                    </div>
                   
                </div>
            </section>
    )
}

export default BenefitsSection;