//Primitivos (imutáveis)- string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

//          01234
let nome = 'Vitor';
nome = 'Assalin'//Não está mudando o dado, apenas trocando o valor da variável
console.log(nome);

nome[0] = 'R';//Não substitui o primeiro indice, por isso é imutável 
console.log(nome[0], nome);

let a = 'A';
let b = a;//Cópia
console.log(a, b)

a = 'Outra coisa'
console.log(a, b)//altera o valor de "a" mas não altera o valor de "b" que é "igual" ao "a"(alterando o valor de "a", não afeta o valor de "B");


//Referência (mutável) - array, objetct, function - Passados por referência no mesmo valor na memória

let c = [1, 2, 3];
let d = c;// apontam pro mesmo espaço da memória
console.log(c, d)

c.push(4);// altera os dois elementos ("c" e "d")
console.log(c);
console.log(c, d);

d.pop();// tambem alteram os dois
console.log(d);
console.log(c, d);

//Para apenas copiar o valor de uma variável de referência precisa usar o spread[...a]

const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Assalin'
};
console.log(pessoa);

const pessoa2 = {...pessoa};//SPREAD

pessoa.nome = 'Outro';//Feito o spread agora sim altera a "copia" dos valores e é possível alterar
console.log(pessoa2);


