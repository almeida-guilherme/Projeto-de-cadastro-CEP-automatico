lista = ["logradouro","bairro","uf","localidade"];

function pesquisaCep(){
    let cep = document.getElementById('cep').value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
        if (!response.ok){
            throw new Error(`Ocorreu um erro: ${response.status}`)
        }
        return response.json();
    }).catch(error => {alert("Por favor, insira um CEP valido")}).then(response=>{apresentarResultados(response)})
}

function limparFormulario(){
    for (var i=0; i < lista.length; i ++) {
        document.getElementById(`${lista[i]}`).value = " "
    }
}


function apresentarResultados(resultado){
    for (var i=0; i < lista.length; i ++) {
        document.getElementById(`${lista[i]}`).value = resultado[lista[i]]
    }
}

document.getElementById('cep').addEventListener('click',limparFormulario);
document.getElementById('cep').addEventListener('focusout',pesquisaCep);

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyC2iSjjxKooxJbLa0RV9ewhNEHb-wRzoc0",
//     authDomain: "formulario-de-cadastro-21812.firebaseapp.com",
//     projectId: "formulario-de-cadastro-21812",
//     storageBucket: "formulario-de-cadastro-21812.appspot.com",
//     messagingSenderId: "830478137344",
//     appId: "1:830478137344:web:6702b5b84e85b7623cc0e5",
//     measurementId: "G-HP2TWSCK6W"
//   };


// fetch("AIzaSyC2iSjjxKooxJbLa0RV9ewhNEHb-wRzoc0").then(response => {return response.json();})
// .catch(error => {alert(error)}).then(response=>{apresenta(response)})

// function apresenta(a){
//     console.log(a)
// }
