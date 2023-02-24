import React, { useContext, useEffect } from "react";
import "./style.css"
import imagen1 from "../../assets/fotos/home/frame1.png"
import imagen2 from "../../assets/fotos/home/frame2.png"
import imagen3 from "../../assets/fotos/home/frame3.png"
import imagen4 from "../../assets/fotos/home/frame4.png"
import Button from "../Button/Button";
import { AnchorsContext } from "../../context/anchorsContext";

const Home = () => {
    const {allAnchors} = useContext(AnchorsContext)

    useEffect(() => {
        const anchorHome = document.getElementById("homeContainer")
        allAnchors.push({name:"INICIO", anchor: anchorHome})
    }, [allAnchors])
    return (
        <div id="homeContainer">
            <a className="anchor" id="home"></a>
            <div className="contenedorImagenesHome displayNoneHomeMovile">
                <div className="imagen1HomeContainer">
                    <img className="imagenHome" src={imagen1} alt="Imagen de una vela" />
                </div>
                <div className="imagen2HomeContainer">
                    <img className="imagenHome" src={imagen2} alt="Imagen de alguien dando un masaje" />
                </div>
                <div className="imagen1HomeContainer">
                    <img className="imagenHome" src={imagen3} alt="Imagen de una repisa" />
                </div>
                <div className="imagen2HomeContainer">
                    <img className="imagenHome" src={imagen4} alt="Imagen de lifting de pestañas" />
                </div>
            </div>
            <div>
                <h2 className="tituloHome">Haciendo un equilibrio entre salud y belleza</h2>
                <p className="parrafoHome">
                    Te damos la bienvenida a nuestro espacio de belleza y masajes.
                    Ofrecemos tratamientos y servicios personalizados para mejorar tu salud y bienestar.
                    Consultá nuestros precios y servicios. ¡Te esperamos pronto!
                </p>
                <Button name="Contactarme" />
            </div>
        </div>
    )
}

export default Home