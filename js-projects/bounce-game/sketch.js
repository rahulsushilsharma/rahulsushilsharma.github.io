let b,
	score = 0,
	count = 0;
let p = [];
let backimg,
	tubeimg,
	level = 1,
	heighscore = 0,
	fr = 60;
function preload() {
	backimg = loadImage("background.png");
	tubeimg = loadImage("tube.png");
}
function setup() {
	createCanvas(windowWidth, windowHeight - 100);
	p.push(new pipe());
	b = new ball();
}

function draw() {
	if (frameCount % 100 == 0) {
		p.push(new pipe());
	}
	image(backimg, 0, 0, windowWidth, windowHeight - 100);
	displayScore();
	b.show();
	b.fall();
	for (var i = p.length - 1; i >= 0; i--) {
		p[i].levelup();
		p[i].show();
		p[i].move();
		p[i].collide(b);
		if (p[i].offscreen()) {
			p.splice(i, 1);
		}
	}
}

function keyPressed() {
	if (key == " " && fr == 0) {
		frameRate(60);
		let privscore = score;
		if (privscore > heighscore) {
			heighscore = privscore;
		}
	}
	if (key == " " && b.y + b.d / 2 > height - b.up) {
		count++;
		b.bounce();
	}
}
function mouseClicked() {
	let privscore = score;
	if (privscore > heighscore) {
		heighscore = privscore;
	}
	if (b.y + b.d / 2 > height - b.up) {
		count++;
		b.bounce();
	}
}

function displayScore() {
	score = frameCount / 10;
	textSize(15);
	fill(0);
	text("Score- ", 10, 10, 12, 30);
	text(floor(score), 55, 10, 12, 100);
	text("HeighScore- ", 100, 10, 12, 30);
	text(floor(heighscore), 190, 10, 12, 100);
	text("level- ", 300, 10, 12, 30);
	text(floor(level), 350, 10, 12, 100);
}
