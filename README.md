# 🎨 Troca Cor Dinâmico

Um projeto interativo desenvolvido em HTML, CSS e JavaScript que permite alterar a cor de fundo da página. O diferencial é o suporte a nomes de cores em **português**, além de padrões internacionais.

---

## 🚀 Como funciona?

O navegador reconhece nativamente apenas nomes de cores em inglês. Para contornar isso, este projeto utiliza um **objeto de mapeamento** (dicionário) no JavaScript que traduz os termos em português para valores que o CSS compreende.

### Destaques da Lógica:
* **Normalização:** O texto é convertido para minúsculas (`toLowerCase`) e espaços extras são removidos (`trim`), evitando erros de digitação.
* **Fallback Inteligente:** Caso a cor não exista no dicionário de português, o sistema tenta aplicar o valor original. Isso permite usar códigos **Hexadecimais**, **RGB** ou nomes em **Inglês**.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5**: Estrutura e semântica.
* **CSS3**: Layout com Flexbox e Variáveis CSS.
* **JavaScript (ES6+)**: Manipulação do DOM e lógica de tradução.

---

## 📂 Estrutura de Arquivos

* `index.html`: Contém o input e o botão de ação.
* `style.css`: Define o layout centralizado e as cores padrão.
* `main.js`: Gerencia o evento de clique e a lógica das cores.

---

## 💡 Possíveis Melhorias (Roadmap)

Para tornar o projeto ainda mais robusto, as seguintes funcionalidades podem ser implementadas no futuro:

- [ ] **Seleção Nativa:** Adicionar um `<input type="color">` para escolha visual.
- [ ] **Autocomplete:** Implementar uma `<datalist>` para sugerir as cores disponíveis enquanto o usuário digita.
- [ ] **Troca em Tempo Real:** Alterar a cor automaticamente ao digitar, sem precisar clicar no botão (evento `input`).
- [ ] **Persistência de Dados:** Salvar a cor escolhida no `localStorage` para que ela permaneça ao atualizar a página.
- [ ] **Feedback de Erro:** Exibir uma mensagem caso a cor digitada seja inválida.

---
## Autora

[Daniele Silva Santos](https://www.linkedin.com/in/danielesilvasantos/)

