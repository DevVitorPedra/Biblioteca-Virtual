const bookCaseDiv = document.getElementById("book-case");
const bookItens = document.querySelector(".book-item");

let idLivro = localStorage.length;
// função para prencher com os livros existentes
const createBookList = () => {
  //pegando os dados do localStorage
  for (let i = 0; i < localStorage.length; i++) {
    let livro = localStorage.key(i)
    let bookArray = [];

    let book = localStorage.getItem(livro);

    //transfoma a string do localStorage em array
    bookArray = JSON.parse(book);

    //cria a tag de título
    let newTitle = document.createElement("h1");
    let newTitleNode = document.createTextNode(bookArray[0]);
    newTitle.appendChild(newTitleNode);
    newTitle.classList.add("book-title");
    newTitle.setAttribute('name', livro)
    // cria tag subtítulo
    let newSubtitle = document.createElement("p");
    let newSubtitleNode = document.createTextNode(bookArray[1]);
    newSubtitle.appendChild(newSubtitleNode);
    newSubtitle.classList.add("book-subt");
    //cria tag div para receber título e subtítulo
    let newTitlesDiv = document.createElement("div");
    newTitlesDiv.appendChild(newTitle);
    newTitlesDiv.appendChild(newSubtitle);
    //cria a tag de imagem
    let newImg = document.createElement("img");
    newImg.setAttribute("src", bookArray[8]);
    newImg.classList.add("book-img");
    //cria a tag de link para a imagem
    let newUrl = document.createElement("a");
    newUrl.setAttribute("href", bookArray[8]);
    newUrl.setAttribute("target", "_blank");
    newUrl.classList.add("book-img");
    newUrl.appendChild(newImg);
    //cria o botão de deletar
    let xBtn = document.createElement('button')
    xBtn.setAttribute('onClick', 'deleteBook(this)')
    xBtn.innerHTML = '<i class="bi bi-trash-fill"></i>'
    xBtn.classList.add('xBtn')

    //cria a div geral do item e adiciona titulo, subtitulo e img e o botão de deletar
    let divGeral = document.createElement("div");
    divGeral.classList.add("item");
    divGeral.appendChild(xBtn)
    divGeral.appendChild(newUrl);
    divGeral.appendChild(newTitlesDiv);

    //info editora
    let newEditora = document.createElement('p')
    let newEditoraNode = document.createTextNode('Editora: ' + bookArray[2])
    newEditora.appendChild(newEditoraNode)
    //info autor
    let newAutor = document.createElement('p')
    let newAutorNode = document.createTextNode("Autor: " + bookArray[3])
    newAutor.appendChild(newAutorNode)
    //info ano
    let newAno = document.createElement('p')
    let newAnoNode = document.createTextNode('Ano: ' + bookArray[4])
    newAno.appendChild(newAnoNode)
    //info paginas
    let newPagina = document.createElement('p')
    let newPaginaNode = document.createTextNode('Nº páginas: ' + bookArray[5])
    newPagina.appendChild(newPaginaNode)
    //info preço
    let newPreco = document.createElement('p')
    let newPrecoNode = document.createTextNode('Preço:R$ ' + bookArray[6])
    newPreco.appendChild(newPrecoNode)
    // info isbn 
    let newIsbn = document.createElement('p')
    let newIsbnNode = document.createTextNode('ISBN: ' + bookArray[7])
    newIsbn.appendChild(newIsbnNode)
    //info delete 


    //cria a div para as infos ficarem escondidas até o card ser selecionado
    let newDivInfo = document.createElement('div')
    newDivInfo.appendChild(newEditora)
    newDivInfo.appendChild(newAutor)
    newDivInfo.appendChild(newAno)
    newDivInfo.appendChild(newPagina)
    newDivInfo.appendChild(newPreco)
    newDivInfo.appendChild(newIsbn)

    newDivInfo.classList.add('hidden')

    //adiciona o novo item a lista de itens
    divGeral.appendChild(newDivInfo)
    divGeral.setAttribute('onClick', "addInfo(this)")
    divGeral.setAttribute('name', livro)
    bookCaseDiv.appendChild(divGeral);


  }
  //console.log(bookSearch)
};

//função para exibir apenas itens com match na pesquisa
const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", (e) => {
  //armazena a pesquisa
  let searchString = e.target.value.toLowerCase();
  //console.log(searchString)

  //for para ver todos os livros já na DOM
  for (let i = 0; i < localStorage.length; i++) {
    let showTitle = document.getElementsByClassName("book-title");
    //recebe item por item do bookCase
    let str = showTitle[i].innerText.toLowerCase();


    //se der match mantém o item, se não add class 'hidden', que add display'none'
    if (str.match(searchString) != searchString) {

      showTitle[i].parentElement.parentElement.classList.add("hidden");
    }
    //caso não tenha nada no input limpa todos 'hiddens'
    if (searchString == "") {
      showTitle[i].parentElement.parentElement.classList.remove("hidden");
    }
  }
});

//função para selecionar um item e mostrar todas as Infos
const addInfo = (ele) => {

  let hiddenDiv = ele.lastChild
  //pega o ultimo item que é a div de infos e adiciona e remove a class hidden

  hiddenDiv.classList.add('info-margin');
  hiddenDiv.classList.toggle('hidden')
}
//Função para deletar um item
const deleteBook = (ele) => {
  let del = ele.parentElement.getAttribute('name')


  let r = confirm('Gostaria mesmo de deletar este livro?')
  if (r == true) {
    localStorage.removeItem(del)
    ele.parentElement.classList.add('hidden')
  }

}

createBookList();




