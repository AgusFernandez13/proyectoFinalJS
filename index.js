const inputNombre = document.getElementById("nombre")
const botonIngresar = document.getElementById("ingresar")

botonIngresar.onclick = () =>{
    localStorage.setItem("nombre",inputNombre.value)
    Swal.fire(
        'Bienvenido',
        ` como estas ${inputNombre.value}?`,
        'success'
      )
    
}


let totalCompra = 0
let seguirComprando = true
let decision 

class producto {
    constructor(id, nombre, precio, ){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const celular = new producto(1, "computadora asus", 6060)
const tv = new producto(2,"tv", 12029)
const reloj = new producto(3,"celulares", 4000)
const notebook = new producto(4,"mouse", 20000)

const productosExistentes = [celular, tv, reloj, notebook]

 while (seguirComprando === true) {
    if(producto === 1){
        totalCompra = totalCompra + 50023
   } else if (producto === 2){
         totalCompra = totalCompra + 100000
     } else if (producto ===3){
        totalCompra = totalCompra + 8000
     } else if (producto === 4){
         totalCompra = totalCompra + 1000
     } else{
       producto = parseInt(prompt("escoje un producto: 1.computadora asus - 2.tv - 3.celulares - 4.mouse"))
        continue
     }

    decision = parseInt(prompt("desea seguir comprando? 1.si - 2.no"))
    if (decision === 1) {
        producto = parseInt(prompt("escoje un producto: 1.computadora asus - 2.tv - 3.celulares - 4.mouse"))
    } 
    else{
        seguirComprando = false
    }
     alert('El total de tu compra es $ ' +  totalCompra)
    
 }



