export function validarFormulario(){

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const empresa = document.getElementById("empresa").value;

    // como las keys y los values son iguales, se puede crear el objeto asi
    const cliente = {
        nombre,
        email,
        telefono,
        empresa
    }

    if (validar(cliente)){
        mostrarAlerta("Todos los campos son obligatorios");
        return;
    }

    return cliente;
}

function validar(obj){
    // validar con los objects methods, validara cada uno de los valores
    return !Object.values(obj).every(input => input !== '');
}

function mostrarAlerta(mensaje){
    const existeAlerta = document.getElementById('alerta');

    if (!existeAlerta){
        const alerta = document.createElement('p');
        alerta.id = 'alerta';
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded',
        'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
    
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `

        const formulario = document.querySelector("#formulario");
        formulario.appendChild(alerta);
    
        setTimeout(()=>{
            alerta.remove();
        }, 3000)
    }
}
