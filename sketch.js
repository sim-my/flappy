var bird;
var score = 0,
  scoreElem;
var pipes = [];
var bg, gameover;
function setup() {
  bg = loadImage("clouds.png");
  gameover = loadImage("gameover.png");
  createCanvas(600, 600);
  bird = new Bird();
  scoreElem = createDiv("SCORE" + score).position(20, 20);
  scoreElem.style('color', 'yellow');
  pipes.push(new Pipe());
}

function draw() {
  background(bg);
  scoreElem.html("SCORE " + score);
  if (frameCount % 100 == 0) {
	pipes.push(new Pipe());
	score = score + 1;
  }
  for (let index = 0; index < pipes.length; index++) {
    pipes[index].show();
    pipes[index].update();
    if (pipes[index].hits(bird)) {
      image(gameover, width / 3, height / 4, width / 3, height / 8);
      noLoop();
    }
  }
  bird.update();
  bird.show();
}

function keyPressed() {
  if (key == " ") {
    bird.up();
  }
}
