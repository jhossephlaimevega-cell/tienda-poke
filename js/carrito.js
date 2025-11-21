// Actualizar número en header
function actualizarNumeroCarrito() {
    let memoria = JSON.parse(localStorage.getItem("pokemon"));
    let cantidad = 0;
    if (memoria) {
        memoria.forEach(producto => {
            cantidad += producto.cantidad;
        });
    }
    document.getElementById("cuenta-carrito").textContent = cantidad;
}

// Cargar carrito en página
function actualizarCarrito() {
    const contenedor = document.getElementById("carrito-container");
    const totales = document.getElementById("totales");
    let memoria = JSON.parse(localStorage.getItem("pokemon"));
    if (!memoria || memoria.length === 0) {
        contenedor.innerHTML = '<p id="carrito-vacio">¡Ups! El carrito está vacío. <a href="index.html">¡Elige tus Pokémon!</a></p>';
        totales.classList.add("escondido");
    } else {
        contenedor.innerHTML = "";
        let totalPrecio = 0;
        memoria.forEach(producto => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta-producto-carrito");
            tarjeta.innerHTML = `
                <img src="\( {producto.img}" alt=" \){producto.nombre}" style="width: 50px;">
                <span>${producto.nombre} - \]{producto.precio} x </span>
                <input type="number" value="\( {producto.cantidad}" min="1" onchange="actualizarCantidad( \){producto.id}, this.value)">
                <button onclick="removerDelCarrito(${producto.id})">Remover</button>
            `;
            contenedor.appendChild(tarjeta);
            totalPrecio += producto.precio * producto.cantidad;
        });
        document.getElementById("cantidad").textContent = memoria.reduce((sum, p) => sum + p.cantidad, 0);
        document.getElementById("precio").textContent = totalPrecio;
        totales.classList.remove("escondido");
    }
    actualizarNumeroCarrito();
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    actualizarNumeroCarrito();
    if (window.location.pathname.includes("carrito.html")) {
        actualizarCarrito();
    }
    document.getElementById("reiniciar")?.addEventListener("click", () => {
        localStorage.removeItem("pokemon");
        actualizarCarrito();
    });
    document.getElementById("comprar")?.addEventListener("click", () => {
        alert("¡Compra realizada! Gracias por tu pedido en PokéShop. 🎉");
        localStorage.removeItem("pokemon");
        actualizarCarrito();
    });
});