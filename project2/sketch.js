let p = [];
let  d,str;
function setup() {
	createCanvas(900,500);
	for (var i = 0; i < 100; i++) {
		p[i] = new particle();
	}
}

function draw() {
	background(5);		
	for (var i = 0; i < p.length; i++) {
		p[i].show();
		p[i].move();
		p[i].ofscreen();
		for(let j = i; j<p.length;j++) {
			p[i].distance(p[j]);
		}
	}
	fill(255);
	let fr = frameRate();
	text(floor(fr),10,10)
}