// aula 5 atribuição e imutabilidade

console.log("Trabalhando com atribuição de  variaveis");


const idade = 29;
let nome = "Ricardo";
const sobrenome ="Senac";

//console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`);

nome = nome + sobrenome;
console.log(nome);


/*Conhecemos os tipos const e let e qual a diferença entre eles: sendo que no primeiro caso os valores da variável não podem se modificar, e no segundo caso sim. */