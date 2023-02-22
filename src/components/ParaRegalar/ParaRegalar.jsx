import React from 'react';
import "./style.css";
import Vouchers from '../../assets/Vouchers.png';
import Button from "../Button/Button"


function ParaRegalar() {

  return (
    <>
      <h2 className='tituloParaRegalar'>Para regalar</h2>
    <div className="rectanguloParaRegalar">
      <div className="textoRegalo">
        <p>Regalá experiencias.
          Tenemos variedad de vouchers con nuestros servicios. Regalá experiencias.
        </p>
      </div>
      <div className='contenedorImagenesParaRegalar'>
        <img src={Vouchers} alt="" />
        <Button name="Regalar experiencia" color="dark" />
      </div>
    </div>
    </>
  )
}

export default ParaRegalar