const arrayProductos = [
    { nombre: "Modulo Arduino", precio: 14000, img: "./resources/images/Arduino.jpg" },
    { nombre: "Sensor Temperatura", precio: 12000, img: "./resources/images/Temperatura.jpg" },
    { nombre: "Motor Stepper", precio: 2500, img: "./resources/images/Stepper.jpg" },
    { nombre: "Extrusor Bowden", precio: 35000, img: "./resources/images/Bowden.jpg" },
    { nombre: "Drivers motor", precio: 12500, img: "./resources/images/Driver.jpg" },
    { nombre: "Adaptador 12V 2A", precio: 12000, img: "./resources/images/12v2AAdapter.jpg" },
    { nombre: "Rapberry Pi Pico", precio: 18500, img: "./resources/images/RpiPico.jpg" },
    { nombre: "HotBed Ender 3", precio: 68000, img: "./resources/images/HotBedEnder3.jpg" },
    { nombre: "Filamento PLA 1 Kg", precio: 57500, img: "./resources/images/Pla1Kg.jpg" },
    { nombre: "Ventilador Hotend", precio: 24000, img: "./resources/images/HotendFan.jpg" },
    { nombre: "MainBoard Ender 3", precio: 183000, img: "./resources/images/MainBoardEnder3.jpg" },
    { nombre: "Control Spindle CNC", precio: 25800, img: "./resources/images/ControlSpindleCNC.jpg" },
]

const stock = [10, 20, 30, 40, 50, 60, 10, 15, 20, 25, 30, 35]

const productList = arrayProductos.map((prod, indice) => { // Genera un nuevo arreglo con el campo indice de 1 a 12
    return {
        id: 1 + indice,     // Inserta un nuevo campo usando el index
        nombre: prod.nombre,
        precio: prod.precio,
        img: prod.img
    }
})

const nuevoStock = productList.map((inventario) => {  //mapea un nuevo array, insertando campo stock vacio
    return {
        id: inventario.id,
        nombre: inventario.nombre,
        precio: inventario.precio,
        stock: "",
        img: inventario.img
    }
})

for (let i = 0; i < stock.length; i++) nuevoStock[i].stock = stock[i]
// Rellena valor de stock para cada objeto del array nuevoStock, con los valores de la tabla stock
//console.log(nuevoStock)

const descrip = [
    "Tarjeta de desarrollo Arduino de 40 pines, incluye cable USB",
    "Sensor de Temperatura con interfaz I2C de 4 pines compatible con Arduino",
    "Motor Stepper con resolucion de 1.8 grados y voltaje de 12 a 48v",
    "Mecanismo de extrusor para Impresora 3D sistema Bowden, compatible con Ender 3",
    "Driver individual para ejes X,Y,Z de Impresora 3D o Maquina CNC de trabajo liviano",
    "Adaptador conmutado 12v 2A con capacidad de entrada entre 100-240 VAC",
    "Tarjeta de Desarrollo Rasperry Pi Pico, compatible con sistema MicroPython",
    "Cama caliente de Silicona para Impresora 3D Ender 3 de 22*22 cm",
    "Filamento de Impresion PLA importado - Colores: Blanco, Negro, Plata",
    "Ventilador 24V para refrigeracion Hotend Original Ender 3",
    "Tarjeta Principal de Impresora Ender3 / Ender3 V2 Compatible",
    "Control PWM de velocidad para Spindle de 12-48VDC y potencia de hasta 500W"
]

const stockProductos = nuevoStock.map((inventario) => {  //mapea un nuevo array, insertando campo desc vacio
    return {
        id: inventario.id,
        nombre: inventario.nombre,
        precio: inventario.precio,
        stock: inventario.stock,
        desc: "",
        img: inventario.img
    }
})

// Agregar la descripcion a cada uno de los productos del stock
for (let i = 0; i < nuevoStock.length; i++) stockProductos[i].desc = descrip[i]
console.log(stockProductos)