
function principal(){

    mensagem1()
    mensagem2()

}

function mensagem1(){

    console.log(`Atenção na aula`)

}

function mensagem2(){

    console.log(`Preciso ter foco para ter sucesso`)

}



function principal(){
    mensagemDia("Pedro")
    mensagemNoite("Carlos")
}

function mensagemDia(nome){
    console.log(`Muito bom dia ${nome}`)
}

function mensagemNoite(nome){
    console.log(`Muito boa noite ${nome}`)
}



function principal(){
    var nro = Number(prompt(`Informe um nro`))
    parImpar(nro)
}

function parImpar(timao){

    if (timao % 2 == 0){
        console.log(`Par`)
    }
    else {
        console.log(`Impar`)
    }
}

function principal(){
    var nro1 = Number(prompt(`Informe o nro 1`))
    var nro2 = Number(prompt(`Informe o nro 2`))

    soma(nro1, nro2)
}

function soma(timao, verdao){
    // contexto local
   console.log(`${timao + verdao}`)
}


function principal(){
    var nro1 = Number(prompt(`Informe o nro 1`))
    var nro2 = Number(prompt(`Informe o nro 2`))
    var opera = prompt(`Qual operação + - * /`)
    var resultado = operacao(nro1, nro2)

    console.log(resultado)
}

function operacao(timao, verdao){
    // contexto local
    return timao + verdao

}



// teste a função
function principal(){
    var nro1 = Number(prompt(`Informe o nro 1`))
    var nro2 = Number(prompt(`Informe o nro 2`))
    var result = divisivel(nro1,nro2)
    console.log(result)
}

// faça uma função que recebe dois números como parâmetro
// e retorna se são divisiveis
function divisivel(nro1, nro2){

    if (nro1 % nro2 == 0){
        return 'É divisivel'
    }    
    else {
        return 'Não é divisivel'
    }

}




































