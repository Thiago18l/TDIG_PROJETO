import React from "react";
import imgSala from '../../assets/img/dashboard.jpg'
import "./dashboard.css";

export default function Dashboard() {
    return (
        <div>
            <h1>Sistema de Controle Acadêmico</h1>
            <img src={imgSala} alt="Sala de aula"/>
        </div>
    );
}
