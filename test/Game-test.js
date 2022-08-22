const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');


describe('Game', function(){
    let sampleCards;
    let game;

    beforeEach(function(){
        sampleCards = [{
            "id": 5,
            "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "iteration method"
          }, {
            "id": 15,
            "question": "The callback function for reduce() takes in an accumulator and a current element.",
            "answers": ["true", "false"],
            "correctAnswer": "true"
          }, {
            "id": 25,
            "question": "Arrays are specialized objects where the keys are ordered numbers.",
            "answers": ["true", "false"],
            "correctAnswer": "true"
          }]
        game = new Game(sampleCards)
    })

    it('should be a function', function() {
        expect(Game).to.be.a('function')
    })
    
    it('should be able to create and store cards in a new Deck', function() {
        expect(game.createDeck(game.cards)).to.equal(game.createCards())
    })

    it('should be able to start a new round of the Game', function() {
        
        expect(game.startGame()).to.equal(game.currentRound)
        //this test is not passing
    })
})