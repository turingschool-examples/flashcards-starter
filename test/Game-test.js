const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Card = 	require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');


describe.only('Game', function() {

	it('should be a function', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);
		const round = new Round(deck);
		const game = new Game(round);


		expect(Game).to.be.a('function');
	});

	it('should be an instance of Game', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);
		const round = new Round(deck);
		const game = new Game(round);

    expect(game).to.be.an.instanceof(Game);
	});

	it('should keep track of the current round', function() {
		const cards = prototypeQuestions.map(function(currentCard){
      let card = new Card(currentCard.id, currentCard.question, currentCard.answers, currentCard.correctAnswer)
      return card;
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    const game = new Game();
    expect(game.currentRound).to.eql({});
    game.start();
    expect(game.currentRound).to.eql(round);
	});

	// it('should create instances of Cards, a Deck, and a current Round', function() {
	// 	let game = new Game();
	// 	game.start();
	// 	const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
	// 	const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
	// 	const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
	// 	const deck = new Deck([card1, card2, card3]);
	// 	const round = new Round(deck);
		
	// 	expect(game).to.equal();
	// })

})