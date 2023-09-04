
    //Array vacio para almacenar los datos de los personajes 
    characters = [];
    //peticion a la APi de Ricky Morty
    const traerDatos = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}/`);
    const data = await response.json();
    return data;
    };
    //crear las tarjetas
    const nuevaTarjeta = async (character) => {
    const contenedor = document.querySelector('.card-contenedor');
    const nuevaTarjeta = crearTarjeta(character);
    if (!contenedor.innerHTML.includes(nuevaTarjeta)) {
    contenedor.innerHTML += nuevaTarjeta;
    }
    };

    
    //Template strings
    const crearTarjeta = (character) => {
    return `<div class="card">
            <img width="250" src="${character.image}" alt="${character.name}">
            <div class="card-body">
                <h2>${character.name}</h2>
                <p>Species: ${character.species}</p>
                <p>Status: ${character.status}</p>
                
            </div>
        </div>`;
    };

    //funcion al boton
    const btnButton = () => {
    const button = document.querySelector("#btn-button");
    button.addEventListener('click', async () => {
    datosInput = document.querySelector("input#personaje-id");
    const id = parseInt(datosInput.value);
    if (checkIdNumber(id)) {
    if (!filterDuplicates(id)) {
    const datosEncontrado = await traerDatos(id);
    nuevaTarjeta(datosEncontrado);
    listaPersonaje(datosEncontrado);
    } else {
    alert("¡Ese personaje ya se agregó!");
    }
    }
    });
    };

    //funcion para evitar poner personajes superior a 826
    function checkIdNumber(id) {
    if (id > 826) {
    alert("Seleccione un número menor o igual a 826");
    return false;
    }
    return true;
    }

    //evitar que se ponga personajes repetidos
    function filterDuplicates(id) {
    return characters.some(character => character.id === id);
    }
    //almacenamiento local
    function listaPersonaje(character) { 
    characters.push(character);
    localStorage.setItem('characters', JSON.stringify(characters));
    }
    
    //boton para eliminar personaje
    function mostrarPersonajes() {
    const contenedor = document.querySelector('.card-contenedor');
    contenedor.innerHTML = '';

    if (localStorage.getItem('characters')) {
        characters = JSON.parse(localStorage.getItem('characters'));

        characters.forEach((character) => {
        const nuevaTarjetaHtml = crearTarjeta(character);
        contenedor.innerHTML += nuevaTarjetaHtml;
        });
    }
    }

    const borrarTodos = () => {
    characters.length = 0;
    localStorage.removeItem('characters');
    mostrarPersonajes();
    };

    const btnBorrarTodos = document.querySelector("#btn-borrar-todos");
    btnBorrarTodos.addEventListener('click', borrarTodos);

    btnButton();
    mostrarPersonajes();



















