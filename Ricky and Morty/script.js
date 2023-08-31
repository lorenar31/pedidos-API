//campo de busqueda con el ID// Hacemos una solicitud a la API utilizando el ID proporcionado

const traerDatos = async (id) => {
const buscarDatos = await fetch(`https://rickandmortyapi.com/api/character/`)
.then(response => response.json()) 
.then(data => console.log(data));
}
traerDatos()

//crear tarjeta con template strings

        const crearCard = () => {
        return `
        <div class="card-container" style="width: 18rem">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"" alt="card-img">
                <div class="card-body">
                <h4 class="card">${userData.name}</h4>
                <p class="card">${userData.species}</p>
                <p class="card">${userData.status}</p>
            </div>
          </div>`;
}

const cardData = () => {
const contenedor = document.querySelector('.card-container')
const newCard = crearCard()
contenedor.innerHTML += newCard
}
//Agregar función al boton
    const hacerClick = () => {
    const button = document.querySelector("#btn-button");
    button.addEventListener('click', (e)=>{
     cardData()
    })
}
