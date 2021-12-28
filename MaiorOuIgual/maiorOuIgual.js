//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
/*
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true
*/

console.log(maiorOuIgual(5, 1));


function maiorOuIgual(n1, n2){
    if(typeof(n1) === "string" || typeof(n2) === "string") return false;
    if(n1 >= n2) return true;
    else return false;
}