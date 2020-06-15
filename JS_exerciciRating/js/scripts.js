//Juga amb foc:
         
            // Que el color de la flama canviï si el mouse es posa sobre una d’elles
            // Al moure el mouse sobre un element, que canviï els colors a tots els seus anteriors. Si per exemple es posa el mouse al tercer, han de canviar de color de l'1 al 3.
            // Al premer un símbol, s’han de quedar els colors fixes en aquest i tots els anteriors
            // si es prem en un altre símbol, els colors s’han d’actualitzar correctament. A més, si l’usuari prem fora de la zona dels símbols, s’han de desel·leccionar tots.

"use stict"; //Activem "strict mode" per a JS, que afecta a tot l'arxiu .js

    var space =  document.getElementById("demo"); //Contenidor d'elements.
    var space_array = Array.from(document.getElementsByClassName("fire")); // Convertim el contenidor en Array.
    console.log(space_array);
  
    // EventsListeners per canvi de color segons sigui mouseover o click. APROFITO LA FUNCIÓ fire_elements() PER ALS 2.
    space.addEventListener("mouseover", fire_elements, false);
    space.addEventListener("click", fire_elements, false); 
    var value_event = false;  // Boleà que serveix per, si hem fet click, que no s'apliqui la funció que borra la class "newColor"
        
    
    function fire_elements(){  // Funció cridada pels AddEventListeners q canvien el color  ---------------------------------------
      var selected = event.target; //Element que ha activat l'event

      for(let i = 0; i < space_array.length; i++){ //Recorrem l'Array per localitzar l'element seleccionat i esbrinar el seu index
        if(space_array[i] === selected){
          var index_selected = i;
        }
      }

      console.log(event.type); // Mirem si l'event que ha cridat la funció és click; si ho és canviem el valor del boleà a true
      if (event.type === "click"){
          value_event = true;
    } // Final funció -------------------------------------------------------------------------------------------------------------
      
      
      
    space_array.forEach(function(item, index, arr){  // Apliquem class "newColor" als elements de l'Array d'index <= al seleccionat.
        if(index <= index_selected){
          item.classList.add("newColor");
        } else {
          item.classList.remove("newColor");
        }
      });
    }
    // EventListeners per borrar class "newColor". No puc aprofitar la mateixa funció per als 2 addEventListeners pq en el 2n necessito indicar que cal que el click sigui fora dels elements amb class .fire mentre que en el 1r és precisament en sortir de damunt d'aquests elements (mouseout) que cridem la funció.

    space.addEventListener("mouseout", function(){  // Borrem class en fer mouseout si el boleà no ha canviat (x tant l'event 
        if( value_event == false){                    // anterior no és click)
           space_array.forEach(function(item, index, arr){
           item.classList.remove("newColor");
           }); // Final forEach
        } // Final if         
     }, false); // Final addEventListener

        
    document.addEventListener("click", function(){ // Borrem la class en clicar qualsevol lloc del doc diferent dels símbols
        if(!event.target.matches(".fire")){
            space_array.forEach(function(item, index, arr){
                item.classList.remove("newColor");
                value_event = false; // Tornem a canviar el boleà altra vegada pq dp d'aquest clic en qualsevol lloc sí funcioni 
            }); // Final forEach      // l'addEventListener en "mouseout".
        } // Final if  
    }, false); // Final addEventListener
        
    

   

    

    
    








    
    
    
      
     

   



    function clean(){
        document.getElementById("demo").innerHTML = "";
        document.getElementById("simbol").value = "";
    }

   




    
