# Operadores em JavaScript

Anotações rápidas para consulta sobre comparação, lógica e curto-circuito.

## 1. Operadores de Comparação
Sempre retornam um booleano (`true` ou `false`).

* `>` / `>=`: Maior que / Maior ou igual
* `<` / `<=`: Menor que / Menor ou igual
* `===`: **Igualdade estrita** — compara valor **e** tipo *(use sempre este)*
* `!==`: **Diferente estrito** — compara valor **e** tipo *(use sempre este)*
* `==` / `!=`: Compara apenas o valor, ignorando o tipo *(evite usar)*

---

## 2. Operadores Lógicos
Usados para combinar ou inverter condições.

* `&&` (**AND / E**): Só retorna `true` se **todas** as condições forem verdadeiras.
* `||` (**OR / OU**): Retorna `true` se **pelo menos uma** condição for verdadeira.
* `!` (**NOT / NÃO**): **Inverte** o resultado (`!true` vira `false`).

---

## 3. Avaliação de Curto-Circuito
Em JS, `&&` e `||` retornam o **valor real** onde a checagem parou, não apenas `true` ou `false`.

* **Valores *Falsy* (considerados falsos):** `false`, `0`, `''` (string vazia), `null`, `undefined` e `NaN`. Todo o resto é *Truthy*.
* **Com `&&`:** Para e retorna o **primeiro valor *falsy*** que encontrar (ou o último valor, se todos forem verdadeiros). *Útil para executar algo só se uma condição for verdadeira.*
* **Com `||`:** Para e retorna o **primeiro valor *truthy*** que encontrar (ou o último *falsy*, se todos forem falsos). *Útil para definir valores padrão (fallback).*