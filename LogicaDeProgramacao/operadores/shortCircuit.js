/*
Estruturasa Lógicas Utilizando Curto Circuito

&& -> false && true -> sempre retorna o false "o valor mesmo"
|| -> true || false -> vai retorna o "valor verdadeiro"

FALSY (false values ->  retornam valores de false)
false
0
' ' " " ` ` (Strings vazias)
null / undefined
NaN

*/
//-----------------------------------------------------------------------------------------------------------------------------------------

// && -> false && true -> sempre retorna o false "o valor mesmo"
console.log(`Vitor` && `Maria`);// -> True então retorna o ultimo valor "Maria"

//As expressões a baixo irão sempre retornar o valor FALSE - Pois é assim que funciona o operador AND(&&)
console.log(`Vitor` && 0 && `Maria`);//Retorna o 0 ->  o valor false
console.log(`Vitor` && `` && `Maria`)//Retorna `` -> o valor false
console.log(`Vitor` && undefined && `Maria`);//Retorna undefined 
console.log(`Vitor` && NaN && `Maria`);//Retorna NaN

//Utilizando o a Avaliação de Curto Circuito
function falaOi(){
    return 'Oi';
}

//Nao executa a funcao de forma rapida com o curto circuito usando o AND(&&)
let vaiExecutar = false;
console.log(vaiExecutar && falaOi());
//Executa pois utilizando o AND(&&) nao retorna um valor FALSE e executa a funcao
vaiExecutar = 'Agora Retorna o Valor da Funcao'
console.log(vaiExecutar && falaOi());

//-----------------------------------------------------------------------------------------------------------------------------------------

// || -> true || false -> vai retorna o "valor verdadeiro"
console.log(0 || false || null || undefined || '' || NaN || "Vitor Assalin" )// Vai retornar sempre o valor "true"

//Utilizando o a Avaliação de Curto Circuito
let corUser = null;
let corPadrao = corUser || 'preto';//Gera uma condição simplificada sinalizando que se o User n escolher a cor, utiliza a padrão 'preto'
console.log(corPadrao)

corUser = 'vermelho';
corPadrao = corUser || 'preto'//Agora como foi selecionado um cor ele retorna o valor 
console.log(corPadrao);

let a = 0;
let b = null;
let c = 'false';//Retorna esse pois ele possui um valor TRUE e apenas a escrita eh 'FALSE'
let d = false;
let e = NaN;

console.log(a || b || c || d || e);

a = 0;
b = null;
c = false;
d = false;
e = NaN;// -> Esse

console.log(a || b || c || d || e);// Nesse caso ira retornar o valor da ultima variável False
