// chama a função chefe
chefe()
// cria a função chefe
function chefe(){
    // declarar o vetor de escopo global
    var vetor = []
    // vamos mostrar um menu de opções para o usuário
    do {
        var opcao = Number(prompt(`Escolha uma das opções: \n [1] Cadastrar \n [2] Média salário \n [3] Menor e maior idade 
        \n [4] Qtde mulheres \n [5] Sair`))
        // verifica qual opção usuário selecionou
        switch(opcao){
            case 1: cadastra(vetor) 
                    break
            case 2: mediaSalario(vetor)
                    break
            case 3: menorMaiorIdade(vetor)
                    break
            case 4: qtdeMulheres(vetor)
                    break
            case 5: console.log(`Grato por usar nosso software`)
                    break
            default: console.log(`Opção inválida`)
        }
    }
    while (opcao != 5)
}

function cadastra(vet){
    // cria um objeto
    var objeto = new Object()
    objeto.idade = Number(prompt("Informe a idade"))
    objeto.sexo = prompt("Informe o sexo")
    objeto.salario = Number(prompt("Informe o salário"))
    objeto.filhos = Number(prompt("Informe o número de filhos"))
    // insere objeto no vet
    vet.push(objeto) // observe que na verdade vai inserir em vetor
}

function mediaSalario(vet){
    var soma = 0 // vai somar os salários
    for(var i=0;i<vet.length;i++){ // para cada elemento do vetor
        soma = soma + vet[i].salario // acumula
    }
    console.log(`A média de salário é de ${soma/vet.length}`)
}

function menorMaiorIdade(vet){
    var menorIdade = vet[0].idade
    var maiorIdade = vet[0].idade
    for(var i=1;i<vet.length;i++){ // para cada elemento do vetor

        if (vet[i].idade < menorIdade){
            menorIdade = vet[i].idade
        }
        if (vet[i].idade > maiorIdade){
            maiorIdade = vet[i].idade
        }
    }
    console.log(`Maior idade é ${maiorIdade} e menor idade é ${menorIdade}`)
}

function qtdeMulheres(vet){
    var qtde = 0
    for(var i=0;i<vet.length;i++){ // para cada elemento do vetor
       if ((vet[i].sexo == 'f') && (vet[i].filhos == 3) && (vet[i].salario < 500)){
           qtde++ // conta ou soma 1
       }
    }
    console.log(`Qtde de mulhres ${qtde}`)
}