/*
Estruturas Condicionais (if, else if, else)

if      -> Verifica a primeira condição (se for verdadeira, executa o bloco e ignora o resto)
else if -> Verifica uma nova condição caso a anterior seja falsa (pode haver vários)
else    -> Executado apenas se TODAS as condições anteriores forem falsas (não recebe condição)

OBS: O JavaScript executa apenas o PRIMEIRO bloco que retornar verdadeiro e sai da estrutura.

If pode ser usado sonzinho 
Sempre que utilizado a palavra else. precisa ter um if antes
É possível ter vários else ifs na checagem
Apenas pode ter um else na checagem
*/

//-----------------------------------------------------------------------------------------------------------------------------------------

const hora = 15; // Variável que armazena o horário a ser testado

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia'); // Não executa, pois 15 não está entre 0 e 11

} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde'); // -> Executa este bloco ('Boa tarde') e encerra a verificação aqui

} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');

// Funciona como um "valor padrão" caso o número seja menor que 0 ou maior que 23
} else {
    console.log('Informe um horário válido');
}