# 🚀 JavaScript - Conceitos Básicos

Este repositório reúne todas as minhas anotações, exercícios e práticas desenvolvidas durante a **seção de Conceitos Básicos de JavaScript**. 

🎯 **Objetivo:** Servir como um guia de consulta rápida e visual, organizando a evolução do aprendizado desde os primeiros comandos no console até a criação de uma aplicação web interativa completa.

---

## 🗺️ Mapa de Navegação Rápida

| Pasta | Assunto Principal | Arquivos |
| :--- | :--- | :--- |
| 📁 **`introducao/`** | Variáveis, constantes, console e lógica inicial | `consoleLog.js`, `constantes.js`, `variaveis.js`, `var_e_let.js`, `exercicioVariaveis.js`, `imc.js` |
| 🌐 **`navegador/`** | Conexão entre HTML e JavaScript no browser | `index.html`, `index.js` |
| 🔤 **`strings/`** | Manipulação de textos e índices | `strings.js`, `perguntas_strings.html` |
| 🔢 **`numbers/`** | Operadores matemáticos e objeto `Math` | `operadores.js`, `numbers.js`, `numeros.js`, `ObjetoMath.js`, `ExNum.html` |
| 📋 **`arrays/`** | Listas ordenadas e métodos de manipulação | `arrayConceitos.js` |
| ⚙️ **`funções/`** | Blocos reutilizáveis, anônimas e *Arrow Functions* | `introduçao.js` |
| 📦 **`objetos/`** | Agrupamento de dados em chave e valor | `basico.js` |
| 🧠 **`valores/`** | Cópia por valor (primitivos) vs. referência na memória | `primitivos.js`, `referencia.js` |
| 🏆 **`Projeto/`** | **Conclusão da seção:** Cadastro de Pessoas | `index.html`, `src/script.js` |

---

## 📚 Conteúdo Detalhado (`ConceitosBasicos/`)

### 1. 🚀 Introdução e Primeiros Passos (`introducao/`)
Base da linguagem, regras de escrita e primeiros exercícios de lógica.

* **🖥️ Exibição de dados (`consoleLog.js`):** Como mostrar textos (usando aspas simples `' '`, duplas `" "` ou crases `` ` ` ``) e números (inteiros e decimais) no console.
* **📌 Constantes e Variáveis (`constantes.js`, `variaveis.js`):**
  * **Regras de ouro:** Usar *camelCase* (`primeiroNumero`), nunca começar com números, não usar espaços e evitar palavras reservadas.
  * **`const` vs `let`:** Use `const` por padrão (valor fixo/imutável) e `let` apenas quando o valor precisar mudar.
* **⚠️ Diferença entre `var` e `let` (`var_e_let.js`):** O `var` permite redeclarar uma mesma variável (o que gera bugs silenciosos), enquanto o `let` bloqueia a redeclaração, garantindo segurança no código.
* **🧩 Exercícios de Lógica (`exercicioVariaveis.js`, `imc.js`):**
  * *Troca de valores:* Inversão de valores entre `A`, `B` e `C` usando variável temporária ou desestruturação moderna: `[varA, varB, varC] = [varB, varC, varA]`.
  * *Cálculo de IMC:* Uso de operadores aritméticos para calcular o IMC e o ano de nascimento, exibindo tudo formatado com *Template Strings* (`` `Texto ${variavel}` ``).

---

### 2. 🌐 JavaScript no Navegador (`navegador/`)
* **Integração (`index.html`, `index.js`):** Como importar um arquivo `.js` externo dentro do HTML usando a tag `<script src="..."></script>` e rodar códigos diretamente no navegador.

---

### 3. 🔤 Manipulação de Textos (`strings/`)
* **Strings (`strings.js`, `perguntas_strings.html`):** Textos funcionam como sequências indexadas (cada caractere ocupa uma posição a partir do `0`). Exercícios práticos manipulando palavras e exibindo respostas direto na página.

---

### 4. 🔢 Números e Matemática (`numbers/`)
* **Cálculos e Operadores (`operadores.js`, `numbers.js`, `numeros.js`):** Operações matemáticas básicas (`+`, `-`, `*`, `/`, `**`), controle de casas decimais e conversão de tipos.
* **Objeto `Math` (`ObjetoMath.js`, `ExNum.html`):** Uso de funções matemáticas nativas (`Math.floor()`, `Math.ceil()`, `Math.round()`, `Math.random()`) aplicadas em um exercício interativo no HTML.

---

### 5. 📋 Listas e Coleções (`arrays/arrayConceitos.js`)
Arrays guardam vários dados em uma única lista ordenada por índices (começando sempre do **`0`**).

| Ação | Método / Sintaxe | O que faz |
| :--- | :--- | :--- |
| **Acessar / Editar** | `alunos[0] = 'Novo'` | Lê ou altera o item da posição escolhida. |
| **Tamanho** | `alunos.length` | Retorna a quantidade total de elementos. |
| **Add no fim** | `alunos.push('Item')` | Adiciona um novo elemento no final da lista. |
| **Add no início** | `alunos.unshift('Item')` | Adiciona na posição `0` e empurra os outros. |
| **Remover do fim** | `alunos.pop()` | Remove (e retorna) o último elemento. |
| **Remover do início** | `alunos.shift()` | Remove (e retorna) o primeiro elemento. |
| **Limpar posição** | `delete alunos[1]` | Apaga o valor, mas mantém o espaço vazio (`empty`). |
| **Fatiar lista** | `alunos.slice(0, -2)` | Recorta uma parte específica do array. |
| **Validar tipo** | `alunos instanceof Array` | Verifica se o dado é realmente um array (`true`/`false`). |

---

### 6. ⚙️ Blocos de Código Reutilizáveis (`funções/introduçao.js`)
Rotinas que recebem dados (**parâmetros**), executam uma lógica e devolvem um resultado com `return`.

> 💡 **Lembre-se:** A execução da função encerra imediatamente na linha do `return`.

```javascript
// 1. Função Clássica
function soma(x, y) {
    return x + y;
}

// 2. Função Anônima (atribuída a uma variável)
const raiz = function (n) {
    return n ** 0.5;
};

// 3. Arrow Function (sintaxe moderna e enxuta)
const raizArrow = n => n ** 0.5;