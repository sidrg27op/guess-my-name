'use strict';
let score = 20;
let highscore = 0;
let secret = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  const display = msg => {
    document.querySelector('.message').textContent = msg;
  };

  if (!guess) {
    display('🤢 no number');
  } else if (guess === secret) {
    display('👌 you won');
    document.querySelector('.number').textContent = secret;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secret) {
    if (score > 1) {
      display('☝ high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      display('🤣 u loose');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secret) {
    if (score > 1) {
      display('👇 low');
      score--;
      console.log(score);
      document.querySelector('.score').textContent = score;
      console.log(score);
    } else {
      display('🤣 u loose');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
