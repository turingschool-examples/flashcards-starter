const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
    it('should be a function', function() {
      const turn = new Turn()
      expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
      const turn = new Turn()
      expect(turn).to.be.an.instanceof(Turn)
    });

    it('should store user guess as a string', function() {
      const turn = new Turn('Swamp Thing')
      expect(turn.guess).to.equal('Swamp Thing')
    });

    it('should store the current Card object', function() {
      const card = new Card()
      const turn = new Turn('Taco Cat', card)
      expect(turn.card).to.be.an.instanceof(Card)
    });

    it('should return user guess', function() {
      const card = new Card()
      const turn = new Turn('Imagination Land', card)

      turn.returnGuess()

      expect(turn.returnGuess()).to.equal('Imagination Land')
    });

    it('should return the current Card object', function() {
      const card = new Card()
      const turn = new Turn('Satchmo', card)

      turn.returnCard()

      expect(turn.returnCard()).to.equal(card)
    });

    it('should return a boolean indicating if the answer is correct', function() {
      const card = new Card(1, 'What is the meaning of life?', ['To love and be loved in return', '42', 'Cheese'], '42')
      const turn = new Turn('42', card)

      expect(turn.evaluateGuess()).to.equal(true)
    });

    it('should return a boolean indicating if the answer is incorrect', function() {
      const card = new Card(1, 'What is the meaning of life?', ['To love and be loved in return', '42', 'Cheese'], '42')
      const turn = new Turn('To love and be loved in return', card)

      expect(turn.evaluateGuess()).to.equal(false)
    });

    it('should return a "Correcto-mundo!" on a correct guess', function() {
      const card = new Card(1, 'What is the meaning of life?', ['To love and be loved in return', '42', 'Cheese'], '42')
      const turn = new Turn('42', card)

      turn.evaluateGuess()

      expect(turn.giveFeedback()).to.equal('Correcto-mundo!')
    });

    it('should return "That\'s incorrect, try again." on an incorrect guess', function() {
      const card = new Card(1, 'What is the meaning of life?', ['To love and be loved in return', '42', 'Cheese'], '42')
      const turn = new Turn('To love and be loved in return', card)

      turn.evaluateGuess()

      expect(turn.giveFeedback()).to.equal('That\'s incorrect, try again.')
    });
})
