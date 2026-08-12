import Header from "../components/Header"
import Button from "../components/Button"
import "./Home.css"
import { useState } from "react"

function Home(){
    
    return (
        <>
            <Header/>

            <section className="home-hero-section">
                <img src="" alt="" />
                <h1>Beleza que expressa quem você é</h1>
                <p>Unhas impecáveis, atendimento personalizado e uma experiência única para realçar sua essência.</p>
                
                <div className="section-buttons">
                  <Button variant="primary" element="a">Agendar horário</Button>
                  <Button variant="secundary" element="Link">Nossos serviços  →</Button>
                </div>            
            </section>
        </>
    )
}

export default Home