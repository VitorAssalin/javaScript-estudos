//[] -> Array  {} -> Objeto
//Criando um objeto, mas dessa forma ainda precisa criar vários objetos
const pessoa1 = {
    nome: 'Vitor',
    sobrenome: 'Assalin',
    idade: 21
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);


//Function factory -> cria objetos
/* function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
} */

//Igual a function factory em cima mas de uma forma mais simplificada
function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade};//Por conta dos parametro terem o mesmo nome, pode simplificar assim os objetos
}

const pessoa = criaPessoa('Maria', 'Eduarda', 20);
const pessoa2 = criaPessoa('Teste', 'Criando', 30);
const pessoa3 = criaPessoa('Outras', 'Pessoas', 40);
const pessoa4 = criaPessoa('Com', 'Objetos', 50);

console.log(pessoa, pessoa2, pessoa3, pessoa4);

const pessoa5 = {
    nome: 'Vitor',
    sobrenome: 'Assalin',
    idade: 21,

    //abrindo uma função dentro do objeto
    fala(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} a minha idade atual é ${this.idade}.`)//this pega o elemento(objeto) respectivo do escopo
    },
    incrementaIdade(){
        this.idade++; //adiciona um ano a mais toda vez que for chamado
    }
};

pessoa5.fala();
pessoa5.incrementaIdade();
pessoa5.fala();
pessoa5.incrementaIdade();
pessoa5.fala();
pessoa5.incrementaIdade();
pessoa5.fala();
pessoa5.incrementaIdade();
pessoa5.fala();
pessoa5.incrementaIdade();
