import Header from "../components/Header"
import Button from "../components/Button"
import "./Home.css"
import { useState } from "react"
import IMG from "../assets/images/IMG-HERO-SECTION.PNG"
import ICONPERFIL from "../assets/icons/ICON-PERFIL.png";
import ICONDOMICILIO from "../assets/icons/ICON-DOMICILIO.png";
import ICONPREMIUM from "../assets/icons/ICON-PREMIUM.png";
import ICONAMBIENTE from "../assets/icons/ICON-AMBIENTE.png";

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
              
            <section className="home-section-benefits">
                <div>
                    <img src={ICONPERFIL} alt="Icone perfil de uma pessoa traços cor dourado" />
                    <h3>Atendimento Personalizado</h3>
                    <p>Cada detalhe feito especialmente para você</p>
                </div>
                <div>
                    <img src={ICONDOMICILIO} alt="Icone de uma casinha com traços criativos e elegante cor dourada" />
                    <h3>Atendimento a Domicílio</h3>
                    <p>Atendemos também no conforto de sua casa</p>
                </div>
                <div>
                    <img src={ICONPREMIUM} alt="" />
                    <h3>Materiais Premium</h3>
                    <p>Produts de alta qualidade para sua segurança e conforto</p>
                </div>
                <div>
                    <img src={ICONAMBIENTE} alt="" />
                    <h3>Ambiente Acolhedor</h3>
                    <p>Espaço pensado para proporcionar bem-estar e relaxamento</p>
                </div>
            </section>
        </>
    )
}

export default Home