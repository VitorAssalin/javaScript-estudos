
let umaString = "Um \"texto\"";
console.log(umaString);

//                 01234567
let outraString = "Um texto";
let umTexto = "O rato roeu a roupa do rei de roma";
console.log(outraString.charAt(4));
console.log(outraString[4]);
console.log(umTexto.concat(' contatenado'));
console.log(outraString.indexOf("texto"));
console.log(outraString.lastIndexOf("m", 3));
console.log(outraString.match(/[a-z]/g))
console.log(outraString.search(/x/));
console.log(outraString.replace('texto', 'outro texto'));
console.log(umTexto.replace(/r/g, '#'));
console.log(umTexto.length);
console.log(umTexto.slice(2 , 6));
console.log(umTexto.slice(-4));
console.log(umTexto.substring(umTexto.length -4));
console.log(umTexto.split(" ", 2));
console.log(outraString.toUpperCase());
console.log(outraString.toLowerCase());










