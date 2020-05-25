// EXERCICIS JS //

// Exercici 1: L'exercici consisteix a crear un fitxer anomenat ciber.html i mostrar per consola un 'Hola mundo' (per activar la consola ->; F12). Pista: Console.log()
console.log("Hola món");

// Exercici 2: Crea un alert que mostri el teu nom:
alert("hola, em dic Clara");

// Exercici 3: Crea una variable que contingui el teu nom i un altre que contingui el teu cognom.
var nom = "Clara";
var cognom = "Torrents";

console.log("Hola, em dic " + nom + " " + cognom);

// Exercici 4: Crea dos variables amb dos números i fes una suma entre ells

var num1 = 8;
var num2 = 4;
var total = num1 + num2;

console.log(total);

// Exercici 5: Crea una variable nota_examen juntament amb un alert que ens digui si l’examen ha estat aprovat o no juntament amb la nota. (caldrà utilitzar un condicional IF)

function resultat() {
    
var nota = document.getElementById("notaFinal").value;

if (nota < 5) {
    document.getElementById("demo1").innerHTML = "Ho sentim, per sota del cinc l'examen està suspès."
} else {
    document.getElementById("demo1").innerHTML = "Enhorabona, l'examen està aprovat."
}

}

// Exercici 6: Reemplaça la paraula blau per la paraula verd del següent text Tinc un cotxe de color blau. Després intenta fer-ho remplaçant les o per les u.

function substituirColor() {
    var str = document.getElementById("demo2").innerHTML; 
    var newStr = str.replace("blau", "verd");

    document.getElementById("demo2").innerHTML = newStr;
}

function substituirLletres() {
    var str = document.getElementById("demo2").innerHTML; 
    var newStr = str.replace(/o/g, "u");  // faig servir g de global pq canviï totes les o per u i no només la 1a.

    document.getElementById("demo2").innerHTML = newStr;
}

// Exercici 7: Donat el seguit llistat d’objectes ‘taula’, ‘cadira’, ‘ordinador’, ‘libreta’, per un bucle que mostri per pantalla cada objecte i la save posició al llistat.

function llistaObjectes() {
    var objectes = ["taula", "cadira", "ordinador", "llibreta"];
    var i;
    var text = " ";

    for (i = 0; i < objectes.length; i++) {
        text += "L'objecte " + objectes[i] + " està a la posició " + (i + 1) + "<br>";      
    }

      document.getElementById("demo3").innerHTML = text;
}

// Exercici 8: Crea una funció anomenada calculadora que tingui com a entrada els següents paràmetres: operador, valor1 i valor2.
// Estructura de la funció que faci sumes, restes i multiplicacions. El resultat haurà de ser mostrar per pantalla.

function calculadora() {
  let num1 = parseInt(prompt("Introdueix el 1r número"));
  let num2 = parseInt(prompt("Introdueix el 2n número"));
  let operador = prompt("Escull un signe: + , - , * , /");

  let resultat;

  switch (operador) {
    case "+":
      resultat = myFunctionSuma(num1, num2);
      break;
    case "-":
      resultat = myFunctionResta(num1, num2);
      break;
    case "*":
      resultat = myFunctionMult(num1, num2);
      break;
    case "/":
      resultat = myFunctionDiv(num1, num2);
      break;
    default: result = "Alguna cosa ha fallat"
    }

    document.getElementById("demo4").innerHTML = "El resultat de l'operació és: " + resultat;

  }

  function myFunctionSuma(num1, num2) {
  return num1 + num2;
  }

  function myFunctionResta(num1, num2) {
  return num1 - num2;
  }

  function myFunctionMult(num1, num2) {
  return num1 * num2;
  }

  function myFunctionDiv(num1, num2) {
  return num1 / num2;
  }

