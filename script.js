function totalAPagar(cantTickets, categoria) {
    const valorTicket = 200;
    let total = cantTickets * valorTicket;
    switch (categoria) {
        case "Estudiante":
            total = total - (total * 80 / 100)
            break;
        case "Trainee":
            total = total - (total * 50 / 100)
            break;
        case "Junior":
            total = total - (total * 15 / 100)
            break;
    }
    return total
}
let boton = document.getElementById("botonres")
boton.addEventListener("click", () => {
    let cantidad = document.getElementById("cantidad").value
    let categoria = document.getElementById("categorias").value
    let valor = totalAPagar(cantidad, categoria)
    let mensaje = document.getElementById("total")
    mensaje.textContent = "Total a pagar: $" + valor
}
)
function borrar () {
    let totalCompra = document.getElementById ("total")
    totalCompra.innerHTML = " Total a Pagar:$"
}