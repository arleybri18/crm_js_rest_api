// instalar json server:

// npm i -g json-server

// esto permite usar unn  archivo json como base de datos
// conectar json server con el archivo:

// json-server db.json -p 4000

const url = "http://localhost:4000/clientes"

// insertar clientes
export const nuevoCliente = async cliente =>{

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
}

export const obtenerClientes = async () =>{

    try {
        const respuesta = await fetch(url);
        const clientes = await respuesta.json();

        return clientes;
        
    } catch (error) {
        console.log(error);
    }
}


export const eliminarCliente = async id =>{

    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}


export const obtenerCliente = async id =>{

    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;

    } catch (error) {
        console.log(error);
    }
}


export const updateCliente = async (cliente, id) =>{

    try {
        await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}
