// comece a criar a sua função add na linha abaixo
function add(a, b){
    return a + b;
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// comece a criar a sua função multiply na linha abaixo
function multiply(a, b){
    let result = 0;
    for(let i = 0; i < a; i++){
        result = add(result, b);
    }
    return result;
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, n){
    let result = x;
    for(let i = 0; i < n - 1; i++){
        result *= x;
    }
    return result;
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(n){
    let result = n;
    for(let i = n - 1; i > 0; i--){
        result *= i;
    }
    return result;
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n){
    let last = 0;
    let actual = 1;
    let fibo = [];

    while(fibo.length <= n){
        if(!fibo.includes(0)){
            fibo.push(0);
        }

        if(!fibo.includes(1)){
            fibo.push(1);
        }

        let currentFibo = last + actual;
        last = actual;
        actual = currentFibo;
        fibo.push(currentFibo);
    }
    
    return fibo[fibo.length - 1];
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
