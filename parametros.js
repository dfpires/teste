// matéria nova

function soma100(nro){
    return nro + 30
}

var result = soma100(70)
console.log(result)


// variável de escopo local - variável existe somente dentro da função
function soma200(nro){ // nro tem escopo local
    nro = nro + 200
}

var numero = 30
soma200(numero)
console.log(numero)
console.log(nro)


// variável de escopo global - variável existe em todo o programa
// essa variável em javascript deve ser um objeto ou um vetor
function soma300(vet){ // vet tem escopo global
    vet[0] = vet[0] + 300
    vet[1] = vet[1] + 300
}

var vetor = [9, 5]
soma300(vetor)
console.log(vetor)




function chefe(){
    var vetor = []
    comprar(vetor)
    relat1(vetor)
    relat2(vetor)
    relat3(vetor)
}

function comprar(vet){
    vet[0] = 100
}

function relat1(vet){
    console.log(vet[0])
}

function relat2(vet){
    console.log(vet[0])
}

function relat3(vet){
    console.log(vet[0])
}