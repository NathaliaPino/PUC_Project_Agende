

let userlabel = document.querySelector ('#userlabel')
let usuario = document.querySelector ('#usuario')
validemail=false
clientemail=false
otheremail=false
workemail=false

let labelsenha = document.querySelector ('#senhalabel')
let senha = document.querySelector ('#senha')
validsenha=false



usuario.addEventListener ('keyup', () =>{
    if (usuario.value.length <=5) {
        userlabel.setAttribute ('style', 'color: red')
        userlabel.innerHTML = 'E-mail *'
        validemail =false


    }
    else if (usuario.value == "prestador@email.com") {
        userlabel.setAttribute ('style', 'color: green')
        userlabel.innerHTML = 'E-mail'
        validemail =true
        workemail =true
    }
    else if (usuario.value == "cliente@email.com") {
        userlabel.setAttribute ('style', 'color: green')
        userlabel.innerHTML = 'E-mail'
        validemail =true
        clientemail =true
    }
    else {
        userlabel.setAttribute ('style', 'color: green')
        userlabel.innerHTML = 'E-mail'
        validemail =false
        
    }
})




senha.addEventListener ('keyup', () =>{
    if (senha.value.length <=5) {
        labelsenha.setAttribute ('style', 'color: red')        
        labelsenha.innerHTML = 'Senha *'
        validsenha =false

        
    }
    else if(senha.value == "123456" || senha.value == 123456 ) {
        labelsenha.setAttribute ('style', 'color: green')
        labelsenha.innerHTML = 'Senha'
        validsenha =true
    }
    else {
        labelsenha.setAttribute ('style', 'color: green')
        labelsenha.innerHTML = 'Senha'
        validsenha =false
    }
})






function login () {
    if ( validemail && validsenha && workemail ) { 
        
        window.location.href = '../perfPrestador/perfPrestador.html'

    }
    else if ( validemail && validsenha && clientemail ) { 
        
        window.location.href = '../perfildoCliente/index.html'

    }
    else {
        alert ('email ou senha invalidos')
    }
} 