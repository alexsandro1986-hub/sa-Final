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




// VERIFICAÇÃO DE CADASTRO E LOGIN
let nomeCadastro = document.getElementById("signup-username")
let emailCadastro = document.getElementById("signup-email")
let senhaCadastro = document.getElementById("signup-password")
let confirmarSenhaCadastro = document.getElementById("signup-confirmPassword")
let vetorUsers = []
let userLogado = " "



function registrar() {
  let usuario = {

    username: '',
    password: '',
    email: ''


  }
  usuario.username = nomeCadastro.value
  usuario.password = senhaCadastro.value
  usuario.email = emailCadastro.value



  if (nomeCadastro.value != "" &&  emailCadastro.value != "" && senhaCadastro.value != "" && confirmarSenhaCadastro.value != "") {
    if(senhaCadastro.value == confirmarSenhaCadastro.value ){
    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

          if (vetorUsers == null) {
    
            vetorUsers = []
    
            vetorUsers.push(usuario)
            localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
            alert("Cadastro realizado!")
    
          } else {
    
            vetorUsers.push(usuario)
            localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
            alert("Cadastro realizado!")
    
          }
    }else{
      alert("Senhas diferentes")
    }

        } else {
          
     alert("ERRO")
       
    
    }
  

  }



let nomeLogin = document.getElementById("login-username")
let senhaLogin = document.getElementById("login-password")
let loginConcluido = document.getElementById("login-completo")

function logar() {

  vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

  for (i = 0; i < vetorUsers.length; i++) {

    if (nomeLogin.value == vetorUsers[i].username && senhaLogin.value == vetorUsers[i].password) {

      userLogado = nomeLogin.value
      localStorage.setItem('userLogado', JSON.stringify(userLogado))

      //loginConcluido.innerHTML = "Login concluido"
      alert("Login concluido" + userLogado)
      let divUsername = document.getElementById("username-atual")
      divUsername.innerHTML = `${userLogado}`
      let vdd = "sim"
      localStorage.setItem("Logado", JSON.stringify (vdd))
      // document.getElementById("containerPopup").style.display = "none"

      // window.location.href = "www.google.com"

    }

  }

}

let editarNomeCadastro = document.getElementById("edit-username")
let editarEmailCadastro = document.getElementById("edit-email")
let editarSenhaCadastro = document.getElementById("edit-password")
let editarConfirmaSenhaCadastro = document.getElementById("edit-confirmPassword")

function editar(){




}

