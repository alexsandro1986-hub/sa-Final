let nomeMarinheiroinput=document.getElementById("inptNome").value
let numeroisncricaoinput=document.getElementById("inptNumeroInscricao").value
let telefoneinput=document.getElementById("inptTel").value
let opcaoinput=document.getElementById("inptopicao").value
let emailinput=document.getElementById("inptemail").value
let senhainput=document.getElementById("inptemail").value
let confirmaSenhainput=document.getElementById("inptSenhaConfirma").value
let sexoSkiperinput=document.getElementsByClassName("sexo").value
let aniversarioinput=document.getElementById("inptdata").value


let vetorObjCadastros = []
function cadastrar() {
    
 let objCadastro =   {
        NomeMarinheiro: nomeMarinheiroinput,
        Inscricao: numeroisncricaoinput,
        Telefone: telefoneinput,
        opcao: opcaoinput,
        Email: emailinput,
        Senha: senhainput,
        confirmaSenha: confirmaSenhainput,
        sexoskipper: sexoSkiperinput,
        dataAniversario: aniversarioinput,
       
   
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
alert('cadastro do marinheiro realizado')
window.location.href="/home.html"
}

// Seleciona os botões de login e cadastro pelo seu id
var btnSignin = document.querySelector("#signin")
var btnSignup = document.querySelector("#signup")

// Seleciona o elemento body do documento
var body = document.querySelector("body")

// função para troca de tela
btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js"
})

// Função para alternar a visibilidade da senha '' sign up''
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password-input")
    var passwordIcon = document.getElementById("password-icon")
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text"
      passwordIcon.classList.remove("fa-eye-slash")
      passwordIcon.classList.add("fa-eye")
    } else {
      passwordInput.type = "password"
      passwordIcon.classList.remove("fa-eye")
      passwordIcon.classList.add("fa-eye-slash")
    }
  }

  // Função para alternar a visibilidade da senha no botão "Sign in"
  function togglePasswordVisibilitySignIn() {
    const passwordInput = document.getElementById("login-password");
    const passwordIcon = document.getElementById("password-icon-signin");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.remove("fa-eye-slash");
        passwordIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        passwordIcon.classList.remove("fa-eye");
        passwordIcon.classList.add("fa-eye-slash");
    }
}


function togglePasswordVisibility() {
  const passwordInput = document.getElementById("signup-password");
  const passwordIcon = document.getElementById("password-icon");

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordIcon.classList.remove("fa-eye-slash");
      passwordIcon.classList.add("fa-eye");
  } else {
      passwordInput.type = "password";
      passwordIcon.classList.remove("fa-eye");
      passwordIcon.classList.add("fa-eye-slash");
  }
}

function toggleConfirmPasswordVisibility() {
  const confirmPasswordInput = document.getElementById("signup-confirmPassword");
  const confirmPasswordIcon = document.getElementById("confirmPassword-icon");

  if (confirmPasswordInput.type === "password") {
      confirmPasswordInput.type = "text";
      confirmPasswordIcon.classList.remove("fa-eye-slash");
      confirmPasswordIcon.classList.add("fa-eye");
  } else {
      confirmPasswordInput.type = "password";
      confirmPasswordIcon.classList.remove("fa-eye");
      confirmPasswordIcon.classList.add("fa-eye-slash");
  }
}



