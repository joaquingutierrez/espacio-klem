import React, { useContext, useEffect, useState } from "react";
import "./style.css"
import logoEspacioKlem from "../../assets/logo-espacio-klem.png"
import { AnchorsContext } from "../../context/anchorsContext";


const Nav = () => {

    const [allMyAnchors, setAllMyAnchors] = useState([])

    const navLinks = [
        {name: "INICIO", href: "#home", id: "inicioLink" },
        {name: "SERVICIOS", href: "#servicios", id: "serviciosLink" },
        {name: "QUIÉNES SOMOS", href: "#quienesSomos", id: "quienesSomosLink"  },
        {name: "PARA REGALAR", href: "#home", id: "paraRegalarLink"  },
        {name: "PREGUNTAS FRECUENTES", href: "#home", id: "preguntasFrecuentesLink"  },
        {name: "CONTACTO", href: "#home", id: "contactoLink"  },
    ]

    const { allAnchors } = useContext(AnchorsContext)


    const callback = function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(entry.target.id)
                switch (entry.target.id){
                    case "homeContainer": {
                        document.getElementById("inicioLink").classList.add("active");
                        document.getElementById("serviciosLink").classList.remove("active")
                        document.getElementById("quienesSomosLink").classList.remove("active")
                        document.getElementById("paraRegalarLink").classList.remove("active")
                        document.getElementById("preguntasFrecuentesLink").classList.remove("active")
                        document.getElementById("contactoLink").classList.remove("active")
                        break;
                    }
                    
                    case "serviciosContainer": {
                        document.getElementById("inicioLink").classList.remove("active");
                        document.getElementById("serviciosLink").classList.add("active")
                        document.getElementById("quienesSomosLink").classList.remove("active")
                        document.getElementById("paraRegalarLink").classList.remove("active")
                        document.getElementById("preguntasFrecuentesLink").classList.remove("active")
                        document.getElementById("contactoLink").classList.remove("active")
                        break
                    }
                    
                    case "quienesSomosContainer": {
                        document.getElementById("inicioLink").classList.remove("active");
                        document.getElementById("serviciosLink").classList.remove("active")
                        document.getElementById("quienesSomosLink").classList.add("active")
                        document.getElementById("paraRegalarLink").classList.remove("active")
                        document.getElementById("preguntasFrecuentesLink").classList.remove("active")
                        document.getElementById("contactoLink").classList.remove("active")
                        break
                    }
                    case "paraRegalarContainer": {
                        document.getElementById("inicioLink").classList.remove("active");
                        document.getElementById("serviciosLink").classList.remove("active")
                        document.getElementById("quienesSomosLink").classList.remove("active")
                        document.getElementById("paraRegalarLink").classList.add("active")
                        document.getElementById("preguntasFrecuentesLink").classList.remove("active")
                        document.getElementById("contactoLink").classList.remove("active")
                        break
                    }
                    case "preguntasFrecuentesContainer": {
                        document.getElementById("inicioLink").classList.remove("active");
                        document.getElementById("serviciosLink").classList.remove("active")
                        document.getElementById("quienesSomosLink").classList.remove("active")
                        document.getElementById("paraRegalarLink").classList.remove("active")
                        document.getElementById("preguntasFrecuentesLink").classList.add("active")
                        document.getElementById("contactoLink").classList.remove("active")
                        break
                    }
                    case "contactoContainer": {
                        document.getElementById("inicioLink").classList.remove("active");
                        document.getElementById("serviciosLink").classList.remove("active")
                        document.getElementById("quienesSomosLink").classList.remove("active")
                        document.getElementById("paraRegalarLink").classList.remove("active")
                        document.getElementById("preguntasFrecuentesLink").classList.remove("active")
                        document.getElementById("contactoLink").classList.add("active")
                        break
                    }
                    default: {
                        document.getElementById("inicioLink").classList.add("active");
                        document.getElementById("serviciosLink").classList.remove("active")
                        document.getElementById("quienesSomosLink").classList.remove("active")
                        document.getElementById("paraRegalarLink").classList.remove("active")
                        document.getElementById("preguntasFrecuentesLink").classList.remove("active")
                        document.getElementById("contactoLink").classList.remove("active")
                        break;
                    } 

                    
                }
            }
        });
    }
    const options = {
        root: null,
        threshold: 0.25
    };
    let observer = new IntersectionObserver(callback, options) ;

    useEffect(() => {
        setAllMyAnchors(allAnchors)
        allAnchors.map(element => {
            return observer.observe(element.anchor)
        })
    }, [allAnchors])


    return (
        <>
            <div className="logoEspacioKlem">
                <img src={logoEspacioKlem} alt="Logo de Espacio Klem" />

            </div>
            <div className="navBar">
                {navLinks.map((item,index) => {
                    if (allMyAnchors.length > 0) {
                        const myAnchor = allMyAnchors.filter(anchor => anchor.name === item.name)[0]
                        if (myAnchor !== undefined) {
                        }
                    }
                    return <h2 key={index} className="navBarItem"><a id={item.id} className="navBarLink" href={item.href}>{item.name}</a></h2>
                })}
            </div>
            <div className="logoEspacioKlemMovile">
                <img src={logoEspacioKlem} alt="Logo de Espacio Klem" />

            </div>
        </>
    )
}

export default Nav