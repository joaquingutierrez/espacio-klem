import React from "react";
import "./style.css"

const Button = ({name}) => {
    return (
        <div className="contenedorBotonHome">
            <h2 className="botonHome">{name}</h2>
        </div>
    )
}
export default Button