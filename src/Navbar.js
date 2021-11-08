import React from "react";
import Navitem from "./Navitem.js";
import "./Navbar.css";

const Navbar = ({ titulo }) => {
    console.log(titulo)

    return (
        <nav>
            <div className="container">
                <h1> {titulo} </h1>
                <ul>
                    <Navitem text="Inicio" />
                    <Navitem text="Productos" />
                    <Navitem text="Nosotros" />
                    <Navitem text="Medios de pago" />
                    <Navitem text="Contacto" />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;