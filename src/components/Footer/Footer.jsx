import React from "react";
import "./style.css";
import logo from "../../assets/logo footer.png";
import face from "../../assets/Facebook.png";
import instagram from "../../assets/Instagram.png"





const Footer = () => {

  return (


    <footer className="footerContainer">
      <div className="footer">
        <div className="logoFooterContainer">
          <img src={logo} alt="Logo de Espacio Klem" />
        </div>
        <div className="menuFooterContainer">
          <h2 className="tituloFooter">MENU</h2>
          <h3 className="subtituloFooter"><a className="linksFooter" href="#home">Inicio</a></h3>
          <h3 className="subtituloFooter"><a className="linksFooter" href="#servicios">Servicios</a></h3>
          <h3 className="subtituloFooter"><a className="linksFooter" href="#quinesSomos">Quiénes somos</a></h3>
          <h3 className="subtituloFooter"><a className="linksFooter" href="#paraRegalar">Para regalar</a></h3>
          <h3 className="subtituloFooter"><a className="linksFooter" href="#preguntasFrecuentes">Preguntas frecuentes</a></h3>
          <h3 className="subtituloFooter"><a className="linksFooter" href="#contacto">Contacto</a></h3>
        </div>
        <div className="masInformacionFooterContainer">
          <h2 className="tituloFooter">MÁS INFORMACIÓN</h2>
          <h3 className="subtituloFooter"><a className="linksFooter" href="">Términos y condiciones</a></h3>
          <h3 className="subtituloFooter"><a className="linksFooter" href="">Política de privacidad</a></h3>
        </div>
      </div>
      <div className="promocionesContainer">
        <div>
          <h3 className="subtituloFooter">¿Querés recibir novedades y promociones?</h3>
          <h3 className="subtituloFooter">Suscribite con tu email y enterarte.</h3>
        </div>
        <div className="inputFooterContainer">
          <input className="inputPromocionesFooter" placeholder="Escribí tu email acá" type="text" />
          <h3 className="botonSuscribirmeFooter">Suscribirme</h3>
        </div>
      </div>
      <div className="logoFooterContainerMovile">
        <img src={logo} alt="" />
      </div>
      <div className="separacionFooter">
      </div>
      <div className="finalFooter">
        <h3>© 2023 Espacio Klem </h3>
        <div className="redesSocialesFooter">
          <a href="https://www.facebook.com/espacioklem" target="blank"><img src={face} alt="Logo de Facebook" /></a>
          <a href="https://www.instagram.com/espacioklem/" target="blank"><img src={instagram} alt="Logo de Instagram" /></a>
        </div>
      </div>
    </footer>


  )
}

export default Footer