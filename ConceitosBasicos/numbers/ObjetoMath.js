let num1 = 9.49;
//let num2 = Math.floor(num1);//Arrendona número para baixo
//let num2 = Math.ceil(num1);//Arredonda para cima
let num2 = Math.round(num1);//Arredonda para o mais perto
console.log(num2)
console.log(Math.max(1,2,3,4,512,32,-23,2313,-2323,10,20))//Acha o maior número de uma sequência númerica
console.log(Math.min(1,2,3,4,512,32,-23,2313,-2323,10,20))//Acha o menor número de uma sequência númerica

//const aleatorio = Math.random();//Gera um número aleatório
//const aleatorio = Math.random() * (10 - 5) + 5;//Gera um número aleatório entre dois números esécíficos
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);//Gera um número inteiro aleatório entre dois números esécíficos
console.log(aleatorio);

console.log(Math.PI)//Pega o valor de PI
