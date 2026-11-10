let num1 = 10.01231231;// number
let num2 = 2.5;//number

//Não altera a variável inteira, apenas nessa impressão
console.log(num1.toString() + num2);

//num1 = num1.toString();//Altera a variável permanente
console.log(num1.toString(2));//Retorna o número binário
console.log(num1.toFixed(2));//Retorna apenas as casas decimais pedidas
console.log(Number.isInteger(num1))//Retorna falando se o número é inteiro(TRUE ou FALSE)
 
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp))//Identifica se eh um NaN (Not a Number)

//Imprecisão do Js
let num3 = 0.7
let num4 = 0.1

num3 += num4;//Era pra retornar 0.8 -> Retorna 0.79999999
num3 += num4;//Era pra retornar 0.9 -> Retorna 0.89999999
num3 += num4;//Era pra retornar 1.0 -> Retorna 0.99999999
num3 = parseFloat(num3.toFixed(2))//Transforma em um número inteiro e corrige as imprecisões
num3 = Number(num3.toFixed(2))//Transforma em um número inteiro e corrige as imprecisões
console.log(num3)



