const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(pokemon) {
    contenedorTarjetas.innerHTML = "";
    pokemon.forEach(producto => {
        const nuevaTarjeta = document.createElement("div");
        nuevaTarjeta.classList = "tarjeta-producto";
        nuevaTarjeta.innerHTML = `
            <img src="\( {producto.img}" alt=" \){producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button>Agregar al carrito</button>
        `;
        contenedorTarjetas.appendChild(nuevaTarjeta);
        nuevaTarjeta.getElementsByTagName("button")[0].addEventListener("click", () => {
            agregarAlCarrito(producto);
            actualizarNumeroCarrito();
        });
    });
}

crearTarjetasProductosInicio(pokemon);