// 4. Condicionais e fluxo de execução
//03- Ifs encadeados
console.log(`Trabalhando com condicionais`)
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`)

const idadeComprador = 14
const estaAcompanhada = true

console.log('Destinos possiveis: ')
console.log(listaDeDestinos)

if (idadeComprador >= 18) {
  console.log('Comprador maior de idade: ')
  listaDeDestinos.splice(1, 1) //removendo item
} else if (estaAcompanhada) {
  console.log('Comprador está acompanhado: ')
  listaDeDestinos.splice(1, 1)
} else {
  console.log('Não é maior de idade e não posso vender')
}

console.log(listaDeDestinos)
