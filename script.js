window.onload = () => {
  const startBtn = document.getElementById('start-race-btn')
  const resetBtn = document.getElementById('reset-race-btn')
  const player1 = document.getElementById('player1')
  const player2 = document.getElementById('player2')
  const audioWinner = document.getElementById('audioWinner')
  const cars = document.getElementsByClassName('car')
  const alternatives = document.getElementsByClassName('playersImages')

  player1.style.marginLeft = 0
  player2.style.marginLeft = 0

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

      if (player1Win) {
        alert('Player 1 wins')
        resetCars()
        // audioWinner.play()
      } else if (player2Win) {
        alert('Player 2 wins')
        resetCars()
        // audioWinner.play()
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

  resetBtn.addEventListener('click', resetCars)

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
