# FlashCards 

<b>Flashcards</b> is a program that simulates a set of flash cards through the command line. A user will be able to see the questions, take guesses, and see a final score at the end of the round.

<h2> Table of Contents</h2>
<details open="open">
<summary>Table of Contents</summary>
  <ol>
    <li><a href="#technical-requirements"> Technical Requirements</a></li>
    <li><a href="#installation"> Installation</a></li>
  </ol>
</details>

<h2 id="technical-requirements">Technical Requirements</h2>
<ul>
<li>Javascript</li>
<li>Node</li>
</ul>

<h2 id="installation"> Installation </h2>

To get started, clone the repo in your terminal by entering the following:
<ul>
  <li>git clone git@github.com:nicole-esquer/flashcards.git</li>
</ul>  
   
Once cloned, run the following command:
<ul>
  <li>npm install</li>
</ul>
To ensure that setup was completed successfully run the following command:
<ul>
  <li>npm test</li><br>
</ul>

You should have 5 pending tests in your `Card` test file that show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Your project is running...
```

*Note that you will not need to you run your server until you are instantiating your `Game` class in Iteration 3. Prior to that, you should be using TDD to drive your code. You should check the functionality of your application by running your tests via `npm test`.*

## How to View My Code in Action

In the terminal, run:

```bash
node index.js
```

You will be prompted to select an answer for each question, and will be given feedback. You will be able to play through the entire deck of cards:

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)
