import React from "react";
import "./style.css"
import logoUbicacion from "../../assets/Place-Marker.png"
import logoReloj from "../../assets/Clock.png"

const Encabezado = () => {

    return (
        <div className="encabezadoContenedor displayNoneEncabezadoMovile">
            <div className="ubicacionContenedor">
                <img src={logoUbicacion} alt="Logo que indica ubicacion" />
                <p className="parrafoEncabezado">Sede Bella Vista, Pcia. de Buenos Aires</p>
            </div>
            <div className="ubicacionContenedor">
                <h2 className="tituloEncabezado">Espacio Klem</h2>
            </div>
            <div className="ubicacionContenedor displayNoneEncabezadoMovile">
                <img src={logoReloj} alt="Logo que indica ubicacion" />
                <p className="parrafoEncabezado">Todos los días de 8hs a 20hs</p>
            </div>
        </div>
    )
}

export default Encabezado