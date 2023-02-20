import React, {useContext, useEffect} from "react";
import "./style.css"
import ServiciosCards from "./ServiciosCard"
import imagen1 from "../../assets/pexels-castorly-stock-3654620.jpg"
import { AnchorsContext } from "../../context/anchorsContext";


const Servicios = () => {

    const {allAnchors} = useContext(AnchorsContext)

    useEffect(() => {
        const anchorServicios = document.getElementById("serviciosContainer")
        allAnchors.push({name:"SERVICIOS", anchor: anchorServicios})
    }, [])

    const card1 = {
        imagen: imagen1,
        titulo: "Masajes relajantes",
        parrafo: "Utilizamos técnicas suaves y relajantes, como la aplicación de presión ligera y movimientos lentos y fluidos, con el objetivo de liberar la tensión acumulada en los músculos y mejorar el bienestar general."
    }
    const card2 = {
        imagen: imagen1,
        titulo: "Masajes descontracturantes",
        parrafo: "Utilizamos técnicas de presión profunda, estiramiento y fricción, enfocadas en aliviar la tensión muscular, la rigidez en el cuerpo y reducir el dolor e inflamación."
    }
    const card3 = {
        imagen: imagen1,
        titulo: "Lifting de pestañas",
        parrafo: "Arqueamos y levantamos tus propias pestañas, creando un efecto abanico súper natural, utilizando productos nutritivos para favorecer su crecimiento. Siguiendo los cuidados y recomendaciones, el efecto lifting puede durar de 4 a 8 semanas."
    }
    const card4 = {
        imagen: imagen1,
        titulo: "Diseño y perfilado de cejas",
        parrafo: "El perfilado de cejas es un procedimiento de belleza que tiene como objetivo dar forma y definición a las cejas, resaltando la estructura natural de la cara y mejorando la apariencia estética de las cejas. El proceso de perfilado de cejas implica la eliminación cuidadosa de los vellos no deseados para crear una forma simétrica y armoniosa."
    }
    const card5 = {
        imagen: imagen1,
        titulo: "Laminado de cejas",
        parrafo: "Consiste en aplicar un líquido que suaviza los vellos y los peina en una dirección específica. El resultado es una apariencia más pulida y definida de las cejas. Este tratamiento no es permanente, puede durar hasta 6 semanas, dependiendo del tipo de cabello y del cuidado posterior."
    }

    return (
        <div id="serviciosContainer">
            <a className="anchor" id="servicios"></a>
            <h2 className="tituloServicios">Servicios de masajes</h2>
            <div className="contenedorServicios">
                <ServiciosCards card={card1} />
                <ServiciosCards card={card2} />
            </div>
            <h2 className="tituloServicios">Servicios de belleza</h2>
            <div className="contenedorServicios">
                <ServiciosCards card={card3} />
                <ServiciosCards card={card4} />
                <ServiciosCards card={card5} />
            </div>
            
        </div>
    )
}

export default Servicios