const createCard = (id, question, answers, correctAnswer) => {
  const card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card;
}

const evaluateGuess = (guess, newCard) => {
  if(newCard === guess){
    return 'correct!'
    } else {
    return 'incorrect!'
  }
}

const createDeck = subData => {
  return subData
}

const countCards = deck => {
  return deck.length
}

const createRound = subData => {
  let round = {
    deck: subData,
    currentCard: subData[0],
    turns: 0,
    incorrectGuesses: [],
    over: false,
    percentageRight: 0,
  }
  return round
}



const calculatePercentage = round => {
  let average = (round.turns - round.incorrectGuesses.length)/round.turns
  let percentage = Math.round(average * 100)
  return percentage
}


module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
  calculatePercentage,
}
