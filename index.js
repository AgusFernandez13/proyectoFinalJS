class producto {
    constructor(id, nombre, precio, stock, img){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.img = img
    }
}
const producto1 = new producto(1, "Notebook hypercool marca Asus", 43.231, 10)
const producto2 = new producto(2, "Notebook sinchan marca lenovo", 43.231, 2)
const producto3 = new producto(3, "Pc Asus con componetes completos", 43.231, 56)
const producto4 = new producto(4, "Pc completa marca HYPEREX", 43.231, 32)
const producto5 = new producto(5, "Notebook hypercool marca HP", 43.231, 21)
const producto6 = new producto(6, "Notebook sinchan marca lenovo", 43.231, 34)
const producto7 = new producto(7, "Notebook Asus ", 43.231, 29) 
const producto8 = new producto(8, "Notebook hypercool marca lenovo", 43.231, 23)


const productos = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
]


  const divProductos = document.getElementById("divProductos")

  productos.forEach(productos=>{
    divProductos.innerHTML +=`
    <div id= "${productos.id}"class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${productos.nombre}</h5>
    <p class="card-text"> Precio: $${productos.precio}</p>
    <p class="card-text"> Stock: ${productos.stock}</p>
    <button id="${productos.id}" class="btn btn-primary">Agregar al carrito</a>
   </div>
  </div>

    `
  })
  
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

    const carrito = JSON.parse(localStorage.getItem("carrito")) || []
    const botonesAgregar = document.querySelectorAll(".btn-primary")

    botonesAgregar.forEach(boton=>{

      const productoSeleccionado = productos.find(prod=>prod.id === parseInt(boton.id))
      console.log(productoSeleccionado)

      const productoCarrito = {...productoSeleccionado, cantidad: 1 }
      console.log(productoSeleccionado,productoCarrito)

      const indexCarrito = carrito.findIndex((prod) =>prod.id === productoCarrito.id)
      if (indexCarrito === -1){
        carrito.push(productoCarrito)
      } else{
        carrito[indexCarrito].cantidad++
      }
      localStorage.setItem("carrito", JSON.stringify(carrito))
      console.log(carrito)
      
      boton.onclick = () =>{
        Toast.fire({
          icon: 'success',
          title: 'agregado',
            }  )
    }
    })

    const botonFinalizar = document.querySelector("#finalizar")

    botonFinalizar.onclick = () =>{
      const totalCompra = carrito.map(prod=>prod.precio * prod.cantidad).reduce((elem1,elem2)=>elem1+elem2)
      console.log(totalCompra)
      alert("el total de tu compra es: " +totalCompra)
    }





