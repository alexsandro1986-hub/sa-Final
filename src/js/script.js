
let container_banner = document.getElementById('container-banner')
let container_popup = document.getElementById("containerPopup")
let container_popup_editar = document.getElementById("containerPopupEditar")


//---------- #POPUP#--------
document.addEventListener("click", clicouMenu)

function clicouMenu(e) {
    console.log(e.composedPath())
    console.log(e.composedPath()[0].id)
    console.log(e.target)
    console.log(e.target.id)

    //Condição para sair do popup
    if (e.target.id == "containerPopup") {
        var flagLogin = 'none'
    }
    if (e.target.id == "containerPopupEditar") {
        var flagEditar = 'none'
    }

    // Condição para abrir popup
    for (let i = 0; i < e.composedPath().length; i++) {

        if (e.composedPath()[i].nodeName == 'A') {
            let opcaoMenu = e.composedPath()[i].innerText
            switch (opcaoMenu) {
                case "Entrar | Cadastrar":
                    flagLogin = 'flex';
                    break;
                case "Editar perfil":
                    flagEditar = 'flex';;
                    break;
                }

        }

    }
    container_popup.style.display = flagLogin
    container_popup_editar.style.display = flagEditar

}


//--------------#FIM POPUP#--------------
// ------------- CONTAINER--------------
    // ====================== NÃO ESTÁ SENDO USADO
// addEventListener("load", voltouDoAluguel)
// function voltouDoAluguel() {
//     let icon_Alugel = localStorage.getItem("IconClicadoAluguel")
//     console.log(icon_Alugel)
//     mudarDisplay(icon_Alugel)
// }

// let icons = document.getElementById("icons")
// icons.addEventListener("click", iconsClick)

// function iconsClick(evento) {

//     for (let i = 0; i < evento.composedPath().length; i++) {
//         //    Selecionando o array do anchor tag (<a>)
//         if (evento.composedPath()[i].nodeName == "A") {
//             console.log("aaaaaaa")
//             // Pegando o nome do barco, o texto interno do <a>
//             let nomeIcon = (evento.composedPath()[i].innerText)
//             console.log(nomeIcon)
//             //Usando switch para mudar o display do icone clicado, ou seja fazer aparecer o iframe do barco selecionado
//             mudarDisplay(nomeIcon)
//         }

//     }
// }

// function mudarDisplay(IconClicado) {
//     container_banner.style.display = 'none'
//     container_skipper.style.display = 'none'
//     container_jet.style.display = "none"
//     container_iate.style.display = "none"
//     container_lancha.style.display = "none"
//     container_veleiro.style.display = "none"

//     switch (IconClicado) {
//         case "Jet ski":
//             console.log("Mudar display do Jet Ski")
//             container_jet.style.display = "block"
//             break;
//         case "Iates":
//             console.log("Mudar display do Iate")
//             container_iate.style.display = "block"
//             break;
//         case "Lanchas":
//             console.log("Mudar display do Lanchas")
//             container_lancha.style.display = "block"
//             break;
//         case "Veleiros":
//             console.log("Mudar display do Veleiros")
//             container_veleiro.style.display = "block"
//             break;
//     }
//     localStorage.removeItem("IconClicadoAluguel")
// }
// -------------------#FIM IFRAMES#----------------
// ------------------- PESQUISA--------------

// let destinos = ["ILHA DO FRANCÊS",
//     "ILHA DO CAMPECHE",
//     "ILHA DO RATONES",
//     "JURERÊ",
//     "CANASVIEIRAS",
//     "LAGOA DA CONCEICAO",
//     "TINGUA",
//     "BAIA DOS GOLFINHOS"]

// let pesquisa = document.getElementById("pesquisa")
// pesquisa.addEventListener('keydown', procurar)

// function procurar() {

//     a = (pesquisa.value).toUpperCase()

//     for (i = 0; i < destinos.length; i++) {
//         console.log(a)
//         if (destinos[i].substring(0, a.length) == a) {
//             console.log(destinos[i])

//         }

//     }

// }


var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
// Aplica a todas as apresentações de slides que você define com o HTML escrito
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Obter um array de slides

  var index = 0, time = 5000;
  slides[index].classList.add('active');  
  
  setInterval( () => {
    slides[index].classList.remove('active');
    
    //Passar por cada slide, incrementando o índice
    index++;
    
    // Ao passar por todos os slides, reiniciar o índice para exibir o primeiro slide e iniciar novamente
    if (index === slides.length) index = 0; 
    
    slides[index].classList.add('active');

  }, time);
}