// faça uma função que recebe dois números e um operador como parâmetros 
// e faça o cálculo e  retorne o resultado

function principal(){
    // entrada de dados
    // solicita o 1o. número
    var nro1 = Number(prompt("Informe um número"))
    // solicita o 2o. número
    var nro2 = Number(prompt("Informe outro número"))
    // solicita o operador
    var operador = prompt("Informe o operador (+ , -, *, /")
    // chama a função e atribiu o resultado a uma variável
    var resultado = calculadora(nro1, nro2, operador)
    // mostra o resultado
    console.log(`O resultado da operação é ${resultado}`)

}
// função recebe 3 parâmetros
function calculadora(nro1, nro2, operador){
    switch(operador){
        case '+': return nro1 + nro2
        case '-': return nro1 - nro2
        case '*': return nro1 * nro2
        case '/': if (nro2 == 0) {
                    return `Não pode dividir por zero`
                 }
                 else {
                     return nro1 / nro2
                }
    }
}