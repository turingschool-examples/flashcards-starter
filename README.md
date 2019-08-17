# FlashCards Starter Kit

This FlashCards Starter Kit is our first solo project in Mod 2 at Turing. The program is a set of flash cards that runs through the command line!

Questions will appear one at a time and provide multiple choice answer options for the user to choose. Once the user chooses an answer, they will be told if that answer is correct or incorrect and the game will move on to the next question till all questions have been answered. The game will end with "** Round over! ** You answered (fill in amount)% of the questions correctly!".

Many small classes were used to build this project to demonstrate that objects have a single responsibility and to help build good habits.

Test driven development (TDD) drove the implementation of all code.

## How To Play

**Fork This Repo**

On the top right corner of this page, click the **Fork** button.

**Setup**

On the upper ride side of your repo **Clone** down your forked repo.

In the terminal, make sure you are in a location where you want this project folder to live, run:

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the repo root directory.

**Start The Game**

In the terminal, install the library dependencies. Run:

```bash
npm install
```

Run:

```bash
node index.js
```

When the game is functioning appropriately, you will be prompted for each question, have the opportunity to select an answer, and will be given feedback. You will be able to play through the entire deck of cards:

![flash cards example gif](images/flashcards_game-play.gif)
