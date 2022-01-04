function receberSomenteOsParesDeIndicesPares(array){
    let arraySaida = [];
    for(let i = 0; i < array.length; i++){
        if(i % 2 == 0 && array[i] % 2 == 0){
            arraySaida.push(array[i]);
        }
    }
    return arraySaida;
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))