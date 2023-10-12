

function createCard(id, question, answers = [], correctAnswer){
   let card = {
        id,
        question,
        answers,
        correctAnswer
    }
    return card
}

function evaluateGuess(guess, card){
        if(guess === card.correctAnswer){
            return 'Correct!'
        } else {
            return 'Incorrect!'
        }
}

const round = {
    deck,
    currendCard,
    turns: 0,
    incorrectGuesses: []
}

// const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
// const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
// const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

// const deck = createDeck([card1, card2, card3]);

// countCards(deck);

module.exports = {
    createCard,
    evaluateGuess
  };