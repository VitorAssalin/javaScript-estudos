function saudacao (nome){
    return (`Bom dia ${nome}`);
}

const variavel = saudacao('Vitor');
console.log(variavel)


function soma(x , y){
    const result = x + y;
    return (`A soma de ${x} + ${y} é: ${result}`);//A função acaba no return
}

console.log(soma(5,5));
console.log(soma(2,3));
console.log(soma(8,6));

//Função anonima, dentro de uma variável
const raiz = function (n) {
    return (`A raiz quadrada de ${n} eh: ${n ** 0.5}`);
};

console.log(raiz(9))


//Arrow function -> Simplifica
const raizArrow = n => (`A raiz quadrada de ${n} eh: ${n ** 0.5}`);;
console.log(raizArrow(16))