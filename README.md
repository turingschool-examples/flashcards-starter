# FlashCards Project

For this project, I have created a game of flashcards using the command line in the terminal.  There are two sets of data that can be used to play the game, however I did not have time to figure out how to make the second game launch immediately after the first one ends.  I will leave instructions to launch the second game below.  I used TDD to write the code for the game, which includes five different javascript object classes. Enjoy!

## Setup

To begin, you will need to clone down the repo, and then in your terminal, run

```bash
node index.js
```

This will start the game. Choose your answer using the `1` `2` or `3` keys and `enter` to submit your guess. You can also use the `up` and `down` arrow keys to navigate the list of possible answers. The console will print whether your answer was correct or not, and then press `enter` again to move on to the next question.  When you have answered all 30 questions, the console will evaluate the percent of questions you answered correctly, and the game will end.

If you want to play the second version of the game, with questions that I wrote myself, you will have to open the `index.js` file in your text editor, and comment out line 15.  Comment in line 16, and then run the terminal command again.

```bash
node index.js
```

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

---

# Technologies Used

I used javascript and TDD to write individual tests for each class.  There are five different class files, Card, Turn, Deck, Round, and Game.  Each one builds on the previous one to eventually create a full deck of card objects that the user can play through.  The game is played in the terminal, using the CLI - command line interface.

