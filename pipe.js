
class Pipe{
    constructor() {
        this.top = random(height/2);
        this.bottom = random(height/2);
        this.x = width;
        this.w = 80;
        this.speed = 5;
        this.show = function () {
            fill(0,255,0);
            rect(this.x, 0, this.w, this.top);
            rect(this.x, height-this.bottom, this.w, this.bottom);
        };

        this.update = function(){
            this.x -= this.speed;
        }

        this.hits = function(bird){
            if(bird.y<this.top || bird.y>height-this.bottom){
                if(bird.x>=this.x && bird.x<=this.x+this.w){
                return true;
                }
            }
            return false;
        }
 }
}
