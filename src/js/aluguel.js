

document.addEventListener("click", clicou)


function clicou(e) {
    console.log(e.composedPath())
    console.log(e.composedPath()[0].id)

    for (let i = 0; i < e.composedPath().length; i++) {
        //    Selecionando o array do anchor tag (<a>)
        if (e.composedPath()[i].nodeName == "A") {
            console.log("Página alguel algum icon foi clicado")
            // Pegando o nome do barco, o texto interno do <a>
            let nomeIcon = (e.composedPath()[i].innerText)
            console.log(nomeIcon)
            //Usando switch para mudar o display do icone clicado, ou seja fazer aparecer o iframe do barco selecionado
           
            localStorage.setItem("IconClicadoAluguel", nomeIcon)
              
        }

    }
   
   
}

 let imgPequenas = document.getElementById("img_pequenas")

imgPequenas.addEventListener("click", imagem)

function imagem(evento){
    
    console.log(evento.composedPath()[0].id)
    document.getElementById("imgRadio1").style.display = "none"
    document.getElementById("imgRadio2").style.display = "none"
    document.getElementById("imgRadio3").style.display = "none"
    document.getElementById("imgRadio4").style.display = "none"
    document.getElementById("imgRadio5").style.display = "none"

    for (let i = 0; i < evento.composedPath().length; i++) {
        //    Selecionando o array do anchor tag (<a>)

        if (evento.composedPath()[i].nodeName == "INPUT") {
            console.log("aaaaaaa")

            // Pegando o nome do barco, o texto interno do <a>
            let nomeId = (evento.composedPath()[i].id)
            console.log(nomeId)
            
            //Usando switch para mudar o display do icone clicado, ou seja fazer aparecer o iframe do barco selecionado
            switch (nomeId) {
                case "radio1":
                    console.log("Mudar para Radio 1")
                    document.getElementById("imgRadio1").style.display ="block"
                       
                    break;
                case "radio2":
                    console.log("Mudar para Radio 2")
                    document.getElementById("imgRadio2").style.display ="block"
                    break;
                case "radio3":
                    console.log("Mudar para Radio 3")
                    document.getElementById("imgRadio3").style.display ="block"
                    break;
                case "radio4":
                    console.log("Mudar para Radio 4")
                    document.getElementById("imgRadio4").style.display ="block"
                    break;
                case "radio5":
                    console.log("Mudar para Radio 5")
                    document.getElementById("imgRadio5").style.display ="block"
                    break;

            }
        }

    }
}





//>>>>>>>>>>>>>> contador de likes e dislikes <<<<<<<<<<<<<<<<<<<<<<<<<<<<


let contadorLikes = 123
let contadorDislikes = 9

document.getElementById('contador_likes').innerHTML = contadorLikes
document.getElementById('contador_dislikes').innerHTML = contadorDislikes

function Likes(){
    
    contadorLikes++
    document.getElementById('contador_likes').innerHTML = contadorLikes
}

function Dislike(){
    contadorDislikes++
    document.getElementById('contador_dislikes').innerHTML = contadorDislikes
}

console.log(localStorage.getItem("Logado"))

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// valores <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    function Valores(){
        let diaria = 800
let combustivel = 250
let taxaServico = 50



 
    let calcDiaria = diaria*Number(dias.value)
    let calcCombustivel = combustivel*Number(dias.value)
    
    document.getElementById("spanDias").innerHTML = `${dias.value}`
    document.getElementById("span_totalDiarias").innerHTML = `R$${calcDiaria}`
    
    document.getElementById("spanCombustivel").innerHTML = `${dias.value}`
    document.getElementById("span_totalCombustivel").innerHTML = `R$${calcCombustivel}`
    
    let calcTotal = calcDiaria+calcCombustivel+taxaServico
    
    document.getElementById("valorTotal").innerHTML = `${calcTotal}`   
    
    }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//>>>>>>>>>>>>>>>>>> VERIFICACAO LOGIN <<<<<<<<<<<<<<<<<<<<<<

let verificarLogin 
let dias = document.getElementById('slct_dias')

dias.addEventListener("load", Alugar)

function Alugar(){


    verificarLogin = JSON.parse(localStorage.getItem('userLogado'))
    console.log(` Verificando o login ${verificarLogin}`)
    
    if (verificarLogin == null ){
        
    document.getElementById("containerPopup").style.display = "block"
    } else { 
        
    }
   
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
