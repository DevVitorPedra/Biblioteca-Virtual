const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const editora = document.getElementById("editora");
const autor = document.getElementById("autor");
const ano = document.getElementById("ano");
const paginas = document.getElementById("paginas");
const preco = document.getElementById("preco");
const isbn = document.getElementById("isbn");
const url = document.getElementById("url");
const btnAcervo = document.getElementById("btn-acervo");
const mainDiv = document.getElementById("main-div");
const mainDiv2 = document.getElementById("main-div2");
const tituloShow = document.getElementById("titulo-show");
const subtituloShow = document.getElementById("subtitulo-show");
const editoraShow = document.getElementById("editora-show");
const autorShow = document.getElementById("autor-show");
const anoShow = document.getElementById("ano-show");
const paginasShow = document.getElementById("paginas-show");
const precoShow = document.getElementById("preco-show");
const isbnShow = document.getElementById("isbn-show");
const urlShow = document.getElementById("url-show");
const showBooks = document.getElementById("show-books");
const btnBack = document.getElementById("btn-back");
const btnCad = document.getElementById("btn-cad");

let bookArray = [];
let idLivro = localStorage.length;
const cadastrar = () => {
  if (
    //verifica se tem algum campo vazio e se tiver exibi o alerta
    !titulo.value ||
    !subtitulo.value ||
    !editora.value ||
    !autor.value ||
    !ano.value ||
    !paginas.value ||
    !preco.value ||
    !isbn.value ||
    !url.value
  ) {
    alert("Todos os campos devem ser preenchidos!");
  } else {
    // faz todos os inputs virarem um array
    bookArray.push(
      titulo.value,
      subtitulo.value,
      editora.value,
      autor.value,
      ano.value,
      paginas.value,
      preco.value,
      isbn.value,
      url.value
    );
    
   
    //faz o array de inputs virar string
    bookString = JSON.stringify(bookArray);
    //inseri a string no localStorage
    localStorage.setItem(`livro${idLivro + 1}`, bookString);
    // add 1 ao contador de ids
    idLivro++;
    // limpa array e inputs
    bookArray = [];
    titulo.value = "";
    subtitulo.value = "";
    editora.value = "";
    autor.value = "";
    ano.value = "";
    paginas.value = "";
    preco.value = "";
    isbn.value = "";
    url.value = "";
    alert("O livro foi cadastrado com sucesso!");
  }
};
btnCad.addEventListener("click", cadastrar);

