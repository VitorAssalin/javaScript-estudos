# Estruturas Condicionais (`if`, `else if`, `else`)

Como controlar o fluxo de decisão no código.

## O que cada bloco faz
* **`if`:** Verifica a primeira condição. Se for verdadeira, executa o bloco e ignora o restante.
* **`else if`:** Verifica uma nova condição caso a anterior seja falsa.
* **`else`:** Funciona como um valor padrão. Executa apenas se **todas** as condições anteriores forem falsas *(não recebe condição)*.

## Regras essenciais
* **Executa apenas o primeiro verdadeiro:** Assim que o JavaScript encontra uma condição verdadeira (`true`), ele executa aquele bloco e **sai da estrutura** sem testar o resto.
* **`if` sozinho:** Pode ser usado de forma independente, sem precisar de `else` ou `else if`.
* **Dependência do `if`:** Sempre que usar `else` ou `else if`, é obrigatório existir um `if` antes.
* **Quantidade:** Você pode colocar **vários `else if`** na mesma checagem, mas apenas **um único `else`** no final.