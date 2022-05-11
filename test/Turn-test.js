const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){
    it('should be a function', function(){
      const newTurn = new Turn();
      expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function(){
      const newTurn = new Turn();
      expect(newTurn).to.be.an.instanceof(Turn);
    });

    it('should store a guess', function(){
        const newTurn = new Turn('pug');
        expect(newTurn.guess).to.equal('pug');
    });

    it('should store a card', function(){
        const newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const newTurn = new Turn('pug', newCard);
        expect(newTurn.card).to.be.an.instanceof(Card);
        expect(newTurn.card).to.equal(newCard);
    });

    it('should return a guess', function(){
        const newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const newTurn = new Turn('pug', newCard);
        expect(newTurn.returnGuess()).to.equal('pug');
    });

    it('should return a card', function(){
        const newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const newTurn = new Turn('pug', newCard);
        expect(newTurn.returnCard()).to.equal(newCard);
    });

    it('should evaluate if guess is correct', function(){
        const newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const newTurn = new Turn('pug', newCard);
        expect(newTurn.evaluateGuess()).to.equal(false);
    });

    it('should give feedback', function(){
        const newCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const newTurn = new Turn('pug', newCard);
        expect(newTurn.giveFeedback()).to.equal('incorrect!');
    });

});