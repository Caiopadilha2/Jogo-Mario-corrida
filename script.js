const submit = document.getElementById('submit')
const username = document.getElementById('username')
const password = document.getElementById('password')
submit.addEventListener('click', event => {
  event.preventDefault()
  if (username.value === 'caio' && password.value === '123456') {
    window.location = 'http://127.0.0.1:5500/index2.html'
  } else {
    alert('Usuário inválido!')
    username.value = ''
    password.value = ''
  }
})
