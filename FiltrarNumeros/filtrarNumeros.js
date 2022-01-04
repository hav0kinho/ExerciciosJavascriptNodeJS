function filtrarNumeros(array){
    let arraySaida = [];
    for(let i = 0; i < array.length; i++){
        if(typeof(array[i]) === "number"){
            arraySaida.push(array[i]);
        }
    }
    return arraySaida;
}

console.log(filtrarNumeros(["a", "c"]));