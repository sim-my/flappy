let midbird, upbird, downbird;
class Bird {
  constructor() {
    midbird = loadImage("bird.png");
    upbird = loadImage("upbird.png");
    downbird = loadImage("downbird.png");
    this.flyingSound = new Audio("wing.wav");
    this.fallingSound = new Audio("swoosh.wav");
    this.birdArray = [upbird, midbird, downbird, midbird];
    this.count = 0;
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.8;
    this.velocity = 0;
    this.lift = 15;

    this.show = function () {
      let index = Math.round(frameCount * 0.1)%4
      let birdimg = this.birdArray[index];
      image(birdimg, this.x, this.y, 48, 48);
    };
    this.update = function () {
      this.velocity += this.gravity;
      this.velocity *= 0.9;
      this.y += this.velocity;
      if (this.y > (height * 2) / 3) {
        this.fallingSound.play();
      }
    };
    this.up = function () {
      this.flyingSound.play();
      this.velocity -= this.lift;
    };
  }
}
