
function createCard(id, question, answers, correctAnswer) {
  return {
    id,
    question,
    answers,
    correctAnswer,
  };
}

function evaluateGuess(guess, correctAnswer) {
  // convert both guess and correctAnswer to lowercase
  const formattedGuess = String(guess).toLowerCase();
  const formattedCorrectAnswer = String(correctAnswer).toLowerCase();

  return formattedGuess === formattedCorrectAnswer ? 'correct!' : 'incorrect!';
}

 //refactor
  function createDeck(prototypeData) {
    return prototypeData.map((data) =>
      createCard(data.id, data.question, data.answers, data.correctAnswer)
    );
  }

function countCards(deck) {
  return deck.length;
}

//refactor
function createRound(deck) {
  let currentCardIndex = 0;
  let turns = 0;
  let incorrectGuesses = [];

  return {
    deck,
    get currentCard() {
      return currentCardIndex < this.deck.length ? this.deck[currentCardIndex] : undefined;
    },
    incorrectGuesses,

    takeTurn(guess) {
      if (currentCardIndex >= this.deck.length) {
        // if no more cards are left, just return without doing anything else
        return;
      }

      const currentCard = this.currentCard;
      const result = evaluateGuess(guess, currentCard.correctAnswer);
      console.log(`Guess: ${guess}`);
      console.log(`Your answer of ${guess} is ${result}`);

      turns++;
      if (result === 'incorrect!') {
        this.incorrectGuesses.push(currentCard.id);
      }

      currentCardIndex++;

      // this will check if we've just answered the last card
      if (currentCardIndex >= this.deck.length) {
        this.endRound();
      }

      return result;
    },

    calculatePercentCorrect() {
      const correctGuesses = turns - this.incorrectGuesses.length;
      return turns === 0 ? 0 : (correctGuesses / turns) * 100;
    },

    endRound() {
      const percentCorrect = this.calculatePercentCorrect().toFixed(2);
      console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`);
    },
  };
}

module.exports = {
    createCard,
    evaluateGuess,
    createDeck,
    countCards,
    createRound,
  };

