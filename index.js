function solicitarNombre() {
    let nombreIngresado = prompt("ingresar nombre")
    alert("Hola " + nombreIngresado)
}
solicitarNombre();

function valor() {
    let valor = prompt ("Ingrese el valor de el producto elegido para calcular el valor final") 
    if (valor >= 0) {
        alert("Elegiste un producto de $ " + valor)
    }
    else{
        alert("No es un monto valido")
    }

    const iva = valor * 1.21
    alert("El monto final es $ " + iva)
    


} 


valor();

