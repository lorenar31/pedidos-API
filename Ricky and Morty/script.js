//traer la información de Ricky and Morty usando el ID como parámetro

    const traerDatos = async(id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}/`);
    const data = await response.json();
    return data;
    }
    

//crear las tarjetas de los personajes

const nuevaTarjeta = async (character) => {
    const contenedor = document.querySelector('.card-contenedor');
    const nuevaTarjeta = crearTarjeta(character)
    contenedor.innerHTML += nuevaTarjeta
    }

//template strings

    const crearTarjeta = (character) => {
    return `<div class="card">
            <img width="250" src="${character.image}" alt="${character.name}">;
            <div class="card-body">
                <h2>${character.name}</h2>
                <p>Species:${character.species}</p>
            <p>Status:${character.status}</p>
            </div>
        </div>`
    }

    
  //crear una funcion para el boton

    const btnButton = () => {
    const datosInput = document.querySelector("input#personaje-id");
    const button = document.querySelector("#btn-button");
    button.addEventListener('click', async () => {
    const datosEncontrado = await traerDatos(datosInput.value);
    nuevaTarjeta(datosEncontrado);
    listaPersonaje(datosEncontrado);
    });
    };

    btnButton();
    
//almacenamiento local
    function listaPersonaje(character) {
    const list = JSON.parse(localStorage.getItem('characters')) || [];
    list.push(character);
    localStorage.setItem('characters', JSON.stringify(list));
}
