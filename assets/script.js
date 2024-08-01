let nome = window.document.getElementById('nome')

let comentario = window.document.querySelector('#comentario')

nome.style.width='100%'
comentario.style.width='100%'

function validaNome() {

   let txt = document.querySelector('#txtNome')
                if (nome.value.length < 3) {
 alert('nome invalido')
 txt.innerHTML = 'Nome Inválido'
 tzt.style.color = 'red'
                }else {
txt.innerHTML = 'Nome Válido'
txt.style.color = 'green'
                }
}

function validaComentario() {

 let txtComentario = document.querySelector(#txtComentario)

     if (comentario.value.length >= 100) {
                txtComentario.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
                txtComentario.style.backgroundcolor = 'red'
 } else {
                txtComentario.style.display = 'none'
 }

}

function enviar() {
                if (nomeOK == true && comentarioOk == true) {
                                alert('Formulário enviado com sucesso!')

                }else {
                                alert ('Preencha o formulario corretamente antes de enviar...')
                }
}