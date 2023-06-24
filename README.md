# robotron-2000

Para saber mais Módulo 1 -

Métodos para selecionar elementos no HTML

document.getElementByID(id) - Recupera um elemento pelo ID.
document.getElementsByTagName(name) - Recupera um elemento pelo nome.
document.getElementsByClassName(name) - Recupera um elemento pelo nome da classe.
Propriedades e métodos para alterar elementos no HTML

element.innerHTML - Esta propriedade obtém ou altera qualquer elemento no HTML, inclusive tags.
element.innerText - Esta propriedade permite inserir textos no HTML.
element.value - Esta propriedade altera o valor de um elemento HTML
element.setAttribute(atributo, valor) - Este método altera o valor de um atributo de um elemento HTML.
Adicionando e excluindo elementos

document.write() - Escreve no fluxo de saída do HTML.
document.appendChild() - Adiciona um elemento HTML.
document.removeChild() - Remove um elemento HTML.
document.replaceChild() - Substitui um elemento HTML.
document.createElement() - Cria um elemento HTML.

---

Para Saber mais Módulo 4

Data-attributes são utilizados para guardar valores em elementos HTML. Esses valores podem ser manipulados através do JavaScript. Também é possível estilizar elementos HTML com CSS referenciando o seu data-attribute. Essa funcionalidade é bem recente no mundo do desenvolvimento, sendo lançada na última versão do HTML(HTML5).

Data-attributes não devem ser utilizados para dados visíveis, pois tecnologias de acessibilidade podem não identificar seus valores.

Sua estrutura é dividida em duas partes:

A primeira parte é o identificador deste dado, que consiste em data- + o nome de sua escolha que melhor identifica o tipo de dado a ser atribuído.
A segunda parte é o valor atribuído à este data-attribute, este valor deve sempre estar entre aspas “”, e dessa maneira é lido como uma string.
Segue exemplo abaixo:

HTML

  <h1>Lista de tintas:</h1>
  <ul id="lista">
    <li data-cor="laranja" data-tipo="tinta-exterior" onclick="mudaCores(this)" class="item">Tinta laranja</li>
    <li data-cor="vermelho" data-tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta vermelha</li>
    <li data-cor="branco" data-tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta branca</li>
    <li data-cor="amarelo" data-tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta amarelo</li>
    <li data-cor="rosa" data-tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta rosa</li>
  </ul>

No JavaScript, podemos criar uma função que recebe esses atributos, permitindo manipulá-los:

JS

function mudaCores(elementos){
var cores = elementos.getAttribute("[data-cor]");
var tipoElemento = elementos.getAttribute("[data-tipo]");
}

O prefixo data- não é obrigatório para definir um data-attribute personalizado, podemos alterar o código para a seguinte forma:

HTML:

  <h1>Lista de tintas:</h1>
  <ul id="lista">
    <li cor="laranja" tipo="tinta-exterior" onclick="mudaCores(this)" class="item">Tinta laranja</li>
    <li cor="vermelho" tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta vermelha</li>
    <li cor="branco" tipo="tinta-interior"  onclick="mudaCores(this)" class="item">Tinta branca</li>
    <li cor="amarelo" tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta amarelo</li>
    <li cor="rosa" tipo="tinta-exterior"  onclick="mudaCores(this)" class="item">Tinta rosa</li>
  </ul>

JS

function mudaCores(elementos){
var cores = elementos.getAttribute("[cor]");
var tipoElemento = elementos.getAttribute("[tipo]");
}
