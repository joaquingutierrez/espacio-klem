import React, { useContext, useEffect, useState } from "react";
import "./style.css"
import logoEspacioKlem from "../../assets/logo-espacio-klem.png"
import { AnchorsContext } from "../../context/anchorsContext";

import { slide as Menu } from 'react-burger-menu'
import menuHamburguesa from "../../assets/Menu.png"

const Nav = () => {

    const [allMyAnchors, setAllMyAnchors] = useState([])
    const [state, setState] = useState({
        menuOpen: false
    })

    const navLinks = [
        { name: "INICIO", href: "#home", id: "inicioLink" },
        { name: "SERVICIOS", href: "#servicios", id: "serviciosLink" },
        { name: "QUIÉNES SOMOS", href: "#quienesSomos", id: "quienesSomosLink" },
        { name: "PARA REGALAR", href: "#paraRegalar", id: "paraRegalarLink" },
        { name: "PREGUNTAS FRECUENTES", href: "#preguntasFrecuentes", id: "preguntasFrecuentesLink" },
        { name: "CONTACTO", href: "#contacto", id: "contactoLink" },
    ]

    const { allAnchors } = useContext(AnchorsContext)


    const callback = function (entries) {
        entries.forEach((entry) => {
            console.log(entry.target.id);
            if (entry.isIntersecting) {
                switch (entry.target.id) {
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
        threshold: 0.5
    };
    let observer = new IntersectionObserver(callback, options);

    useEffect(() => {
        setAllMyAnchors(allAnchors)
        allAnchors.map(element => {
            return observer.observe(element.anchor)
        })
    }, [allAnchors])



    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    const handleStateChange = (state) => {
        setState({ menuOpen: state.isOpen })
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    const closeMenu = () => {
        setState({ menuOpen: false })
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    const toggleMenu = () => {
        setState(state => ({ menuOpen: !state.menuOpen }))
    }


    return (
        <>
            <div className="navParaMovile">
                <Menu width={'100%'} customBurgerIcon={<img src={menuHamburguesa} />} isOpen={state.menuOpen} onStateChange={(state) => handleStateChange(state)}>
                    {navLinks.map((item, index) => {
                        return <h2 onClick={() => closeMenu()} key={index} className="navBarItem menu-item"><a id={item.id + "menuHamburguesa"} className="navBarLink" href={item.href}>{item.name}</a></h2>
                    })}
                </Menu >
                <h1 className="tituloNavMovile">Espacio Klem</h1>

            </div>
            <div className="logoEspacioKlem">
                <img src={logoEspacioKlem} alt="Logo de Espacio Klem" />

            </div>
            <div className="navBar">
                {navLinks.map((item, index) => {
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