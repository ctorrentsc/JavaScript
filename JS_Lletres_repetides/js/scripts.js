// Exercici:
// 
// L’exercici consisteix en mostrar per consola quantes vegades apareix cada lletra del teu nom i cognoms amb diferents variants (fases).
// 
// FASE 1
// 
// ● Crea un array amb el teu nom on cada posició correspongui a una lletra.
// 
// ● Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres.



function mostrar_lletres(){

    var nom_propi = new Array("C", "L", "A", "R", "A");
    var i;

    for(i = 0; i < nom_propi.length; i++){
        var result = nom_propi[i];
        console.log(result);
    }
}

// FASE 2
// 
// ● Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
// 
// ● Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número: __’.


function buscar_tipus_lletra(){
    var nom_propi = new Array("C", 3, "L", "A", "R", "A"); //Afegim un número per comprovar que la funció va ok
    //var text = ""; (aquesta variable seria útil si fem .innerHTML (comment a baix), per a console.log no ens fa falta.
    var resultat;
    var i;

    for(i = 0; i < nom_propi.length; i++){
        if(typeof(nom_propi[i]) != typeof(1)){ //Entra al switch si el format és diferent del de número.
            switch(nom_propi[i]){
                case "A":
                    resultat = "He trobat la Vocal: " + nom_propi[i];
                    break;
                case "E":
                    resultat = "He trobat la Vocal: " + nom_propi[i];
                    break;
                case "I":
                    resultat = "He trobat la Vocal: " + nom_propi[i];
                    break;
                case "O":
                    resultat = "He trobat la Vocal: " + nom_propi[i];
                    break;
                case "U":
                    resultat = "He trobat la Vocal: " + nom_propi[i];
                    break;
                default:
                    resultat = "He trobat la consonant: " + nom_propi[i];
            }               
    
        } else {
            resultat = "Els noms de persona no contenen el número: " + nom_propi[i];
          }
        console.log(resultat);

        // document.getElementById("demo").innerHTML = text += resultat + "<br>";  (Ens imprimiria a "demo" el resultat utilitzant la var text).
    }

}

// FASE 3
// 
// ● Emmagatzemar en un Map tant les lletres de la llista (o array) com el nombre de vegades que apareixen


function crear_map() {

    var nom_propi = new Array("C", "L", "A", "R", "A");
    var nova_llista = nom_propi.map(comptar_repeticions);
   

    function comptar_repeticions(value){
        var i;
        var contador = 0;
        

        
            for(i = 0; i<nom_propi.length; i++){
                if(value == nom_propi[i]){
                    contador++;
                } 
                if(value == nom_propi[i] && contador > 1){   //Eliminem el valor si es repeteix (en aquest cas la 2a A)
                    nom_propi.splice(i); // Tb es pot fer nom_propi.pop(i)
    
                }              
            }
            return value + ":" + contador;
    }
    console.log(nova_llista);
  }


//   FASE 4
// 
//   ● Crea una altra llista amb el teu cognom on cada posició correspongui a una lletra.
//   
//   ● Fusiona les dues llistes en una sola. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de la llista name i surname i al acabar l’execució només tindrem una que es dirà fullName.

function unir(){
        var nom_propi = new Array("C", "L", "A", "R", "A");
        var cognom = new Array("T", "O", "R", "R", "E", "N", "T", "S");
        var espai = " ";

        var resultat = nom_propi.concat(espai, cognom);
        console.log(resultat);
}
  