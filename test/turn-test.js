const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe( 'Turn', () => {
  const nextCard = new Card(1, 'What is Teddy\'s favorite color?', ['green', 'purple', 'blue'], 'green');
  const turn = new Turn('green', nextCard);
  const wrongTurn = new Turn('purple', nextCard);


   it('should be a function', () => {
        expect(Turn).to.be.a('function');
    })

   it('should be an instance of Turn', () => {
       expect(turn).to.be.an.instanceOf(Turn);
   })

   it('should store a guess', () => {
       expect(turn.guess).to.equal('green');
   })

   it('should have a card', () => {
       expect(turn.card).to.be.an.instanceOf(Card);
   })

})