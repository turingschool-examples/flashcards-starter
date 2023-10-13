const { prototypeData } = require("./data")

function createCard(id, question, answers, correctAnswer) {
  return {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
}

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return "correct!"
  } else {
    return "incorrect!"
  }
}

function createDeck(prototypeData) {
  const deck = [];
  prototypeData.forEach((Object) => {
    deck.push(Object)
  });
  return deck;
}

function countCards(deck) {
  return deck.length;
}

let round = {
  deck: deck,
  currentCard: deck[0],
  turns: 0,
  incorrectGuesses: []
}

function takeTurn(guess, round) {
  const result = evaluateGuess(guess, correctAnswer);
  if(result === 'incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id)
  }
  console.log(result);
  round.turns ++;
  round.currentCard = round.deck[round.turns];
  return round;
}

function calculatePercentCorrect(prototypeData, round) {
  const correct = ((prototypeData.length - round.incorrectGuesses.length)/ prototypeData.length) * 100;
  return correct + '%';
}

function endRound() {
  console.log(`** Round Over!** You answered ${calculatePercentCorrect(prototypeData, round)}% of the questions correctly!`);
  return `** Round Over!** You answered ${calculatePercentCorrect(prototypeData, round)}% of the questions correctly!`
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  takeTurn,
  calculatePercentCorrect,
  endRound
}