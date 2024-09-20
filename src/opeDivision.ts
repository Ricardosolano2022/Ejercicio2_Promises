//Implementacion o uso:

import { dividir } from "./ejercicioDivision";

dividir(25, 5)

    .then(resultado =>{
        console.log(`La division es: ${resultado}`);
        console.log(`Promesa Cumplida!`);
        
        
    })

    .catch(error => {
        console.error(error); // "Error: Uno o ambos números son negativos."
        
 });
  
//Ejemplo con un número negativo y su rechazo
dividir(10, 0)
.then(resultado => {
  console.log(`La division es: ${resultado}`);
  
})
.catch(error => {
    console.error(error); // "Error: divisor es 0"
    console.log(`Promesa Rechazada!`);
    console.log('Fin de la promesa');
    
})