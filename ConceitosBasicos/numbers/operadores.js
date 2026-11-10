//Aritiméticos 
// + Adição e Concatenaão
//** Potenciação
//% Resto da divisão

const num1 = '5';//String contatena 
const num = 10;// Number realiza a operação
const num2 = 3;
const num3 = 5;

console.log(num1 + num2);//Contatenação
console.log(num + num2);//Adição
console.log(num - num2);//Subtração
console.log(num * num2);//Multiplicação
console.log(num / num2);//Divisão
console.log(num ** num2);//Pontenciação
console.log(num % num2);//Resto da divisão

//Precendencia de operadores
// ()
// **
// / %
// + -
console.log((num1 + num2) * num3);

//Incremento ++
//Decremente --
const step = 2;
let contador = 0;
contador++
//Incremento ++
console.log(contador);
contador--
//Decremento --
console.log(contador);

//Operadores de atribuição
//Contador pulando um número específico
contador += step;// -> forma siplificada de contador = contador + step
console.log(contador);
contador *= step;
console.log(contador);
contador *= step;
console.log(contador);

//NaN - Not a Number
const num4 = 10;
const num5 = parseInt('5');//Converte o valor dentro da String para um Number inteiro
const num6 = parseFloat('5.5');//Converte o valor dentro da String para um Number decimal
const num7 = Number('5');//Converte o valor dentro da String para um Number inteiro ou decimal
console.log(num4 * num5);