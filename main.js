// Estructura de control

// definen la manera y el flujo de información de un proceso o de aplicación

// condicionales
    // if - else, if else if
    // switch
    // ternario

// iterativas
    // for, for each, for of, for in
    // while, do while

// if
// es una estructura de control que funciona a partir de expresiones condicionales
// que al momento de evaluar nos regrese (true o false)

// sintaxis
// if (expresion o expresiones) {}
// if (expresion o expresiones) {} else {}
// if (expresion o expresiones) {} else if (expresion o expresiones) {} else {}

// ejemplo
// imprimir en pantalla si una persona puede votar mientras tengas mas de 17 años
// const edad = Number(prompt('Cuantos años tienes: '));
// if (isNaN(edad)) { // true es un NaN, false es un number
//     console.error("solo se aceptan números");
//     throw new Error("solo se aceptan números");
//     console.log("continuamos");
// } else {
//     if (edad > 17) {
//         console.info("Puedes votar");
//     } else {
//         console.warn("En este momento no puedes votar");
//     }
// }


// ejercicio
// queremos regalar premios a los usuarios de nuestra plataforma, le pediremos al usuario su año
// de nacimiento y su username, si el usuario tiene mas de 20 años y su username tiene al menos 6
// caracteres, se gana un 25% de descuento

// si tiene 18 años, se gana un 15%

// si tiene menos de 18, obtiene 10% , pero si su username tiene mas de 8 caracteres, se gana un 12%

// <string>.length
// username.length -> number

// switch
// es una estructura de control que funciona a partir de una variable
// y un conjunto de casos (valores)

// sintaxis
/**
    switch(variable a analizar) {
        case <valor>:
            break;
        default:
    }
*/

// ejemplo
// somos una agencia de viajes
// tenemos diversos destinos
// merida 800
// monterrey 900
// guadalajara 700
// cdmx  500
// hidalgo 300

// console.log(`
// a) Merida
// b) Monterrey
// c) Guadalajara
// d) CDMX
// e) Hidalgo
// `)

// const destino = prompt("A donde quieres viajar: "); 

// switch(destino) {
//     case "a":
//         console.log("El costo del viaje es: $ 800")
//         break;
//     case "b":
//         console.log("El costo del viaje es: $ 900")
//         break;
//     case "c":
//         console.log("El costo del viaje es: $ 700")
//         break;
//     case "d":
//         console.log("El costo del viaje es: $ 500")
//         break;
//     case "e":
//         console.log("El costo del viaje es: $ 300")
//         break;
//     default:
//         console.log("No encontramos ese destino")
// }

// ternario
// operador pero si me permite de alguna manera controlar los valores de mi flujo de datos
// se recomienda su uso para la asignación de valores

// sintaxis
// expresion o expresiones booleanas ? (si se cumple) : (cuando no se cumple);

// ejemplo

// estamos revisando los sellos de cada alumno en un salon de clases
// para poder aprobar, un alumno debe tener minimo 30 sellos
// de lo contrario esta reprobado

// const cantidad_sellos = Number(prompt('Cantidad de sellos'));

// console.log(cantidad_sellos >= 30 ? "APROBO" : "REPROBO");


// for
// es una estructura iterativa que hará un bloque de código n número de veces
// determina su inicio y fin desde su declaración

// sintaxis
// for (inicio; condicion de continuacion; incremento o decremento) {}

// sintaxis de la declaracion de for
// let i = 0;
// i <= 10
// i++ 

// ejemplo

// imprimir del 1 al 10
// for(let i = 0; i<=20; i++) {
//     if(i >= 1 && i<=10) {
//         console.log("dentro del if")
//         console.log(i)
//     }

//     if (i == 11) {
//         break;
//     }
//     console.log("fuera del if")
//     console.log(i)
// }

// while

// es una estructura iterativa, ejecuta n numero de veces su bloque de código
// pero solo se ejecutará mientras la condición de su declaración se cumpla

// sintaxis
// while(condicion booleana) {}

// siguiendo el ejemplo de la  agencia de viajes, queremos generar un cotizador
// debe poder preguntarle al cliente si desea cotizar un viaje, y si ya no quiere
// debe mostrar su menu principal, pero si desea cotizar un viaje nuevamente
// debemos mostrarle el catalogo de destinos

// let respuesta = Number(prompt("Desea cotizar un viaje: 1)SI 2)NO"));

// while(respuesta === 1) {
//     console.log(`
//         a) Merida
//         b) Monterrey
//         c) Guadalajara
//         d) CDMX
//         e) Hidalgo
//     `)

//     const destino = prompt("A donde quieres viajar: "); 

//     switch(destino) {
//         case "a":
//             console.log("El costo del viaje es: $ 800")
//             break;
//         case "b":
//             console.log("El costo del viaje es: $ 900")
//             break;
//         case "c":
//             console.log("El costo del viaje es: $ 700")
//             break;
//         case "d":
//             console.log("El costo del viaje es: $ 500")
//             break;
//         case "e":
//             console.log("El costo del viaje es: $ 300")
//             break;
//         default:
//             console.log("No encontramos ese destino")
//     }

//     respuesta = Number(prompt("Desea cotizar un viaje: 1)SI 2)NO"));
// }

// console.log("gracias por su preferencia");


// do while
// es una estructura iterativa, ejecuta n numero de veces su bloque de código
// pero solo se ejecutará mientras la condición de su declaración se cumpla

// pero

// el bloque de código a iterar vive en el do y ya no en el while
// el while se convierte en una mera condicion de validación
// mientrar se cumpla la condición de while, el do se ejecutará

// siempre se ejecutará una primera vez sin validar la condición del while

// sintaxis
// do{ (aqui vive el código a iterar) } while(condición booleana)

let respuesta = Number(prompt("Desea cotizar un viaje: 1)SI 2)NO"));

do {
    if (respuesta == 1) {
        console.log(`
            a) Merida
            b) Monterrey
            c) Guadalajara
            d) CDMX
            e) Hidalgo
        `)

        const destino = prompt("A donde quieres viajar: "); 

        switch(destino) {
            case "a":
                console.log("El costo del viaje es: $ 800")
                break;
            case "b":
                console.log("El costo del viaje es: $ 900")
                break;
            case "c":
                console.log("El costo del viaje es: $ 700")
                break;
            case "d":
                console.log("El costo del viaje es: $ 500")
                break;
            case "e":
                console.log("El costo del viaje es: $ 300")
                break;
            default:
                console.log("No encontramos ese destino")
        }

        respuesta = Number(prompt("Desea cotizar un viaje: 1)SI 2)NO"));
    }    
    
} while(respuesta === 1)

console.log("gracias por su preferencia");
