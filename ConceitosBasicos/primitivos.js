//String, number, undefined, null, boolean

const nome = "Vitor";// String
const nome1 = 'Vitor';// String
const nome2 = `Vitor`;// String
const num1 = 10;// number
const nnum2 = 10.52// number
let nomeAluno;// declarou a variável, mas não incializou(undefined) = não aponta pra local nenhum na memóia
const sobrenomeAluno = null; //Nulo -> não aponta pra lugar nenhum na memória de forma controlada
const boolean = true;//Sempre retorna TRUE ou FALSE(lógico)

const a = [1, 2];
const b = a;

b.push(3);
console.log(a, b);

let c = 2;
let d = c;
console.log(c, d);// retorna 2, 2

c = 3;
console.log(c, d);// retorna 3, 2