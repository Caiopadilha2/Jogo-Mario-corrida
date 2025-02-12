const submit = document.getElementById('submit')
const username = document.getElementById('username')
const password = document.getElementById('password')
const botao = document.getElementById('botao')
submit.addEventListener('click', event => {
  event.preventDefault()
  if (username.value === 'caio' && password.value === '123456') {
    Swal.fire({
      icon: 'success',
      title: 'Login realizado'
    }).then(() => {
      window.location =
        'https://caiopadilha2.github.io/Jogo-Mario-corrida/index2.html'
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuário inválido'
    })
    username.value = ''
    password.value = ''
  }
})
