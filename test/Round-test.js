const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
it ('returns the current card', function() {
const card = new Card((1, "What is Craig's dog actually named?", ['Sugarbear', 'Frumpleface', 'Archer', 'All of the above'], 'All of the above'));
const deck = new Deck([card]);
const round = new Round(deck)
expect(round.returnCurrentCard()).to.equal(card)
})

it ('returns the number of turns', function() {
    const card = new Card((1, "What is Craig's dog actually named?", ['Sugarbear', 'Frumpleface', 'Archer', 'All of the above'], 'All of the above'));
    const deck = new Deck([card]);
    const round = new Round(deck)
    expect(round.turns).to.equal(0)
    })

describe('taking a turn', function() {
    let card1;
    let card2;
    let deck;
    let round;
    this.beforeEach(function() {
        card1 = new Card(1, "What is Craig's dog actually named?", ['Sugarbear', 'Frumpleface', 'Archer', 'All of the above'], 'All of the above');
        card2 = new Card(2, 'Activity in which brain region is associated with greater happiness?', ['hypothalamus', 'amygdala', 'ventromedial PFC'], 'ventromedial PFC')
        deck = new Deck([card1, card2]);
        round = new Round(deck)
       })

    it('returns feedback based off guess', function(){
    expect(round.takeTurn('All of the above')).to.equal('correct')
        }); 

    it('returns the number of turns', function(){
        round.takeTurn('All of the above');
        expect(round.turns).to.equal(1);
        });

    it('moves the current card after taking a turn', function() {
        round.takeTurn('another guess');
        expect(round.returnCurrentCard()).to.equal(card2);
        });  

    it('stores incorrect guesses', function() {
        round.takeTurn('guessy guessface');
        expect(round.incorrectGuesses).to.deep.equal([1]);
        });    

    it('can calculate percent corrrect', function(){
        round.takeTurn('guess again')
        round.takeTurn('ventromedial PFC')
        expect(round.calculatePercentCorrect()).to.equal(50)
        });

    })

})