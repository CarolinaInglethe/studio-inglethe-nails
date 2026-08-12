import Header from "../components/Header"
import Button from "../components/Button"
import "./Home.css"
import { useState } from "react"
import IMG from "../assets/images/IMG-HERO-SECTION.PNG"

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
                     <Button variant="secundary" element="Link">Nossos serviços  →</Button>
                   </div>   
                </div>
                          
            </section>
        </>
    )
}

export default Home