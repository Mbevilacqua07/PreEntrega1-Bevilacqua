// Tienda de whiskys

//Pregunto la edad y dependiendo lo ingresado se enviara distintos mensaje

while (true) {
  let numeroIngresado = prompt("Ingrese su edad");
  if (
    !isNaN(numeroIngresado) &&
    numeroIngresado != "" &&
    numeroIngresado >= 18
  ) {
    alert(
      "Hola! Usted tiene " +
        numeroIngresado +
        " anios. Bienvenido a la Boutique del Whisky"
    );
    break;
  } else if (numeroIngresado === "") {
    alert("Debe ingresar un numero ");
  } else if (numeroIngresado < 18) {
    alert(
      "Usted tiene " +
        numeroIngresado +
        " anios. No puede comprar en esta pagina"
    );
    continue;
  } else {
    alert("No es un numero ");
  }
}

//Se pueden sumar hasta 4 Productos por carrito
// Hago una funcion para sumar los productos (que en el futuro se agregaran al carrito)
function calcularSumaDeProductos(
  PrecioProducto1 = 0,
  PrecioProducto2 = 0,
  PrecioProducto3 = 0,
  PrecioProducto4 = 0
) {
  alert("Recuerda que solo se puede agregar hasta 4 productos por compra");
  suma = PrecioProducto1 + PrecioProducto2 + PrecioProducto3 + PrecioProducto4;
  sumaTotal = suma.toFixed(2);
  console.log(`El total de tu compra suma $${sumaTotal}`);
  document.write(
    "<h3> El total a pagar por tu compra es de $: " + sumaTotal + " <h3>"
  );
}

calcularSumaDeProductos(44, 39, 80);
console.log(sumaTotal);
calcularSumaDeProductos(25, 102, 900);
