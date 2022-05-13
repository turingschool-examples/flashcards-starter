const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Game',() => {
    let game,round, deck, turn, card, card1, card2, card3;

    beforeEach(() => {
         card1 = new Card( 2,"What is a comma-separated list of related values?",["array", "object", "function"], "array");
         card2 = new Card( 3,"What type of prototype method directly modifies the existing array?",["mutator method", "accessor method", "iteration method"],"mutator method"); 
         card3 = new Card( 4,"What type of prototype method does not modify the existing array but returns a particular representation of the array?",["mutator method", "accessor method", "iteration method"],"accessor method");

         deck = new Deck([card1, card2, card3]);
         round = new Round(deck);
         turn = new Turn('object',card);
         game = new Game() 
    })

    it('should be a function', function() {
        expect(Game).to.be.a('function');
    })

    it('should be an instance of Game',() => { 
        expect(game).to.be.an.instanceOf(Game);
    })

});