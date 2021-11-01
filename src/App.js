import React from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let nombre = "Agustin";
const styles = {
  parrafo: {
    fontFamily: "roboto",
    color: "red"
  }
};

function App() {
  return (
    <>
      <h1 style={{ color: "blue" }}>Hola Mundo!</h1>
      <p className="parrafo2">Ecommerce en proceso</p>
      <p style={styles.parrafo}>Nombres: {nombre}</p>
      <p style={styles.parrafo}>Edad: {16+6}</p>
    </>
  );
}

export default App;
