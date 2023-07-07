const chai = require('chai');
const expect = chai.expect;

const { createCardListFromDataset } = require('../src/game');
const { sampleData } = require('../test/sample-data');

describe('starting a game', () => {
  it('should create a list of cards from a dataset', () => {
    const cards = createCardListFromDataset(sampleData);

    expect(cards[0]).to.deep.equal([
      {
        id: 1,
        question:
          'What allows you to define a set of related information using key-value pairs?',
        answers: ['object', 'array', 'function'],
        correctAnswer: 'object',
      },
    ]);
  });
});
