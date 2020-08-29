let imgbird;
class Bird {
    constructor() {
        imgbird = loadImage("bird.png");
        this.y = height / 2;
        this.x = 64;
        this.gravity = 0.8;
        this.velocity = 0;
        this.lift=15;
        this.show = function () {
            image(imgbird, this.x, this.y, 48,48);
        };
        this.update = function(){
            this.velocity+=this.gravity;
            this.velocity*=0.9;
            this.y+=this.velocity;
        }
        this.up =function(){
            this.velocity-=this.lift;
        }
    }
}
