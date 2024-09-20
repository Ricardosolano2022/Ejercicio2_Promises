//Crea una promesa que divida dos números. Si el divisor es diferente de cero,
//resuelve la promesa con el resultado de la división. Si es cero, rechaza la
//promesa con el mensaje "Error: división por cero“.

export function dividir(num1:number, num2:number): Promise <number> {

    return new Promise((resolve, reject) => {
        
        if (num1 >= 0 && num2 !== 0){
            resolve(num1 / num2);
        } else{
            reject('Error!: La division por 0 no es posible!') //Rechazo de la promesa

        }
    });

}    






    

