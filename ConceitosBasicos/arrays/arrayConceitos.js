//indexável = 012345789..
const nome = `Vitor Assalin`;

//indexável  =     0        1        2
const alunos = [`Vitor`, `Maria`, `João`];
console.log(alunos);

//selecionar o elemento dentro do array;
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

//altera o elemento específico dentro do array
alunos[0] = `Assalin`;
console.log(alunos);

//conta quantos elementos estão dentro do array
console.log(alunos.length)

//adiciona um elemento dentro do array 
alunos[3] = `Teste`;
console.log(alunos);

alunos.push(`Adiciona`);
console.log(alunos);

//adiciona no começo
alunos.unshift(`Add_Primeiro`);
console.log(alunos);
 
//remove a ultimo elemento
alunos.pop();
console.log(alunos);

const remove = alunos.pop();
//mostra qual elemento foi removido
console.log(remove);
console.log(alunos);

//remove o elemento do começo
const removeStart = alunos.shift();
console.log(removeStart);
console.log(alunos)

//deleta a oque tem dentro do elemento mas mantém o espaço reservado, porém vazio
delete alunos[1];
console.log(alunos);

alunos[1] = `Teste`;
alunos.push(`Teste1`);
alunos.push(`Teste2`);

//serpara o array em partes específicas de acordo com o número indexável
console.log(alunos.slice(0, -2));

//arrays são objetos indexáveis
console.log(typeof alunos);// => retorna object
//confirma se é realmente um array 
console.log(alunos instanceof Array);