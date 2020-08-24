function chefe(){
    // solicitar os dados para usuário
    // pede o nro 1
    var nro1 = Number(prompt("Informe o primeiro número"))
    // pede o nro 2
    var nro2 = Number(prompt("Informe o segundo número"))
    // pede o símbolo da operação (+, -, *, /)
    var operador = prompt("Informe o símbolo da operação (+, -, *, /)")
    // chama a função passando os parâmetros
    // e recebe o resultado
    var result = calculadora(nro1, nro2, operador)
    console.log(`O resultado da operação é ${result}`)

}
// função que recebe 3 valores como parâmetro 
// nro1 -> 1o. número
// nro2 -> 2o. número
// operador -> símbolo da operação
function calculadora(nro1, nro2, operador){
    switch(operador){
        case '+': return nro1 + nro2
        case '-': return nro1 - nro2
        case '*': return nro1 * nro2
        case '/': 
                  if (nro2 != 0){
                      return nro1 / nro2
                  }
                  else {
                      return `Impossível divisão por zero`
                  }
    }
}

chefe()