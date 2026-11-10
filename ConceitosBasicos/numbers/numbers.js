const num = Number(prompt('Digite um numero:'));//Tem que converter uma string para um número
const numTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')
numTitulo.innerHTML = num;

//-> Jeito que eu fiz
const raiz = Math.sqrt(num); 
document.body.innerHTML+= `O seu número é: ${num}</br></br>`;
document.body.innerHTML += `A raiz quadrada do numero ${num} é: ` + raiz + '</br></br>';
document.body.innerHTML += `O número ${num} é um inteiro? ` + Number.isInteger(num) + '</br></br>';
document.body.innerHTML += `${num} é um NaN(Not a Number)? ` + Number.isNaN(num) + '</br></br>'; 
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(num)}</br></br>`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(num)}</br></br>`;
document.body.innerHTML += `Com duas casa decimais: ${num.toFixed(2)}`;


//-> Jeito que foi feito no curso
texto.innerHTML += `O seu número é: ${num}</br></br>`;
texto.innerHTML += `A raiz quadrada do numero ${num} é: ${num ** 0.5}</br></br>`;
texto.innerHTML += `O número ${num} é um inteiro? ` + Number.isInteger(num) + '</br></br>';
texto.innerHTML += `${num} é um NaN(Not a Number)? ` + Number.isNaN(num) + '</br></br>';
texto.innerHTML += `Arredondando para cima: ${Math.ceil(num)}</br></br>`;
texto.innerHTML += `Arredondando para baixo: ${Math.floor(num)}</br></br>`;
texto.innerHTML += `Com duas casa decimais: ${num.toFixed(2)}`;