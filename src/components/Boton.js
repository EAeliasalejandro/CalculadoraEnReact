import React from "react";

const esOperador = valor =>{
    return isNaN(valor) && (valor != '.') && (valor != '=');
};

//prop estructurado
function Boton(props){
    return(
        <div className = {`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`} >
            {props.children}
        </div>
    );
}
export default Boton;