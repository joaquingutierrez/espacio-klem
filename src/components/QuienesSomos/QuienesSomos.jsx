import React, { useContext, useEffect } from "react";
import "./style.css"
import imagenQuienesSomos from "../../assets/fotos/quienesSomos/sobreNuestroEspacio.png"
import imagenSobreNostros from "../../assets/fotos/quienesSomos/sobreNosotros.png"
import { AnchorsContext } from "../../context/anchorsContext";

const QuienesSomos = () => {

    const { allAnchors } = useContext(AnchorsContext)

    useEffect(() => {
        const anchorQuienesSomos = document.getElementById("quienesSomosContainer")
        allAnchors.push({ name: "QUIÉNES SOMOS", anchor: anchorQuienesSomos })
    }, [])

    return (
        <div id="quienesSomosContainer">
            <a className="anchor" id="quienesSomos"></a>
            <h2 className="tituloQuienesSomos">Quiénes somos</h2>
            <div className="contenedorSobreNuestroEspacio">
                <div className="contenedorImagenSobreNuestroEspacio">
                    <img src={imagenQuienesSomos} alt="Imagen de una cama para hacer masajes" />
                </div>
                <div className="textoQuienesSomos">
                    <h3>Sobre nuestro espacio</h3>
                    <p>Nuestro objetivo es ofrecerte una experiencia única de bienestar y relajación.</p>
                    <p>Abrimos nuestro primer salón en 2021, ubicado en el centro de Bella Vista, Provincia de Buenos Aires, y proyectamos nuevas aperturas para el futuro.</p>
                    <p>Espacio Klem es un lugar donde podrás relajarte y disfrutar de los beneficios de nuestros servicios, dirigidos a todas las personas interesadas en el cuidado de su cuerpo.</p>
                    <p>Esperamos que te sientas cómodo en nuestro espacio y disfrutes de la experiencia. Ante cualquier duda, por favor no dudes en contactarnos. Estamos para ayudarte.</p>
                </div>
            </div>
            <div className="contenedorSobreNosotros">
                <div className="textoQuienesSomos">
                    <h3>Sobre nosotros</h3>
                    <p>Nuestros profesionales se especializan en los últimos tratamientos de belleza y masajes. Nos preocupamos por ofrecerte los mejores resultados, y una sensación de bienestar y relajación.</p>
                    <p>Nuestro enfoque es proporcionar un servicio de calidad, centrado en la atención individual y el cuidado del cliente.</p>
                </div>
                <div className="contenedorImagenSobreNosotros">
                    <img src={imagenSobreNostros} alt="Imagen de una repisa con vouchers encima, una taza y un mapa" />
                </div>
            </div>
        </div>
    )
}

export default QuienesSomos