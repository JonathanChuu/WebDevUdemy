function soma (num1, num2){
    return num1 + num2
}

function subtrair (num1, num2){
    return num1 - num2
}

function multiplicar( num1, num2){
    return num1 * num2
}

function dividir(num1, num2){
    return num1 / num2
}

function calculadora(operador, num1, num2){
    return operador(num1, num2)
}

console.log(calculadora(dividir,5,2))