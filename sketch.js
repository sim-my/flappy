var bird;
var firstGame = true;
var reset = false;
var score, scoreElem, message, intro;
var pipes = [];
var bg, gameover, gameoverElem;
var flyingSound, hitSound, pointSound, dieSound;
function preload() {
  bg = loadImage("clouds.png");
  gameover = loadImage("gameover.png");
  intro = loadImage('intro.jpg')
}
function setup() {
  createCanvas(600, 600);
  hitSound = new Audio("hit.wav");
  dieSound = new Audio("die.wav");
  start();
}

function start() {
  pipes.push(new Pipe());
  reset = false;
  score = 0;
  bird = new Bird();
  scoreElem = createDiv("SCORE" + score).position(20, 20);
  scoreElem.style("color", "yellow");
}

function draw() {
  background(bg);
  gameoverElem = createImg("gameover.png");
  gameoverElem.position(width / 3, height / 4);
  gameoverElem.size(width / 3, height / 8);
  gameoverElem.hide();
  scoreElem.show();
  if (firstGame == true) {
    scoreElem.hide();
    if (frameCount == 8) {
      message = createDiv("PRESS SPACE TO PLAY").position(
        width / 3 - 52,
        height / 2
      );
      message.style("color", "blue");
      noLoop();
    }
  }
  scoreElem.html("SCORE " + score);
  if (frameCount % 50 == 0) {
    pipes.push(new Pipe());
  }
  if (bird.y < 48 || bird.y > 600 - 48) {
    birdDie();
  }
  for (let index = 0; index < pipes.length; index++) {
    if (pipes.length >= 2) {
      if (pipes[1].x - pipes[0].x < 250) {
        pipes.splice(1, 1);
      }
    }

    pipes[index].show();
    pipes[index].update();
    if (pipes[index].cross(bird)) {
      score++;
    }
    if (pipes[index].hits(bird)) {
      birdDie();
    }
  }
  bird.update();
  bird.show();
}
function birdDie() {
  hitSound.play();
  gameoverElem.show();
  message = createDiv("PRESS ENTER TO REPLAY").position(
    width / 3 - 52,
    height / 2
  );
  message.style("color", "blue");
  dieSound.play();
  noLoop();
  reset = true;
}
function keyPressed() {
  if (key == " ") {
    bird.up();
  }

  if (reset == true) {
    if (keyCode === RETURN) {
      gameoverElem.remove();
      message.remove();
      scoreElem.remove();
      pipes = [];
      start();
      loop();
    }
  }
  if (firstGame == true) {
    if (key == " ") {
      message.remove();
      loop();
      firstGame = false;
    }
  }
}
