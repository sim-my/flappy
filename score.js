class Score {
  constructor() {
    this.score = 99;
    this.show = function () {
      createDiv(this.score).position(20,20);
      
    };
    this.update = function(){
        this.score++;
    }
  }
}
