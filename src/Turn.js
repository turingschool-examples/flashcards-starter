class Turn {
  constructor(userGuess, card) {

    function returnGuess(userGuess) {
      return userGuess;
    }

    function returnCard(card) {
      return card;
    }

    function evaluateGuess() {
      if(returnGuess(userGuess) === returnCard(card).correctAnswer) {
        return true;
      } else {
        return false;
      }
    }

    function giveFeedback() {
      if(evaluateGuess === true) {
        return 'correct!';
      } else {
        return 'incorrect!';
      }
    }
  }
}

module.exports = Turn;