const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const { assert } = require('chai');

describe('Turn', function() {  
    
it('should be a function', function() {
    var turn = new Turn();
      
    expect(Turn).to.be.a('function');
});
    
it('should have a guess and card', function () {
    var card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    var turn = new Turn('pug', card);

    var card2 = new Card(2, 'What is Sara\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'capybara');
    var turn2 = new Turn('capybara', card2);

    var card3 = new Card(3, 'What is Kate\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'pug');
    var turn3 = new Turn('sea otter', card3);
    
    assert.equal(turn.guess, 'pug');
    assert.equal(turn2.guess, 'capybara');
    assert.equal(turn3.guess, 'sea otter');
    assert.deepEqual(turn.card, card);
    assert.deepEqual(turn2.card, card2);
    assert.deepEqual(turn3.card, card2);
});
});
    
it('should return a guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    var card2 = new Card(2, 'What is Sara\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'capybara');
    var turn2 = new Turn('capybara', card2);

    var card3 = new Card(3, 'What is Kate\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'pug');
    var turn3 = new Turn('sea otter', card3);
        
    assert.equal(turn.guess, 'pug');
    assert.equal(turn2.guess, 'capybara');
    assert.equal(turn3.guess, 'sea otter');
    assert.deepEqual(turn.card, card);
    assert.deepEqual(turn2.card, card2);
    assert.deepEqual(turn3.card, card3);
    turn.returnGuess('pug');
    turn.returnGuess('capybara')
    turn.returnGuess('sea otter');

 
});

it('should return a card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    var card2 = new Card(2, 'What is Sara\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'capybara');
    var turn2 = new Turn('capybara', card2);

    var card3 = new Card(3, 'What is Kate\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'pug');
    var turn3 = new Turn('sea otter', card3);
    
    assert.equal(turn.returnCard(), card);
    assert.equal(turn2.returnCard(), card2);
    assert.equal(turn3.returnCard(), card3);
});

it('should evaluate guess as true or false', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    var card2 = new Card(2, 'What is Sara\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'capybara');
    var turn2 = new Turn('capybara', card2);

    var card3 = new Card(3, 'What is Kate\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'pug');
    var turn3 = new Turn('sea otter', card3);

    assert.equal(turn.guess, 'pug');
    assert.equal(turn2.guess, 'capybara');
    assert.equal(turn3.guess, 'sea otter');
    turn.evaluateGuess(false);
    turn2.evaluateGuess(true);
    turn3.evaluateGuess(false)
   
});

it('should return answer of correct! or incorrect!', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    var card2 = new Card(2, 'What is Sara\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'capybara');
    var turn2 = new Turn('capybara', card2);

    var card3 = new Card(3, 'What is Kate\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'pug');
    var turn3 = new Turn('sea otter', card3);

    assert.equal(turn.guess, 'pug');
    assert.equal(turn2.guess, 'capybara');
    assert.equal(turn3.guess, 'sea otter');
    assert.deepEqual(turn.card, card);
    assert.deepEqual(turn2.card, card2);
    assert.deepEqual(turn3.card, card2);
    turn.evaluateGuess(false)
    turn2.evaluateGuess(true)
    turn3.evaluateGuess(false)
    turn.giveFeedback(false, 'incorrect!');
    turn2.giveFeedback(true, 'correct!');
    turn3.giveFeedback(false, 'incorrect!');
});
