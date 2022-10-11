class Card {
	constructor(id, question,possibilities,correct) {
		this.question = question;
		this.answers = possibilities;
		this.correctAnswer = correct;
		this.id = id; 
  }
};







module.exports = Card;