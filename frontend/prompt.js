//alert("Hola 2826502")
/*let nombre = prompt("Por favor ingrese su nombre")
document.querySelector("div").innerHTML=nombre;*/
const nombreProducto = "Lenovo V4";
console.log(`El producto es: ${nombreProducto}`);

const precioProducto = 23;
const precioProductoStr = "23";

console.log( precioProducto);
console.log( precioProductoStr);

console.log( precioProducto === precioProductoStr);

//Objeto Producto:
//Objeto literal:
const producto1 = {
    nombre : "Lenovo ThinkPad",
    color : 'Red',
    modelo: 'IU643',
    descripcion: 'Laptop para el trabajo liviano', 
    precio: 2430000.00,
    getModelo: function(){
        console.log(this.modelo);
    }


}

//invocar modelo getModelo:
producto1.getModelo();


//sin desestructuración 
nombresito = producto1.nombre;
console.log(nombresito)

//
const {descripcion, precio} = producto1;
console.log(descripcion, precio)


//Object constructor:
const Producto = function (nombre, color, precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio}

//2 instancias de producto
const p1 = new Producto("Lapiz HB", "Azul", 5000)
console.log(p1);


//operador spread
const medidas = {
    "peso" : "50kg",
    "altura" : "1m",
    "largo" : "50cm"

}

const nuevoProducto = { ...producto1, ...medidas }
console.log(nuevoProducto);
 
/*Acceder a los atributos del objeto:
console.log(producto1["modelo"]);*/