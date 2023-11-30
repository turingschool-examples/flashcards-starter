// This is where your project starts.
console.log('Your project is running...');
// startGame.js
const card = require('./src/Card.js');
const deck = require('./src/Deck.js');
const round = require('./src/round.js');
const game = require('./src/game.js');
const data = require('./src/data.js');
const util = require('./src/util.js');
const prototypeQuestions = data.prototypeData;

function start() {
    const cards = prototypeQuestions.map((question) => {
        return card.createCard(question.id, question.question, question.answers, question.correctAnswer);
    });
    const deck1 =  deck.createDeck(cards);
    const round1 = round.createRound(deck1);
    util.main(round1);
}
start();
