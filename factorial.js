function factorial(n = 0){
    if (n == 0){
        return 1;
    }
    if (n < 0){
        return ('You can`t do that! Please, repeat math program, my dear and silly friend;)');
        
    }
    return n * factorial(n - 1);
    
}

console.log(factorial(5));