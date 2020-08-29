var bird;
var pipes = [];
var bg;
function setup() {
	bg = loadImage('clouds.png');
	createCanvas(600, 600);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
	background(bg);
	bird.update();
	bird.show();
	if(frameCount % 100 == 0){
		pipes.push(new Pipe());
	}
	for (let index = 0; index < pipes.length; index++) {
		pipes[index].show();
		pipes[index].update();	
		if(pipes[index].hits(bird)){
			console.log('HITS');
		}	
	}
}

function keyPressed(){
	if(key == ' '){
		bird.up();
	}
}