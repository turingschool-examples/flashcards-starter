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
    return "correct!";
  }

  return "incorrect!";
}

function createDeck() {
  const deck  = [];
  const args = Array.from(arguments);

  args.forEach(card => {
    deck.push(card);  
  });

  return deck;
}

function countCards(deck) {
  return deck.length;
}

function createRound(deck) {
  return {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
    takeTurn: function() {

    },
    calculatePercentageCorrect: function() {

    },
    endRound: function(){

    }
  }
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards, 
  createRound
}