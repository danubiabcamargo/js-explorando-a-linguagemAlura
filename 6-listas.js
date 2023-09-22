// 3.Trabalhando com muitos elementos
//02-Criando Listas

console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;  ctrl+k+c comenta o bloco todo e o 'u' tira

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

listaDeDestinos.push(`Curitiba`); // adicionando um item na lista depois de pronta
console.log('Destinos possiveis: ');
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);


//splice para remover algo
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

//mostrar um unico elemento na lista
console.log(listaDeDestinos [1] , listaDeDestinos [0]);