const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game')

describe("Game", function(){

it('should put cards in a deck', function() {
const card1 = new Card(5, 'What is Gus\'s favorite animal?', ['sea otter', 'rhino', 'lion'], 'rhino');
const card2 = new Card(14, 'Which one of these teams is a NBA team?', ['Dolphins', 'Marlins', 'Heat'], 'Heat');
const card3 = new Card(12, 'What is Gus\'s middle name?', ['Ian', 'William', 'Fitzgerald'], 'Ian');
const deck = new Deck([card1, card2, card3]);
const turn = new Turn("rhino", card1)
const round = new Round(deck, turn);
const game = new Game(deck, turn, round)
expect(game.start()).to.equal(card1)
round.takeTurn()
expect(game.start()).to.equal(card2)
round.takeTurn()
expect(game.start()).to.equal(card3)
expect(deck.countCards()).to.equal(3)

});
});