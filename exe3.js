// função que recebe duas cadeias de caracteres
function compara(cadeia1, cadeia2){
    // verifica se são iguais
    if (cadeia1 == cadeia2){
        return 0 // cliente que quer assim
    }
    else {
        // vamos verificar qual vetor é maior
        // operador ternário
        var tamanhoMaior = (cadeia1.length > cadeia2.length) ? cadeia1.length : cadeia2.length

        
        for(var i=0;i<tamanhoMaior;i++){ // 
            if ((cadeia1[i] != cadeia2[i]) || (cadeia2[i] != cadeia3[i])){
                return i + 1 // sai do for e da função
            }
        }
    }
}

function chefe(){
    var c1 = prompt("Informe a cadeia 1")
    var c2 = prompt("Informe a cadeia 2")
    var resultado = compara(c1, c2)
    console.log(`O resultado da comparação é ${resultado}`)
}

chefe()