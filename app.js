let numeroSecreto = 0;
let intentos =0; 
let listaNumeroSorteados=[];
let numeroMaximo=10;
function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento); //el query puede ser un elemnto, en este caso el h1 del HTML, lo captura y lo atribuye, es un objeto
    elementoHTML.innerHTML=texto;
    return;
}
function verificarIntento(){
    //preferiblemente que haga una acción
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento ('p',`!Acertaste! El número secreto es ${numeroSecreto}. Lo lograste en ${intentos} ${(intentos===1)?'intento.':'intentos.'}`);
        document.getElementById('reiniciar').removeAttribute ('disabled');
    } else {
        //El usuario no acertó 
        if (numeroDeUsuario>numeroSecreto){
        asignarTextoElemento ('p',`El número secreto es menor`);}
        else{
        asignarTextoElemento ('p','El número secreto es mayor');
        }
        
    }
    intentos++;
    limpiarCaja ();
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}
function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumeroSorteados);
    //Si ya sorteamos todos los numeros 
    if (listaNumeroSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else {
    //Si el # generado está incluido en la lista:
    if (listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else{
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}   
function reiniciarJuego (){
    //limpiar caja 
    limpiarCaja ();
    //indicar mensaje de inicio
    condicionesIniciales ();
    // deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
//Texto inicio de juego 
function condicionesIniciales (){
asignarTextoElemento ('h1','Juego del número secreto');
asignarTextoElemento ('p',`Escoge un número del 1 al ${numeroMaximo}`);
numeroSecreto=generarNumeroSecreto();
intentos=1; 
console.log(numeroSecreto);
}
condicionesIniciales ();


//Desafios 2.
/*
function saludar (nombre){
    alert(`Hola, ${nombre} `);
}
saludar("Alice");    
*/
// 3. 
/* 
function duplicar (numero){
    console.log(numero*2)
}
duplicar(5); 
*/
//4. 

/*function promedio (numero1, numero2, numero3)
{
    console.log(numero1, numero2, numero3);
    console.log((numero1+numero2+numero3)/3);
}
promedio(2,3,5);
*/
// 5. 

/* 
function numeroMayor (n1,n2){
    if (n1>n2){
        numeroMayor=n1
    } else{
        numeroMayor=n2
    }
}
numeroMayor(17,9);
console.log(numeroMayor); */ /* 
function encontrarMayor(a, b) {
    return a > b ? a : b;
  }
  let numeroMayor = encontrarMayor(15, 18);
  console.log(numeroMayor);
  */ 
 // 6.
 /* 
 function cuadrado(x){
    return x*x;
 }
 numeroCuadrado=cuadrado (9131

 );
 console.log(numeroCuadrado);

*/ 
/* Desafio 1.
function IMC(altura,peso){
     IMC=peso/(altura*altura);
}
IMC (1.73,60);
console.log(`El IMC es ${IMC}`);
*/ /* 2.
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
  */ 
/* 3.
function convertidorDolares(plata) {
    return convertidorDolares=plata*4104;
}
convertidorDolares(100);
console.log(convertidorDolares);
*/
/* 4.
function rectangulo(h,b){
    // altura=h y b=base
    area=h*b;
    perimetro=(h*b)*2;
}
rectangulo(4,8)
console.log(`El área es ${area} y el perímetro es ${perimetro}`);
*/
/* 5.
function circulo(radio){
    area=Math.floor(3.14*radio*radio);
    perimetro=Math.floor(2*3.14*radio);
}
circulo(6);
console.log(`El área es de ${area} y el perimetro es ${perimetro} `);
*/ /*
function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero = 9;
  mostrarTablaDeMultiplicar(numero);
  */ 
// lista genérica 
/*
// Crea una lista llamada lenguagesDeProgramacion
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agrega elementos a la lista
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Crea una función para mostrar todos los elementos de la lista en orden inverso
function mostrarLenguajesInverso() {
    // Crea una copia invertida de la lista original
    let lenguajesInvertidos = [...lenguagesDeProgramacion].reverse();
    
    // Recorre la lista invertida e imprime cada elemento
    for (let lenguaje of lenguajesInvertidos) {
        console.log(lenguaje);
    }
}

// Llama a la función para mostrar los lenguajes en orden inverso
mostrarLenguajesInverso();
*/
// 6 
/*
 let promedioNumeros= [1,2,4,5,6,3];
 function calcularPromedio (lista){
    let suma=0;
    for (let i=0; i< lista.length; i++){
        suma+=lista[i];
    }
    return suma/ lista.length;
}
let media=calcularPromedio(promedioNumeros);
console.log('Media:', media);
*/
/*
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [1, 8, 252, 5, 12];
  encontrarMayorMenor(numeros);
*/ 
/* 
function calcularSuma(lista) {
    let suma = 0;
    for (let list of lista){
        suma+=list;
    }
    return suma;
  }
  
  let numeros = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numeros);
  console.log('Suma:', suma);
*/ 
/*
// Crea una función que devuelva la posición del elemento en la lista o -1 si no existe
function encontrarIndice(lista, elemento) {
    // Usa el método indexOf para encontrar el índice del elemento
    return lista.indexOf(elemento);
}

// Ejemplo de uso
let listaDeElementos = ['manzana', 'banana', 'cereza', 'durazno'];
let elementoBuscado = 'cereza';
let indice = encontrarIndice(listaDeElementos, elementoBuscado);

if (indice !== -1) {
    console.log(`El elemento '${elementoBuscado}' se encuentra en la posición ${indice}.`);
} else {
    console.log(`El elemento '${elementoBuscado}' no se encuentra en la lista.`);
}
*/ 
/*
// Crea una función que recibe dos listas de números del mismo tamaño y devuelve una nueva lista con la suma de los elementos uno a uno
function sumarListas(lista1, lista2) {
    // Verifica que ambas listas tengan el mismo tamaño
    if (lista1.length !== lista2.length) {
        console.log("Las listas no tienen el mismo tamaño.");
        return [];
    }

    // Inicializa una nueva lista para almacenar las sumas
    let listaSuma = [];

    // Recorre ambas listas y suma los elementos correspondientes
    for (let i = 0; i < lista1.length; i++) {
        listaSuma.push(lista1[i] + lista2[i]);
    }

    // Devuelve la nueva lista con las sumas
    return listaSuma;
}

// Ejemplo de uso
let listaNumeros1 = [1, 2, 3, 4, 5];
let listaNumeros2 = [10, 20, 30, 40, 50];
let resultado = sumarListas(listaNumeros1, listaNumeros2);

console.log("La lista con las sumas es:", resultado);
*/
//Crear funcion 
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número
function obtenerCuadrados(lista) {
    // Usa el método map para crear una nueva lista con el cuadrado de cada número
    return lista.map(numero => numero * numero);
}

// Ejemplo de uso
let listaNumeros = [3, 2, 3, 4, 5];
let listaCuadrados = obtenerCuadrados(listaNumeros);

console.log("La lista con los cuadrados es:", listaCuadrados);
