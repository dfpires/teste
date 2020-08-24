
chefe()


function chefe(){
    // as variáveis nro e result tem escopo local
    var nro = Number(prompt("Informe um numero"))
    var result = exe1(nro)
    console.log(result)
}

function exe1(n){
    // as variáveis n e soma tem escopo local
    var soma = 0 
    for(var i=1; i<=n;i++){
        soma = soma + 1
    }
    return soma
}


function soma10(nro){
    nro = nro + 10
}

function chefe(){
    var x = 20
    soma10(x)
    console.log(x)
}

function entrada(vet){
    vet.push(6)
    vet.push(7)
    vet.push(8)
}

function busca(vet, x) {
    var resp = vet.indexOf(x)
    if (resp == -1){
        console.log(`Elemento não encontrado`)
    }
    else {
        console.log(`Elemento encontrado na posição ${resp}`)
    }
}

function chefe(){
    var vetor = []
    entrada(vetor)
    console.log(vetor)
    busca(vetor, 8)
}

