const bookCaseDiv = document.getElementById("book-case");
const bookItens = document.querySelector(".book-item");
let bookArray = [];
let bookSearch = [];
let idLivro = localStorage.length;
// função para prencher com os livros existentes
const createBookList = () => {
  //pegando os dados do localStorage
  for (let i = 1; i <= localStorage.length; i++) {
    let book = localStorage.getItem(`livro${i}`);
    console.log(book);
    //transfoma a string do localStorage em array
    bookArray = JSON.parse(book);
    console.log(bookArray);
    // for para criação do itens na lista de livros
    bookSearch.push(bookArray[0], bookArray[3]);
    //cria a tag de título
    let newTitle = document.createElement("h1");
    let newTitleNode = document.createTextNode(bookArray[0]);
    newTitle.appendChild(newTitleNode);
    newTitle.classList.add("book-title");
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

    //cria a div geral do item e adiciona titulo, subtitulo e img
    let divGeral = document.createElement("div");
    divGeral.classList.add("item");
    divGeral.appendChild(newUrl);
    divGeral.appendChild(newTitlesDiv);
    //info editora
    let newEditora = document.createElement('p')
    let newEditoraNode = document.createTextNode('Editora: '+bookArray[2])
    newEditora.appendChild(newEditoraNode)
    //info autor
    let newAutor = document.createElement('p')
    let newAutorNode = document.createTextNode("Autor: "+bookArray[3])
    newAutor.appendChild(newAutorNode)
    //info ano
    let newAno = document.createElement('p')
    let newAnoNode = document.createTextNode('Ano: '+bookArray[4])
    newAno.appendChild(newAnoNode)
    //info paginas
    let newPagina = document.createElement('p')
    let newPaginaNode = document.createTextNode('Nº páginas: '+bookArray[5])
    newPagina.appendChild(newPaginaNode)
    //info preço
    let newPreco = document.createElement('p')
    let newPrecoNode = document.createTextNode('Preço:R$ '+bookArray[6])
    newPreco.appendChild(newPrecoNode)
    // info isbn 
    let newIsbn = document.createElement('p')
    let newIsbnNode = document.createTextNode('ISBN: '+bookArray[7])
    newIsbn.appendChild(newIsbnNode)
    
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
    console.log(typeof str);

    //se der match mantém o item, se não add class 'hidden', que add display'none'
    if (str.match(searchString) != searchString) {
      console.log(showTitle[i].parentElement.parentElement);
      showTitle[i].parentElement.parentElement.classList.add("hidden");
    }
    //caso não tenha nada no input limpa todos 'hiddens'
    if (searchString == "") {
      showTitle[i].parentElement.parentElement.classList.remove("hidden");
    }
  }
});

createBookList();

//função para selecionar um item e mostrar todas as Infos
const addInfo=(ele)=>{
      console.log(ele)
      let hiddenDiv = ele.lastChild
      //pega o ultimo item que é a div de infos e adiciona e remove a class hidden
      console.log(hiddenDiv)
     hiddenDiv.classList.add('info-margin');
      hiddenDiv.classList.toggle('hidden')
}

