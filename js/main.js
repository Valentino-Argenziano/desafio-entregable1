
function solicitarNombre() {
    alert("Buenas Noches! SOMOS LA AFIP!");
    let nombre = prompt("Ingrese su nombre");
    while (nombre === "") {
        nombre = prompt("Ingrese su nombre");
    }
    return nombre;
    while (true) {
    if (costo != "" && !isNaN(costo)) {
        alert("Muy bien!");
        break;
    } else {
        alert("Tenes que escribir el precio de costo! (Solo el numero)");
        break;
    }
}
}

let nombreCliente = solicitarNombre();
let costo = parseFloat(prompt("Ingrese el precio de costo del producto"))



precioCosto = costo.toFixed(2);
console.log("El precio de costo del producto a calcular es $" + precioCosto);

function calcularIVA(costo) {
    return (costo * 0.21)
}

let iva = calcularIVA(costo);
precioIva = iva.toFixed(2);

console.log("El iva del producto ingresado es $" + precioIva);

function sumarIva(costo) {
    return (costo + (costo * 0.21))
}

let preciConIva = sumarIva(costo);
precioCon_Iva = preciConIva.toFixed(2);

console.log("El precio del producto con IVA incluido es $" + precioCon_Iva);
