window.onload = () => {
  const startBtn = document.getElementById('start-race-btn')
  const resetBtn = document.getElementById('reset-race-btn')
  const player1 = document.getElementById('player1')
  const player2 = document.getElementById('player2')
  const audioWinner = document.getElementById('audioWinner')
  const cars = document.getElementsByClassName('car')
  const alternatives = document.getElementsByClassName('playersImages')
  const p1Score = document.getElementById('p1Score')
  const p2Score = document.getElementById('p2Score')

  player1.style.marginLeft = 0
  player2.style.marginLeft = 0

  if (localStorage.length === 0) {
    p1Score.innerText = 0
    p2Score.innerText = 0
  } else if (localStorage.getItem('scorePlayer1') === null) {
    p1Score.innerText = 0
    p2Score.innerText = localStorage.getItem('scorePlayer2')
  } else if (localStorage.getItem('scorePlayer2') === null) {
    p2Score.innerText = 0
    p1Score.innerText = localStorage.getItem('scorePlayer1')
  } else {
    p1Score.innerText = localStorage.getItem('scorePlayer1')
    p2Score.innerText = localStorage.getItem('scorePlayer2')
  }

  startBtn.addEventListener('click', event => {
    if (
      cars[0].style.backgroundImage !== '' &&
      cars[1].style.backgroundImage !== ''
    ) {
      player1.style.marginLeft =
        parseInt(player1.style.marginLeft) + Math.random() * 200 + 'px'
      player2.style.marginLeft =
        parseInt(player2.style.marginLeft) + Math.random() * 200 + 'px'

      const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth
      const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth

      if (player1Win && player2Win) {
        alert('Deu empate!')
        resetCars()
      } else if (player1Win) {
        alert('Player 1 ganhou')
        if (localStorage.getItem('scorePlayer1') === null) {
          localStorage.setItem('scorePlayer1', 1)
          p1Score.innerText = localStorage.getItem('scorePlayer1')
        } else {
          let player1Score = parseInt(localStorage.getItem('scorePlayer1'))
          localStorage.setItem('scorePlayer1', (player1Score += 1))
          p1Score.innerText = localStorage.getItem('scorePlayer1')
        }
        resetCars()
        audioWinner.play()
      } else if (player2Win) {
        alert('Player 2 ganhou')
        if (localStorage.getItem('scorePlayer2') === null) {
          localStorage.setItem('scorePlayer2', 1)
          p2Score.innerText = localStorage.getItem('scorePlayer2')
        } else {
          let player2Score = parseInt(localStorage.getItem('scorePlayer2'))
          localStorage.setItem('scorePlayer2', (player2Score += 1))
          p2Score.innerText = localStorage.getItem('scorePlayer2')
        }
        resetCars()
        audioWinner.play()
      }
    } else {
      alert('Você precisa selecionar os players.')
    }
  })

  const resetCars = () => {
    player1.style.marginLeft = 0
    player2.style.marginLeft = 0

    player1.style.backgroundImage = `url(./files/selectPlayer.png)`
    player2.style.backgroundImage = `url(./files/selectPlayer.png)`
  }

  resetBtn.addEventListener('click', () => {
    localStorage.clear()
    window.location.reload()
    // resetCars
  })

  for (let index = 0; index < cars.length; index++) {
    cars[index].addEventListener('click', event => {
      const playerSelected = document.querySelector('.selected')
      if (playerSelected) {
        playerSelected.classList.remove('selected')
      }
      event.target.classList.add('selected')
    })
  }

  for (let index = 0; index < alternatives.length; index += 1) {
    alternatives[index].addEventListener('click', event => {
      const playerSelected = document.querySelector('.selected')

      if (playerSelected) {
        // console.log(event.target)
        playerSelected.style.backgroundImage = `url(${event.target.src})`
        playerSelected.classList.remove('selected')
      }
    })
  }
}
