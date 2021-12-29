/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:

multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/

console.log(multiplicar(0, 7))

function multiplicar(n1, n2){
    if(n1 < 0 || n2 < 0) return "Função aceita somente numeros não negativos";
    if(n1 === 0 || n2 === 0) return 0;
    let multiplicacao = n2;
    let valorSaida = 0;
    while(multiplicacao >= 0){
        valorSaida += n1
        multiplicacao--;
    }
}