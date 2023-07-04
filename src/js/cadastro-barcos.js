
let divResultado = document.getElementById('resultado')

let vetorObjCadastros = []
function cadastrar() {
    
    let categoriaInput = document.getElementById('inptCategoria').value;
    let fabricacaoInput = document.getElementById("inptFabricante").value;
    let anoInput = document.getElementById("inptAno").value;
    let tamanhoInput = document.getElementById("inpttamanho").value;
    let passageirosInput = document.getElementById("inptpassageiros").value;
    let perNoiteInput = document.getElementById("inptpernoite").value;
    let animaisInput = document.getElementById("inptanimais").value;
    let emailInput = document.getElementById("inptemail").value;
    let senhaInput= document.getElementById("inptSenha").value;
    let banheirosInput = document.getElementById("inptBanheiros").value;
    let cabinesInput = document.getElementById("inptCabines").value;
    let embarqueInput = document.getElementById("inptEmbarque").value;
    let estadoInput = document.getElementById("inptEstado").value;
    let cidadeInput = document.getElementById("inptCidade").value;



 let objCadastro =   {
        Categoria: categoriaInput,
        Fabricacao: fabricacaoInput,
        Ano: anoInput,
        Tamanho: tamanhoInput,
        Passageiros: passageirosInput,
        PerNoite: perNoiteInput,
        Animais: animaisInput.value,
        Email: emailInput.value,
        Senha: senhaInput.value,
        Banheiro: banheirosInput.value,
        Cabines: cabinesInput,
        Embarque: embarqueInput,
        Estado: estadoInput,
        Cidade: cidadeInput
   
    }

  vetorObjCadastros = JSON.parse(localStorage.getItem('VetorObjetos'))

 if (vetorObjCadastros == null) {

    vetorObjCadastros=[]
    vetorObjCadastros.push(objCadastro)
   }  else {
    vetorObjCadastros.push(objCadastro)
    
    console.log(objCadastro)
}
localStorage.setItem('VetorObjetos', JSON.stringify(vetorObjCadastros))
//divResultado.innerHTML=`\n\n ${Object.values(objCadastro)} ` 
alert('Cadastro do barco realizado')
window.location.href="/home.html"
}
