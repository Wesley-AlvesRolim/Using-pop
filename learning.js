const name = 'Wesley' //string 
let age =16; //number
let estaAprovado = true; //bolrean
let surname; //undefined
let corSelecionado = null //redefinir um valor

function nomeDaFunção(valor /* esse valor é um paramentro. OS parametros sao uteis para carregar um mesmo valor para toda a aplicação */
    ) {
    return valor / 2
}
let usarFunção = nomeDaFunção(8)
console.log(usarFunção)

//Array [elemento1,elemento2,elemento3...]
//a posição dos elementos começa no 0 
//=> ex: elemento1 está na posição 0
//MÉTODOS DE ARRAY

let meuArray = [5,12,16,'Wesley','Rolim','Cachorro']

//o pop() ele apaga o ultimo elemento e retorna este elemento
let pop = meuArray.pop()
console.log(meuArray);
console.log(pop);

//o slice(começo,fim) meio que retorna uma fatia do array 
//o (começo,fim) é a posicão do começo e fim da fatia
let slice = meuArray.slice(1 , meuArray.length - 1)
console.log(slice);// retorna um novo array

//o join() transforma o array numa string
//e separa com o que estiver no parenteses
let join = meuArray.join('/')
console.log(join);

// o push() coloca o que esta dentro do parenteses na ultima posição
let push = meuArray.push('Trabalhador')
console.log(meuArray);

//o includes() verifica se caso exista um elemento no array
let existe = meuArray.includes('Wesley')
let naoExiste = meuArray.includes('São mais de',8000)
console.log(existe,naoExiste);

//o indexOf() ele procura a posição do elemento dentro do array
let existeNoArray = meuArray.indexOf(12)
let naoExisteNoArray = meuArray.indexOf('cachorrinho')
console.log('posição '+existeNoArray,' cachorrinho é '+naoExisteNoArray);

//o concat() junta dois ou mais arrays, porem não são o mesmo array
let concatArray = ['Concat','junta','dois ou + arrays']
let concat = meuArray.concat(concatArray,concatArray)
//Sintaxe: meuArray vai juntar com o array do [concatArray] e do [concatArray]
console.log(concat);

//o Spread '...' ele junto os arrays em um só
console.log([...meuArray,...concatArray]);
//obs: para ser array tem que ter o [] em volta das variaves com o spread

//truque
let [numero,,Idade,Nome,Sobrenome] = meuArray
//esse truque define variaveis de acordo com a posição
//caso nao queira dar uma variavel coloque nada ex: [filme,,desenho]
console.log(numero,Idade,Nome);