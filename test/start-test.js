const { createCard, evaluateGuess, createDeck, countCards, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const dataSub = [{
  id: 1,
  question: "What allows you to define a set of related information using key-value pairs?",
  answers: ["object", "array", "function"],
  correctAnswer: "object"
}, {
  id: 2,
  question: "What is a comma-separated list of related values?",
  answers: ["array", "object", "function"],
  correctAnswer: "array"
}, {
  id: 3,
  question: "What type of prototype method directly modifies the existing array?",
  answers: ["mutator method", "accessor method", "iteration method"],
  correctAnswer: "mutator method"
}, {
  id: 4,
  question: "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
  answers: ["mutator method", "accessor method", "iteration method"],
  correctAnswer: "accessor method"
}, {
  id: 5,
  question: "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
  answers: ["mutator method", "accessor method", "iteration method"],
  correctAnswer: "iteration method"
}, {
  id: 6,
  question: "What is an example of a mutator method?",
  answers: ["sort()", "map()", "join()"],
  correctAnswer: "sort()"
}, {
  id: 7,
  question: "Which array prototype is not an accessor method?",
  answers: ["join()", "slice()", "splice()"],
  correctAnswer: "splice()"
}, {
  id: 8,
  question: "What do iterator methods take in as their first argument?",
  answers: ["callback function", "current element", "an array"],
  correctAnswer: "callback function"
}]


describe('startMock', () => {
  it('should create cards and put them in a deck', () => {
    const deck = startMock(data);
    expect(deck.length).to.equal(8);
    expect(deck[0].id).to.equal(1);
  })
})