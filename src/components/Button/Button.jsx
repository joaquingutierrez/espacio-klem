import React from "react";
import "./style.css"

const Button = ({name, color}) => {

    const handleOnClick = () => {
        window.open('https://www.instagram.com/espacioklem/')
    }

    return (
        <div onClick={handleOnClick} className="contenedorBotonHome">
            <h2 className={color !== "dark" ? "botonHome" : "botonHomeLight"}>{name}</h2>
        </div>
    )
}
export default Button