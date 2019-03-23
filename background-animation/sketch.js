var canvas;

function setup() {
	// body...
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('z-index','-1');

}

function draw(){
	background(40);

}

function windowResized(){
	resizeCanvas();
}