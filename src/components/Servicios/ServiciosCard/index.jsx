import React from "react";
import "./style.css"
import Button from "../../Button/Button";

const ServiciosCards = ({ card }) => {

    return (
        <div className="contenedorCard">
            <div className="contenedorImagenCard">
                <img src={card.imagen} alt={card.descripcionImagen} />
            </div>
            <h3 className="tituloCard">{card.titulo}</h3>
            <p className="parrafoCard">{card.parrafo}</p>

            <Button name="Reservar turno" />

        </div>
    )
}

export default ServiciosCards