//Ejercicio 1: Autenticación básica usuario y contraseña
// Simula un login con usuario y contraseña predefinidos.

// const usuario = "admin";
// const password = "1234";

// const usuarioIngresado = prompt("Ingrese su usuario");
// const passwordIngresada = prompt("Ingrese su contraseña")

// if (usuario == usuarioIngresado && password == passwordIngresada){
//     alert("Bienvenido " + usuarioIngresado)
// } else if (usuario !== usuarioIngresado && password == passwordIngresada){
//     alert("Revise su usuario")
// } else if (usuario == usuarioIngresado && password !== passwordIngresada){
//     alert("Revise su contraseña")
// } else {
//     alert("no se que esta haciendo")
// }

//Ejercicio 2: Validador de correo

// const usuario = prompt("Ingrese su usuario")
// const correoingresado = prompt("Ingrese su correo")
// const containssymbol = correoingresado.includes("@");
// const containssymbol1 = correoingresado.includes(".")

// if (correoingresado.includes("@") && correoingresado.includes(".")){
//     alert("Bienvenido " + usuario)
// }else{
//     alert ("Error en el correo")
// }

//Ejercicio 3:  Simulación de intentos de login (máximo 3)

// const usuario = "valen"
// const password = "qwerty"

// for(let i=0; i<3 ; i++){
//     const usuarioIngresado = prompt("Ingrese su usuario")
//     const passwordIngresada = prompt("Ingrese su contraseña")

//     if (usuarioIngresado == usuario && passwordIngresada == password){
//         alert ("Bienvenido " + usuario)
//         break; //con esta palabra cortamos el for para que no se siga abriendo el globito de ingrese datos
//     } else {
//         alert ("Acceso denegado")
//     }
// }

//Ejercicio 4: Simulador de cajero automático (retiro simple)

// const dineromax = parseInt("1000")
// const dineroguardado = parseInt("2500")
// const ingresedinero = parseInt(prompt("Ingrese cuanto dinero quiere retirar: $"))

// if (ingresedinero > dineromax){
//     alert("Usted no cuenta con ese dinero");
// } else if (ingresedinero <= dineromax){
//     const restante = dineroguardado - ingresedinero;
//     alert(`Tome su dinero Le quedan ${restante} pesos`)
// }

// const dineromax = parseInt("3000")
// const dineroencaja = parseInt("6000")
// const dineroretirar = parseFloat(prompt("Ingrese la cantidad que quiera retirar"))

// if(dineroretirar > dineroencaja){
//     alert("No tiene ese dinero")
// } else if (dineroretirar <= dineroencaja){
//     const restante = dineroencaja - dineroretirar;
//     alert(`Aqui tiene su dinero. Le quedan ${restante}`)
// }

//Ejercicio 5: Bloqueo por PIN incorrecto

// const pin = 1235
// let accesoConcedido = false;

// for(let i=0; i<3; i++){
//     const piningresado = prompt("Ingrese su pin numerico")

//     if (pin == piningresado){
//         alert("Puede ingresar")
//         accesoConcedido = true;
//         break;
//     } else {
//         alert(`Pin incorrecto. Le quedan ${2-i} intentos`)
//     }
// }

// if (!accesoConcedido) {
//     alert("acceso Denegado. Ha superado la cantidad de intentos")
// }

//Ejercicio 6: Menú de opciones básico - Con hora y minutos incluido

// alert("Bienvenido a este menu en el que tiene que elegir una opcion")
// let nombre = prompt("Ingrese su nombre")
// let opcion = prompt(`Hola ${nombre} Elija una opcion \n 1- Ver saludo \n 2- Ver hora \n 3- Salir`)
// let momentoActual = new Date()
// let hora = momentoActual.getHours()
// let minutos = momentoActual.getMinutes()

// switch(opcion){
//     case "1":
//         alert(`Hola + ${nombre}`);
//         break;
//     case "2":
//         alert(`La hora es ${hora}:${minutos}`)
//         break;
//     case "3":
//         break;
// }

//Ejercicio 7: Pide contraseña segura con numero


// let safepassword = false

// for (i = 0; i < 3; i++) {
//     const password = prompt("Ingrese una contraseña segura");
//     if (/\d/.test(password)){
//         alert("Contraseña segura")
//         safepassword = true;
//         break;
//     } else {
//         alert(`contraseña insegura. Ingrese otra. Le quedan ${2-i} intentos`);
//     }
// }

// if(!safepassword){
//     alert("Perdiste")
// }


//Ejercicio 8: Temporizador regresivo


// let number = parseInt(prompt("Ingrese un numero y veremos como llegara a 0"))
// for(let i = number ; i >= 0;i--){
//     alert(i)
// }

//Ejercicio random par impar

// const numero = Number(prompt("Ingrese un numero y le dire si es par o no"))

// if (numero % 2 === 0){ // % → operador módulo - Devuelve el resto de una división. === → comparación estricta / Compara que el valor y el tipo sean iguales.
//     alert ("El numero es par");
// } else {
//     alert ("es impar");
// }


//Ejercicio 9: Contador de letras en una palabra con palabra.length y lower case 

// let palabra = prompt("Ingrese una palabra y le dire cuantas letras tiene");
// let cantidadLetras = palabra.length;

// while(palabra && palabra.toLowerCase() !== "salir"){
//     let cantidadLetras = palabra.length;
//     alert(`Esa palabra tiene ${cantidadLetras} letras`);

//     palabra = prompt("Ingrese otra palabra o salir para terminar");
// }

//Ejercicio 10: Acceso por edad mínima con intentos



for(i=0; i<6; i++){
    let edad = Number(prompt("Ingrese su edad y le diremos si puede entrar o no"))
    if (edad >= 18){
        alert("puede ingresar")
        break;
    } else {
    alert(`acceso denegado. Le quedan ${5-i} intentos`)
    }   
}
