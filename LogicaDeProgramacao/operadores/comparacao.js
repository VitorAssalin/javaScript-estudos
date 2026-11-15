/*Operadores de comparação
>     Maior que
>=    Maior que ou Igual a
<     Menor que
<=    Menor que ou Igual a
==    Igualdade (checa valor) ---> Não recomendado
===   Igualdade estrita (checa valor e tipo)
!=    Diferente (valor) ---> Não recomendado
!==   Diferente estrito (valor e tipo)

As operações sempre irão retornar valores Booleans
*/

const num1 = 10;
const num2  = 5;

let operador; 

// >     Maior que
operador = num1 > num2;
console.log(operador);// -> True

// >=    Maior que ou Igual a
operador = num1 >= num2;
console.log(operador);// -> True

// <     Menor que
operador = num1 < num2;// -> False
console.log(operador);

// <=    Menor que ou Igual a
operador = num1 <= num2;
console.log(operador)// -> False
const num3 = 10;//Para retornar "true", pois agr é igual
console.log(operador);// -> False

// ==    Igualdade (checa valor) ---> Não recomendado
const num4 = '10';//String para mostrar o motivo de não ser recomendado usar o "=="
operador = num1 == num4;
console.log(operador);// -> True, pois compara os valores dentro das variáveis, mesmo elas sendo de tipos diferentes

// ===   Igualdade estrita (checa valor e tipo)
operador = num1 === num4;
console.log(operador)// -> False, pois desse jeito comparamos o valor e o tipo e os tipos são diferentes (Int e String)
operador = num1 === num3;
console.log(operador);// -> True, pois os valores e os tipos são iguais

// !=    Diferente (valor) ---> Não recomendado
operador = num1 != num4;
console.log(operador);// -> False, pois vai verificar a diferença dos dois valores (são iguais), mas são tipos diferentes
operador = num1 != num2;
console.log(operador);// -> True, pois os valores são diferentes 

// !==   Diferente estrito (valor e tipo)
operador = num1 !== num4;
console.log(operador)// -> True, pois são de tipos diferentes mesmo tendo o mesmo valor
operador = num1 !== num3;
console.log(operador);// -> False, mesmo tipo e valor


