import React, { useContext, useEffect } from 'react'
import { AnchorsContext } from "../../context/anchorsContext";
import "./style.css"
import imagenMapa from "../../assets/mapa.png"
import clockLogo from "../../assets/Clock.png"
import whatsappLogo from "../../assets/WhatsApp.png"
import envelopeLogo from "../../assets/Envelope.png"

function Contacto() {

  const { allAnchors } = useContext(AnchorsContext)

  useEffect(() => {
    const anchorContacto = document.getElementById("contactoContainer")
    allAnchors.push({ name: "CONTACTO", anchor: anchorContacto })
  }, [])


  return (
    <div id="contactoContainer">
      <a className="anchor" id="contacto"></a>
      <h2 className="tituloContacto">Contacto</h2>
      <div className="rectanguloContacto">
        <div className='contenidoDeContacto'>
          <div className='imagenContacto'>
            <img src={imagenMapa} alt="Imagen de un mapa con la ubicacion aproximada de Espacio Klem" />
          </div>
          <div className='cuerpoContacto'>
            <h3 className="tituloUbicacion">Sede Bella Vista</h3>
            <div className="logoYTextoflex">
              <img src={clockLogo} alt="Logo de un reloj" />
              <p className="horarioContacto">Horario: todos los días de 8 a 20 hs</p>
            </div>
            <div className="logoYTextoflex">
              <img src={whatsappLogo} alt="Logo de whatsapp" />
              <p className="WhatsappContacto"> Whatsapp: +54 11 6985-3215</p>
            </div>
            <div className="logoYTextoflex">
              <img src={envelopeLogo} alt="Logo de una carta" />
              <p className="EmailContacto">Email: espacioklem@gmail.com</p>
            </div>
            <p className="asistenciaContacto"> La asistencia es únicamente con turno.</p>
            <p className="asistenciaContacto">En caso de querer cancelar el turno, por favor, avisanos con anticipación.</p>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Contacto