// const { createCard } = require("./card");

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return 'Correct!'
  } else {
    return 'Incorrect - please try again.'
  }
}

module.exports = { 
  evaluateGuess,
  // createCard
}; 