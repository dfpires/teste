
function chefe(){
    // cria o vetor
    var vetor = []
    cadastra(vetor) // chama a função cadastra
    cadastra(vetor) // chama a função cadastra
    cadastra(vetor) // chama a função cadastra
    mostra(vetor) // chama a função mostra
}

function cadastra(vet){
    // a variável vet representa a variável vetor - escopo global
    // cria objeto
    var objeto = new Object()
    objeto.codigo = Number(prompt("Informe código do produto"))
    objeto.qtde = Number(prompt("Informe qtde do produto"))
    objeto.preco = Number(prompt("Informe preço do produto"))
    objeto.nome = prompt("Informe o nome do produto")
    // adiciona objeto no vetor
    vet.push(objeto)
    console.log(`Produto cadastrado com sucesso`)
}

function mostra(vet){
    // a variável vet representa a variável vetor - escopo global
    for(var i=0; i < vet.length;i++){
        console.log(vet[i])
    }
}
