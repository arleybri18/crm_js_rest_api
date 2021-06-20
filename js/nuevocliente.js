// como de las funciones no se esta haciendo export default por eso se tiene que hacer con {}
import { validarFormulario } from "./funciones.js";
import { nuevoCliente } from "./API.js"

// para proteger las funciones y que solo perteezcan a este archivo

(function(){
    const formulario = document.querySelector("#formulario");

    formulario.addEventListener('submit', crearCliente);

    function crearCliente(e){
        e.preventDefault();

        const cliente = validarFormulario("new");
        if (cliente){
            nuevoCliente(cliente);
        };
    }
})();
