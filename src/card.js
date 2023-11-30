function createCard(id, question, answers, correctAnswer) {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card;
}

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return 'Correct';
  } else {
    return 'Incorrect';
  }
}

// function createDeck(cards) {
// const deck = [];
// cards.forEach(card => {
//   deck.push(card);
// });
// return deck;
// }
function createDeck(cards) {
  const deck = cards;
  return deck;
}

function countCards(deck) {
  return deck.length;
}

function createRound(deck) {
  const round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  }
  return round;
}

function takeTurn(guess, round) {
  const result = evaluateGuess(guess, round.currentCard.correctAnswer)

  if (result === 'Incorrect') {
    round.incorrectGuesses.push(round.currentCard.id);
  }

  round.turns++;
  round.currentCard = round.deck[round.turns];

  return result;
}

function calculatePercentCorrect(round) {
  const percentageCorrect = (round.deck.length - round.incorrectGuesses.length) / (round.deck.length) * 100;
  return parseFloat(percentageCorrect.toFixed(2));
}

function endRound(round) {
  const endRoundMessage = `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly`;
  console.log(endRoundMessage);
  return endRoundMessage;
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound

};