// function to shuffle an array (for creating a deck)
/*function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  const { prototypeData } = require('./data');

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}*/

// WIP
function createCard(id, question, answers, correctAnswer) {
  return {
    id,
    question,
    answers,
    correctAnswer,
  };
}

function evaluateGuess(guess, correctAnswer) {
  // convert both guess and correctAnswer to lowercase for case-insensitive comparison
  const formattedGuess = String(guess).toLowerCase();
  const formattedCorrectAnswer = String(correctAnswer).toLowerCase();

  return formattedGuess === formattedCorrectAnswer ? 'correct!' : 'incorrect!';
}

function createDeck(prototypeData) {
    const cards = prototypeData.map((data) =>
      createCard(data.id, data.question, data.answers, data.correctAnswer)
    );
//prob not needed, but add shuffle stuff at the end
  /*    const shuffledDeck = shuffleArray(cards);
  
    return {
      cards: shuffledDeck,
    };*/
  }

function countCards(deck) {
  return deck.cards.length;
}

function createRound(deck) {
    let currentCardIndex = 0;
    let turns = 0;
    let incorrectGuesses = [];
  
    return {
      deck,
      currentCard: deck.cards[currentCardIndex],
      turns,
      incorrectGuesses,
  
      takeTurn(guess) {
        const currentCard = this.currentCard; // Added this line
        const result = evaluateGuess(guess, currentCard.correctAnswer);
        if (result === 'incorrect!') {
          this.incorrectGuesses.push(currentCard.id);
        }
        this.turns++;
        currentCardIndex++;
        this.currentCard = deck.cards[currentCardIndex];
        return result;
      },
  
      calculatePercentCorrect() {
        if (this.turns === 0) {
          return 0;
        }
        const correctGuesses = this.turns - this.incorrectGuesses.length;
        return (correctGuesses / this.turns) * 100;
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




  //to fix - ref errors. Why is cards giving me so much trouble? Array 1 =/= Array 1? Turn count off by 1