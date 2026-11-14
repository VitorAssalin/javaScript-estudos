function escopoForm () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

/*     form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);                             --> Outra forma de criar a função
        console.log('Foi enviado.')
    }; */

    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const idade = form.querySelector('.idade');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
            idade: idade.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>
        Nome completo: ${nome.value} ${sobrenome.value}<br>` + 
        `Peso: ${peso.value}<br>` + 
        `Altura: ${altura.value}<br>` +
        `Idade: ${idade.value}
        </p>`
    }


    form.addEventListener('submit', recebeEventoForm);
}
escopoForm();