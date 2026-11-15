/*
Operadores Lógicos
&& -> And = E -> Todas as expressoes precisam ser verdadeiras para retornar "true"
|| -> Or = Ou -> Se tem apenas um "true" a expressao inteira fica verdadeira
! -> Not = Náo -> Inverte uma expressao
*/

//-----------------------------------------------------------------------------------------------------------------------------------------

// && -> And = E -> Todas as expressoes precisam ser verdadeiras para retornar "true"
const expressaoAnd = true && true && true && true;
console.log(`And(&&) -> ${expressaoAnd}`);// -> True, todas são verdadeiras
const expressaoAnd2 = true && true && false && true;
console.log(`And(&&) -> ${expressaoAnd2}`);// -> False, um false torna a expressao inteira false

//Exemplo Basico de Usuario (AND - &&)
const user = 'Vitor';
const senha = '123456';
//                         True                  True
const vaiLogar = user === 'Vitor' && senha === '123456'; 
console.log(`And(&&) -> |Usuario logado = True, Nao logado = false| -> ${vaiLogar}`);
//                          True                 False
const vaiLogar2 = user === 'Vitor' && senha === '12345'; 
console.log(`And(&&) -> |Usuario logado = True, Nao logado = false| -> ${vaiLogar2}\n`);

//-----------------------------------------------------------------------------------------------------------------------------------------

// || -> Or = Ou -> Se tem apenas um "true" a expressao inteira fica verdadeira
const expressaoOr = true || false || false|| false; 
console.log(`Or(||) -> ${expressaoOr}`);// -> True, retorna verdadeiro sempre que um valor for True
const expressaOrFalse = false || false || false;
console.log(`Or(||) -> ${expressaOrFalse}`);// -> False, retorna falso apenas quando a operacao inteira for false

//Exemplo Basico de Usuario (Or - ||)
const user2 = 'Vitor';
const senha2 = '123456';
//                         True                  True
const vaiLogar3 = user === 'Vitor' || senha === '123456'; 
console.log(`Or(||) -> |Usuario logado = True, Nao logado = false| -> ${vaiLogar3}`);
//                          True                 False
const vaiLogar4 = user === 'Vitor' || senha === '12345'; 
console.log(`Or(||) -> |Usuario logado = True, Nao logado = false| -> ${vaiLogar4}\n`);// -> Retorna True mesmo a senha estando incorreta

//-----------------------------------------------------------------------------------------------------------------------------------------

// ! -> Not = Náo -> Inverte uma expressao
console.log(`Not(!) -> ${!true}`);// -> Nega o "true", buscando o "false"
console.log(`Not(!) -> ${!false}`);// -> Nega o "false", buscando o "true"



