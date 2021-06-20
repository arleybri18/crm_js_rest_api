import { obtenerCliente, updateCliente } from "./API.js"
import { validarFormulario } from "./funciones.js";

(function(){

    //campos del formulario

    const formulario = document.getElementById("formulario");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const telefonoInput = document.getElementById("telefono");
    const empresaInput = document.getElementById("empresa");
    const idInput = document.getElementById("id");

    document.addEventListener('DOMContentLoaded', async ()=>{

        // formulario.addEventListener('submit', validar);

        // obtener el id desde la url
        const parametrosURL = new URLSearchParams(window.location.search);

        const clienteId = parseInt(parametrosURL.get('id'));

        const cliente = await obtenerCliente(clienteId);

        mostrarCliente(cliente);

        formulario.addEventListener('submit', actualizarCliente);

        function actualizarCliente(e){
            e.preventDefault();
    
            const cliente = validarFormulario();
            if (cliente){
                updateCliente(cliente, clienteId);
            };
        }
    })

    function mostrarCliente(cliente){
        const { nombre, email, telefono, empresa, id } = cliente;
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;
    }
})();
