// Agregar al carrito
function agregarAlCarrito(producto) {
    let memoria = JSON.parse(localStorage.getItem("pokemon"));
    if (!memoria) {
        memoria = [];
    }
    const indiceMemoria = memoria.findIndex(memoria => memoria.id === producto.id);
    if (indiceMemoria === -1) {
        memoria.push({...producto, cantidad: 1});
    } else {
        memoria[indiceMemoria].cantidad += 1;
    }
    localStorage.setItem("pokemon", JSON.stringify(memoria));
}

// Remover del carrito
function removerDelCarrito(producto) {
    let memoria = JSON.parse(localStorage.getItem("pokemon"));
    const indiceMemoria = memoria.findIndex(memoria => memoria.id === producto.id);
    memoria.splice(indiceMemoria, 1);
    localStorage.setItem("pokemon", JSON.stringify(memoria));
    actualizarCarrito();
}

// Actualizar cantidad
function actualizarCantidad(producto, cantidad) {
    let memoria = JSON.parse(localStorage.getItem("pokemon"));
    const indiceMemoria = memoria.findIndex(memoria => memoria.id === producto.id);
    memoria[indiceMemoria].cantidad = cantidad;
    localStorage.setItem("pokemon", JSON.stringify(memoria));
    actualizarCarrito();
}