console.log('Olá, Javascript!')

var userName = 'Fernando Chiquito'

document.getElementById('user-name').innerHTML = userName

// Variáveis //

var nome = 'Mestre Yoda'
var idade = 100
var jedi = true 
var sith = false 

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof jedi)

// Operadores Matemáticos //

var n1 = 5
var n2 = 2.5

console.log(typeof n1)
console.log(typeof n2)

var total = n1 / n2
console.log(total)

// Operadores de Comparção //

var v1 = 5
var v2 = '5'

// == Compara os valores, não se importa com a tipagem do dado (v1 é numero e v2 é string, mesmo assim da true)
var resultado = v1 == v2 
console.log(resultado)

// === Compara inclusive a tipagem dos dados v1 é numero e v2 é string portanto false 
var resultado1 = v1 === v2 
console.log(resultado1)

// != é diferente?? 
var resultado1 = v1 != v2 
console.log(resultado1)

// != é diferente?? leva em consideração o typo de dados 
var resultado1 = v1 !== v2 
console.log(resultado1)

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
1>2 //false
5>3 //true
4>'1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
1>=2 //false
5>=3 //true
4>='1' //true
2>=2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro
1<2 //true
5<3 //false
4<'1' //false    

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro
1<=2 //true
5<=3 //false
4<='1' //false
2<=2 // true

// Funções 

function soma(n1, n2) {
    console.log(n1 + n2)
}

soma(15, 5)

// function boasVindas(nome){
//     alert(nome + ', seja bem Vindo!!!')
// }

// boasVindas('Fernando')

// return armazena o resultado por isso preciso criar uma variavel para chamar ele 
function soma1 (n1, n2) {
    return n1+ n2 
}

var resultado = soma(5,1000)
console.log(resultado)


// Controle de Fluxos  e BDD //

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixa eletrônico 
// Para poder comprar em lugares que não aceitam cartões de debitos ou créditos

// Cenário 1: Saque com sucesso 
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo
var saldo = 1000

function saque(valor) {
    saldo = saldo - valor 
}
saque(500)
console.log(saldo)

// Cenario 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo 
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo 
var saldo = 1000

function saque(valor) {

    if (valor > saldo){
        console.log('Valor do saque superior ao saldo')
    } else {
    saldo = saldo - valor }
}
saque(1001)
console.log(saldo)

// Cenario 3: Saque com valor máximo 
// Dado que meu saldo é de 1000 reais 
// E o valor máximo por operação é de 700 reais 
// Quando faço um saque no valor de 701 reais 
// Então não deve deduzir do meu saldo 
// E deve mostra uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação
var saldo = 1000

function saque(valor) {

    if (valor > saldo){
        console.log('Valor do saque superior ao saldo')
    } else if(valor > 700){
        console.log('Valor do saque é superior ao máximo permitido por operação')
    } else{
    saldo = saldo - valor }
}
saque(701)
console.log(saldo)


// Arrays //

var gaveteiro = ['Documentos', 'Maquiagem', 'Meias e Cuecas', 'Pijamas']

console.log(gaveteiro)
console.log(gaveteiro[3])
console.log(typeof gaveteiro)

// push adciona uma item no Array

gaveteiro.push('Camisetas')

console.log(gaveteiro)

// pop retira o último arrays adicionado 

gaveteiro.pop()

console.log(gaveteiro)

// para retirar outro item da lista 

gaveteiro = gaveteiro.filter(function(g){
    return g !== 'Maquiagem'
    })

    console.log(gaveteiro)

// para filtrar um unico array 

gaveteiro = gaveteiro.filter(function(g){
    return g === 'Documentos'
    })

    console.log(gaveteiro)


// Controle de Repetição Loops

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'Obian Kenob']

// personagens.forEach(function(p){
//     console.log(p)
// })

// Valor da posição 
// for (var i in personagens) {
//     console.log(i)
//     console.log(personagens[i])
// }

// for (var i =0; i <= 10; i++) {
//     console.log(i)
//     // código vai ser executado até a condição retornar false
// }


// Objetos //

var yoda = {
    nome: 'Meste Yoda',
    idade: 100,
    jedi: true,
    mostraIdade: function(){
        console.log(`A idade do ${this.nome} é ${this.idade} anos`)
        // usar apostrofos pq senão não funciona ``
    }
}

// yoda.nome = 'Mestre Yoda'
// yoda.idade = 100
// yoda.jedi = true

console.log(yoda)
yoda.mostraIdade()

// Constantes 

const arma = 'Sabre de Luz'
console.log(arma)