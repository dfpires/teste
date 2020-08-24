
// se n for 3: soma de 1 + 2 + 3 -> 6
// se n for 8: soma de 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 => 36
// variáveis com escopo local
function exe1(n){
    var soma = 0
    for(var i = 1; i <= n;i++){
        soma = soma + i
    }
    return soma
}
// variáveis com escopo local
function chefe(){
    var nro = Number(prompt(`Informe um numero`))
    var result = exe1(nro)
    console.log(`A soma dos número é ${result}`)
}
chefe()

// exercício 3 - vamos esperar 2 cadeias de caracteres passadas como parâmetro
function exe3(cadeia1, cadeia2){
    if (cadeia1 == cadeia2){
        return 0 // as duas cadeias são iguais
    }
    else {
        // percorrer a cadeia1 e compara posição por posição com cadeia2
        if (cadeia2.length > cadeia1.length){
            return cadeia1.length
        }
        else {
            for(var i=0; i < cadeia1.length;i++){
                if (cadeia1[i] != cadeia2[i]){ // é diferente
                    return i+1  // retorna posição e sai da função
                }
            }
        }
    }
}

function chefe(){
    var cad1 = prompt(`Informe a cadeia 1`)
    var cad2 = prompt(`Informe a cadeia 2`)
    var resultado = exe3(cad1, cad2)
    console.log(`O resultado é ${resultado}`)
}



function cadastra(vet){
    // cria o objeto
    var objeto = new Object()
    objeto.codigo = Number(prompt("Informe codigo"))
    objeto.qtde = Number(prompt("Informe qtde"))
    objeto.preco = Number(prompt("Informe preco"))
    objeto.nome = prompt("Informe nome")
    // insere objeto no vetor
    vet.push(objeto)
}

function mostra(vet){
    for(var i=0;i<vet.length;i++){
        console.log(vet[i])
    }
}
function chefe(){
    var vetor = []

    do {
        var opcao = Number(prompt("Digite uma opca \n [1]. Cadastra \n [2]. Consultar \n [3]. Sair "))
        switch(opcao) {
            case 1: cadastra(vetor)
                    break
            case 2: mostra(vetor)
                    break
            case 3: console.log(`Até logo`)
            default: console.log(`Opção inválida`)
        }
    }
    while (opcao != 3)

}

chefe()























// variáveis com escopo global
// podem ter escopo globar vetores e objetos

chefe()

// variáveis com escopo global - vet
function entrada(vet){
    vet.push(8)
    vet.push(6)
    vet.push(7)
    vet.push(10)
    vet.push(20)
}
// variáveis com escopo global - vet
function soma10(vet){
    for(var i=0; i< vet.length; i++){
        vet[i] = vet[i] + 10
    }
}

// exemplo com vetor
function chefe(){
    var vetor = []
    entrada(vetor)
    console.log(vetor) // qual o valor do vetor aqui
    soma10(vetor)
    console.log(`Valor final do vetor ${vetor}`) // qual o valor de vetor
}




function chefe(){
    var carro = new Object()
    compra(carro)
    console.log(carro) // qual o valor de carro aqui
}

function compra(obj){
    obj.modelo = 'Renegade'
    obj.marca = 'Jeep'
    obj.ano = 2019
}

chefe()





















