import Header from "../components/Header"
import Button from "../components/Button"
import BenefitsSection from "../components/BenefitsSection"
import ServicesSection from "../components/SevicesSection"
import IMG from "../assets/images/IMG-HERO-SECTION.PNG"
import "./Home.css"

function Home(){
    
    return (
        <>
            <Header/>

            <section className="home-hero-section">
                <img 
                  src={IMG}
                  alt="imagem de uma mão com unhas em destaque pintadas de terracota" 
                />

                <div className="hero-content">
                   <h1>Beleza que <br/> expressa quem você é</h1>
                   <p>Unhas impecáveis, atendimento personalizado e uma experiência única para realçar sua essência.</p>
                
                   <div className="section-buttons">
                     <Button variant="primary" element="a">Agendar horário</Button>
                     <Button variant="secondary" element="Link">Nossos serviços  →</Button>
                   </div>   
                </div>
            </section>
              
            <BenefitsSection />
            <ServicesSection />
        </>
    )
}

export default Home