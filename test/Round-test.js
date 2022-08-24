const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Turn = require('../src/turns');
const Round = require('../src/Round');

describe('Round', function() {
    let card;
    let card1;
    let card2;
    let deck;
    let round;
    let turn;

    this.beforeEach(() => {
       // console.log('My deck code is running!')
        card = new Card(1, 'What animal is cuter, a puppy or a kitten?', ['puppy', 'kitten'], 'puppy');
        card1 = new Card(2, 'What is Jimmy\'s favorite toy', ['bunny', 'ball', 'sea turtle'], 'bunny');
        card2 = new Card(3, 'What color are Beth\'s eyes?', ['blue', 'green', 'hazel'], 'hazel');
        deck = new Deck([card, card1, card2]);
        turn = new Turn('puppy', card)
        round = new Round(deck);

    })

    it('should be able to store a deck', function() {
        expect(round.deck).to.equal(deck);
        
    })

    it('should return current card being played', function() {
        expect(round.returnCurrentCard()).to.equal(card)
       
    })

    it('should be able to take turns', function() {
        round.takeTurn('puppy')
        expect(round.turns).to.equal(1)
    })

    it('should be an instance of Turn', function() {
        expect(turn).to.be.an.instanceOf(Turn);
    })

    it('should track correct and incorrect guesses in an array', function() {
        expect(round.takeTurn('puppy')).to.equal('correct')
        expect(round.takeTurn('puppy')).to.equal('incorrect')
    })

    it('should be able to return feedback whether or not the guess is correct or not', function() {
        round.takeTurn('puppy')
        round.takeTurn('bunny')
        round.takeTurn('bunny')
        expect(round.correctGuesses).to.deep.equal([1, 2])
        expect(round.correctGuesses).to.deep.equal([1, 2])
        expect(round.incorrectGuesses).to.deep.equal([3])
    })

    it('should calculate the percentage of the score', function() {
        round.takeTurn('puppy')
        round.takeTurn('puppy')
        expect(round.calculatePercentCorrect()).to.equal(50)
    })

    it('should be able to return an end statement with the user correct answer percentage', function() {
        round.takeTurn('puppy')
        round.takeTurn('puppy')
        expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`)
    })

})