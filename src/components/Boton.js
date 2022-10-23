import React from "react";
import '../stylesheets/Boton.css';

const esOperador = valor =>{
    return isNaN(valor) && (valor != '.') && (valor != '=');
};

//prop estructurado
function Boton(props){
    return(
        <div className = {`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
        onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}
export default Boton;