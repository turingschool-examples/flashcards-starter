

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

const deck = createDeck([card1, card2, card3, card4, card5])

const card1 = createCard(1, 'Which french river sound amuesing?', ['Seine', 'Meuse', 'Marne'], 'Meuse');
const card2 = createCard(2, 'What is the southern most french mountain range?', ['Champagne', 'Jura', 'Pyrenees'], 'Pyrenees');
const card3 = createCard(3, 'William the Conqueror conquered Britain from which french region?', ['Normady', 'Burgundy', 'Brittany'], 'Normandy');
const card4 = createCard(4, 'Which country does France share their longest border?', ['Germany', 'Spain', 'Brazil'], 'Brazil')
const card5 = createCard(5, 'Which french city shares its name with a U.S. state?', ['Detriot', 'Montpellier', 'Strasbourg'], 'Montpellier')

const createRound = (deck) => {
    const round = {
        deck,
        currendCard,
        turns: 0,
        incorrectGuesses: []
    }
    function takeTurn(guess,round){

    }
}

function takeTurn(guess,round){

}

function calculatePercentCorrect(round){

}

function endRound(round){

}
// const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
// const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
// const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

// const deck = createDeck([card1, card2, card3]);

// countCards(deck);

module.exports = {
    createCard,
    evaluateGuess,
    takeTurn,
    calculatePercentCorrect,
    endRound,
    createRound
  };