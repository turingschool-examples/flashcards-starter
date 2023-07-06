const { evaluateGuess } = require('../src/card');

function createRound(deck) {
  return {
    deck: deck.cards,
    currentCard: deck.cards[0],
    turns: 0,
    incorrectGuesses: []
  }
}

function createDeck(cards) {
  return {
    cards: cards
  }
}

function countCards(deck) {
  return deck.cards.length; 
}

function takeTurn(guess, round) {
  const answer = round.currentCard.correctAnswer
  if (guess !== answer) {
    round.incorrectGuesses.push(round.currentCard.id);
  }
    const currentIndex = round.deck.indexOf(round.currentCard);
      round.turns++;
      round.deck.shift();
      round.currentCard = round.deck[0];
        if(round.currentCard === undefined) {
         round.currentCard = null;
        } else {
        round.currentCard;
  }
    return evaluateGuess(guess, answer);
}

function calculatePercentageCorrect(round) {
  const incorrectPercent = Math.round((1 - (round.incorrectGuesses.length / round.turns)) * 100);
  const percent = 100 - incorrectPercent
  return `${percent}%`
}

function endRound(round) {
  const percent = calculatePercentageCorrect(round);
  console.log(`** Round over! ** You answered ${percent} of the questions correctly!`);
  stopTimer()
}

let start;
let end;

function startTimer() {
  start = new Date();
}

function stopTimer() {
  end = new Date();
  const elapsedTime = end - start;
  console.log(`It took ${elapsedTime} milliseconds to complete this activity.`);
}
  for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}






module.exports = {
  createRound,
  createDeck,
  countCards,
  takeTurn,
  calculatePercentageCorrect, 
  endRound,
  startTimer,
  stopTimer

}