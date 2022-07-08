 const chai = require('chai');
 const expect = chai.expect;
 const Card = require('../src/Card');
 const Deck = require('../src/Deck');
 const Round = require('../src/Round');
 const Turn = require('../src/Turn');
 const Game = require('../src/Game');
 const data = require('../src/data');//this gives us an object
 const prototypeQuestions = data.prototypeData;

describe('Game', function() {
    it('should be an instance of Game', function () {
        let game = new Game();
        expect(game).to.be.an.instanceof(Game);
    }); 
    it('should create new cards out of data', function () {
        let game = new Game();
        game.startGame();
        expect(game.cards[0]).to.be.an.instanceof(Card);
    });
    it('should create a new deck out of the new cards', function() {
        let game = new Game();
        game.startGame();
        expect(game.deck).to.be.an.instanceOf(Deck);
    })
    it('should create a new round with the new deck', function () {
        let game = new Game();
        game.startGame();
        expect(game.currentRound).to.be.an.instanceOf(Round);
    })
});

//Your Game class should meet these other requirements:
// Should keep track of the currentRound