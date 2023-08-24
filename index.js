// Import necessary functions and data
const { createCard } = require('./src/card');
const { evaluateGuess } = require('./src/guess');
const { createDeck, countCards } = require('./src/deck');
const {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
} = require('./src/round'); // You might need other imports here
const { printMessage, printQuestion } = require('./src/game');
const { prototypeData } = require('./src/data'); // Make sure the path is correct

// Define the start function
const start = () => {
  // Create flashcards using map
  const flashcardsAll = prototypeData.map(questionData => {
    return createCard(
      questionData.id,
      questionData.question,
      questionData.answers,
      questionData.correctAnswer
    );
  });
  const deck = createDeck(flashcardsAll);
  // Create a new round using the deck
  const round = createRound(deck, 0, 0, []);
  // Print the welcome message
  printMessage(deck);
  // Start the interaction with questions
  printQuestion(round);
};

// Call the start function to initiate the game
start();

console.log('Your project is running...');
