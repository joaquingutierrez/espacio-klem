import React from "react";
import "./style.css"

const Button = ({name, color}) => {
    return (
        <div className="contenedorBotonHome">
            <h2 className={color !== "dark" ? "botonHome" : "botonHomeLight"}>{name}</h2>
        </div>
    )
}
export default Button