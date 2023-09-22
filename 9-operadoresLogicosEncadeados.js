console.log("Trabalhando com condicionais");
const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const idadeComprador = 14;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possiveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa viagem!");
  listaDeDestinos.splice(1, 1);
} else {
  console.log("Não é maior de Idade e não posso vender");
}
  
"\n  \n \n " // \n para pular uma linha

console.log('Embarque: ') 
if (idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa viagem!");
} else {
  console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);
