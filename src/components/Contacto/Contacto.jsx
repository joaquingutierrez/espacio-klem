import React from 'react'
import "./style.css"

function Contacto() {
  return (
    <>
      <h2 className="tituloContacto">Contacto</h2>
      <div className="rectangulo">

        <h3 className="titulo">Sede Bella Vista</h3>
        <p className="horario">Horario: todos los días de 8 a 20 hs</p>
        <p className="Whatsapp"> Whatsapp: +54 11 6985-3215</p>
        <p className="Email">Email: espacioklem@gmail.com</p>
        <p className="asistencia"> La asistencia es únicamente con turno.
          En caso de querer cancelar el turno, por favor, avisanos con anticipación.</p>

      </div>
    </>
  )
}

export default Contacto