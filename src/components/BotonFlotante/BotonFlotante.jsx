import React from "react";
import botonFlotante from "../../assets/Boton flotante.png"
import "./style.css"


const BotonFlotante = () => {


    return (
        <div className="botonFlotanteContainer">

            <a href="https://api.whatsapp.com/send?phone=5491169853215" target="blank"><img src={botonFlotante} alt="" /></a>

        </div>
    )
}

export default BotonFlotante