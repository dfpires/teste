
function revisao(){
    // criação de um vetor de bike
    var bikes = []
    // estrutura de repetição
    do {
        // criar um objeto
        var bike = new Object()
        bike.modelo = prompt("Informe o modelo da bike")
        bike.marca = prompt("Informe a marca da bike")
        bike.quadro = Number(prompt("Informe o quadro da bike"))
        bike.roda = Number(prompt("Informe tamanho da roda tem a bike"))
        var vetor = prompt("Informe a data de fabricação da bike").split("/")
         bike.fabricacao = new Date(vetor[2], vetor[1]-1, vetor[0])
         // adiciona a bike em bikes - no vetor
         bikes.push(bike)
        var resposta = prompt("Deseja inserir mais uma bike ? (s/n)" )
    }
    while (resposta != 'n')
    // média da qtde de quadros das bikes
    var soma = 0
    for(var i=0;i < bikes.length;i++){
        soma = soma + bikes[i].quadro
    }
    console.log(`A média é ${soma/bikes.length}`)

    // marca da bike com menor roda
    var menorRoda = bikes[0].roda
    var menorMarca = bikes[0].marca
    for(var i = 1; i < bikes.length; i++){
        if (bikes[i].roda < menorRoda){
            menorRoda = bikes[i].roda
            menorMarca = bikes[i].marca
        }
    }
    console.log(`Marca com menor roda é ${menorMarca}`)
    // mostrar as bikes em intervalo de data
    var vetori = prompt("Informe data inicial").split("/")
    var datai = new Date(vetori[2], vetori[1]-1, vetori[0])
    var vetorf = prompt("Informe data final").split("/")
    var dataf = new Date(vetorf[2], vetorf[1]-1, vetorf[0])
    for(var i = 0; i < bikes.length;i++){
        if ((bikes[i].fabricacao >= datai) && (bikes[i].fabricacao <= dataf)){
            console.log(bikes[i])
        }
    }
}