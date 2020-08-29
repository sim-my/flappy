
class Bird {
    constructor() {
        this.y = height / 2;
        this.x = 64;
        this.gravity = 0.6;
        this.velocity = 0;
        this.lift=15;
        this.show = function () {
            fill(255,0,0);
            ellipse(this.x, this.y, 32, 32);
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
