const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');

describe('Turn', function() {

it('should be a function', function() {
const turn = new Turn();
expect(Turn).to.be.a('function');
});

it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn)
})

it('should store a guess', function() {
    const card = new Card(1, 'What is Maya\'s favorite animal?', ['panda', 'frog', 'cat'], 'panda')
    const turn = new Turn('panda', card)
    expect(turn.guess).to.equal('panda')
    })

it('should return a guess', function() {
    const card = new Card(1, 'What is Emma\'s favorite ice cream?', ['cookie-dough', 'mint-chip', 'strawberry'], 'mint-chip')
    const turn = new Turn('mint-chip', card)
    expect(turn.returnGuess()).to.equal('mint-chip')
})

it('should return a Card', function() {
    const card = new Card(1, 'What town is Maya from?', ['San Francisco', 'Santa Fe', 'Sioux Falls'], 'Sioux Falls')
    const turn = new Turn('Sioux Falls', card)
    expect(turn.returnCard()).to.equal(card)
    expect(card).to.be.an.instanceof(Card)
})

it('should be right or wrong', function(){
    const card = new Card(1, 'What city is Maya from?', ['San Francisco', 'Santa Fe', 'Sioux Falls'], 'Sioux Falls')
    const turn = new Turn('Sioux Falls', card)
    expect(turn.evaluateGuess()).to.equal(true)
    const card2 = new Card(2, 'What city is Emma from?', ['Chicago', 'Pittsburg', 'Tampa'], 'Chicago')
    const turn2 = new Turn('Tampa', card2)
    expect(turn2.evaluateGuess()).to.equal(false)
})

it('should give feedback', function() {
    const card = new Card(1, 'What city is Maya from?', ['San Francisco', 'Santa Fe', 'Sioux Falls'], 'Sioux Falls')
    const turn = new Turn('Sioux Falls', card)
    expect(turn.evaluateGuess()).to.equal(true)
    expect(turn.giveFeedback()).to.equal('correct!')
    const card2 = new Card(2, 'What city is Emma from?', ['Chicago', 'Pittsburg', 'Tampa'], 'Chicago')
    const turn2 = new Turn('Tampa', card2)
    expect(turn2.evaluateGuess()).to.equal(false)
    expect(turn2.giveFeedback()).to.equal('incorrect!')
})
})