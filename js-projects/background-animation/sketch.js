let bubbles = [];
let canvas;
function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style("z-index", "-1");
	for (let i = 0; i < 30; i++) {
		let a = random(width);
		let b = random(height);
		let c = random(10, 50);
		bubbles[i] = new Bubble(a, b, c);
	}
}
function draw() {
	background(0);
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].show();
		bubbles[i].move();
		bubbles[i].check();
		bubbles[i].ofscreen();

		for (let j = 0; j < bubbles.length; j++) {
			if (bubbles[i] !== bubbles[j] && bubbles[i].collide(bubbles[j])) {
				bubbles[i].collapse(bubbles[j]);
			}
		}
	}
}
