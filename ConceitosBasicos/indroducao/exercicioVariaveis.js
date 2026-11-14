let varA = 'A';
let varB = 'B';
let varC = 'C';

/**Tem que retornar
 * B
 * C
 * A
 */
const varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;

console.log(varA, varB, varC);

//Outra resolução mais prática:
//[varA , varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
