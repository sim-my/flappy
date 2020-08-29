let imgtop,imgbottom;
class Pipe {
 
  constructor() {
    imgtop = loadImage("pipetop.jpg");
    imgbottom = loadImage("pipebottom.png");
    this.top = random(height/4, height/2);
    this.space = random(100,300);
    this.bottom = height - this.top-this.space;
    this.x = width;
    this.w = 80;
    this.speed = 5;
    this.show = function () {
      image(imgtop, this.x, 0, this.w, this.top);
      image(imgbottom, this.x, height - this.bottom, this.w, this.bottom);
    };

    this.update = function () {
      this.x -= this.speed;
    };

    this.hits = function (bird) {
      if (bird.y < this.top || bird.y > height - this.bottom-48) {
        if (bird.x >= this.x-48 && bird.x <= this.x + this.w + 48) {
          return true;
        }
      }
      return false;
    };
  }
}
