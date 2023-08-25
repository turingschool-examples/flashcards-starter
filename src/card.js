const createCard = (id, question, answers, correctAnswer) => {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card;
} 

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return 'Correct'
  } else {
    return 'Incorrect'
  }
}

const createDeck = (cardObjArr) => {
  let deck = {
    deck: cardObjArr
  }
  return deck.deck;
  // }
  // console.log(deck)
  // return deck.deck;
  // return cardObjArr
} 

const countCards = (deckObjArr) => {
  return deckObjArr.length;
}

const createRound = (deck, currentCardIndex = 0, turns = 0, incorrectGuesses = []) => {
  let round = {
    deck: deck,
    currentCard: deck[currentCardIndex],
    turns: turns,
    incorrectGuesses: incorrectGuesses,
    currentCardIndex: currentCardIndex
  }
  // round.currentCard = currentCardIndex
  return round;
}

const takeTurn = (guess, roundObj) => {
  // roundObj.currentCard.deck[currentCardIndex] += 1;
  const result = evaluateGuess(guess, roundObj.currentCard.correctAnswer);
  console.log("before:", roundObj.incorrectGuesses)
  if (result === "Incorrect"); {
    roundObj.incorrectGuesses.push(roundObj.currentCard.id)
  }
  roundObj.turns += 1;
  roundObj.currentCardIndex += 1;
  roundObj.currentCard = roundObj.deck[roundObj.currentCardIndex];
  console.log("after:", roundObj.incorrectGuesses);
}

function calculatePercentCorrect(round) {
  const totalGuesses = round.deck.length;
  const correctGuesses = totalGuesses - round.incorrectGuesses.length;
  correctGuesses / totalGuesses 
  
}

// console.log('Your project is running...'); 
// const calculatePercentCorrect = round => {
//   const numOfQuestions = countCards(round.deck);
//   const numIncorrect = round.incorrectGuesses.length;
//   const percentCorrect = Math.round((1 - numIncorrect / numOfQuestions) * 100);
//   return percentCorrect;
// };

// const endRound = round => {
//   const percentCorrect = calculatePercentCorrect(round);
//   return
//   `** Round over! ** You answered ${percentCorrect}% of the questions correctly.`
// }
// test:
// expect(console.log()).to.equal(
//   `** Round over! ** You answered ${percentCorrect}% of the questions correctly.`
//     );
//   });
// });

  // give feedback, store id of wrong guesses
  // use map to create an array, for creating a card
  // const { prototypeData } = require('./src/data.js');
//   takeTurn(guess, round): updates the turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
// When a guess is made:
// The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated. Incorrect guesses will be stored (via card’s the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct
// calculatePercentCorrect(round): calculates and returns the percentage of correct guesses
// endRound(round): prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’

// const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
// const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
// const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
// const deck = createDeck([card1, card2, card3]);
// const round = createRound(deck)
// round.deck;  // => [card1, card2, card3];
// round.currentCard; // => { id: 1,
                   //      question: 'What is Robbie\'s favorite animal',
                   //      answers: ['sea otter', 'pug', 'capybara'],
                   //      correctAnswer: 'sea otter'
                   //    }
// round.turns; // => 0
// round.incorrectGuesses;  // => []
// takeTurn('sea otter', round); // => 'correct!'
// takeTurn('spleen', round);  // => 'incorrect!'
// round.turns;  // => 2
// round.incorrectGuesses;  // => [14]
// round.currentCard;  // => { id: 12,
            	      //      question: 'What is Travis\'s favorite stress reliever?',
            	      //      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
            	      //      correctAnswer: 'playing with bubble wrap'
            	      //    }
// calculatePercentCorrect(round);  // => 50

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  takeTurn, 
  createRound
}

  // if (guess === correctAnswer) {
  //   console.log('Correct!')
  //   return card.correctAnswer;
  // } else {
  //   console.log('Incorrect!')
  //   return guess
  // }