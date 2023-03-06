import React, { useContext, useEffect } from 'react';
import "./style.css";
import Vouchers from '../../assets/Vouchers.png';
import Button from "../Button/Button"
import { AnchorsContext } from "../../context/anchorsContext";


function ParaRegalar() {

  const { allAnchors } = useContext(AnchorsContext)

  useEffect(() => {
    const anchorParaRegalar = document.getElementById("paraRegalarContainer")
    allAnchors.push({ name: "PARA REGALAR", anchor: anchorParaRegalar })
  }, [allAnchors])



  return (
    <div id='paraRegalarContainer'>
      <a className="anchor" id="paraRegalar"></a>
      <h2 className='tituloParaRegalar'>Para regalar</h2>
      <div className='fondoClaroParaRegalar'>
        <div className="rectanguloParaRegalar">
          <div className="textoRegalo">
            <p>Regalá experiencias.</p>
            <p>Tenemos variedad de vouchers con nuestros servicios.</p>
          </div>
          <div className='contenedorImagenesParaRegalar'>
            <img src={Vouchers} alt="Imagen de distintos vouchers" />
            <Button name="Regalar experiencia" color="dark" />
          </div>
        </div>




      </div>
    </div>
  )
}

export default ParaRegalar