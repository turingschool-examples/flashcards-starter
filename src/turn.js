function createPlayer(name, winningWord) {
  const player = {
    name,
    winningWord: []
  }
  return player;
}

function turn(playerAnswer, correctAnswer) {
  if (playerAnswer === correctAnswer) {
    player.winningWord.push(playerAnswer)
    return 'Correct!'
  } else {
    return 'Incorrect, try again!'
  }
}


module.exports = {
  // createPlayer,
  turn
}