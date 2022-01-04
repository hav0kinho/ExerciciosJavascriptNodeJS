function checarAnoBissexto(ano){
    if(ano % 4 == 0){
        return true;
    } else {
        return false;
    }
    
}

console.log(checarAnoBissexto(2022));