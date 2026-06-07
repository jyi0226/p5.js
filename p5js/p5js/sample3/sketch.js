let face_x = 300;
let blush = false;

function setup() {
	let canvas = createCanvas(600, 400);
	canvas.parent("canvas-wrap");
}

function draw() {
	background(230, 245, 255);

	fill(70, 110, 190);
	stroke(50, 80, 140);
	strokeWeight(2);
	arc(face_x, 360, 220, 180, PI, TWO_PI);

	fill(245, 210, 185);
	noStroke();
	rect(face_x - 30, 220, 60, 50, 10);

	fill(245, 210, 185);
	stroke(80);
	strokeWeight(2);
	ellipse(face_x, 160, 170, 190);

	fill(50, 35, 25);
	noStroke();
	arc(face_x, 130, 180, 150, PI, TWO_PI);
	ellipse(face_x - 75, 140, 35, 70);
	ellipse(face_x + 75, 140, 35, 70);

	triangle(face_x - 60, 90, face_x - 30, 120, face_x - 80, 135);
	triangle(face_x - 20, 85, face_x + 5, 140, face_x - 45, 130);
	triangle(face_x + 20, 88, face_x + 45, 135, face_x - 5, 130);

	fill(245, 210, 185);
	stroke(80);
	ellipse(face_x - 80, 165, 22, 35);
	ellipse(face_x + 80, 165, 22, 35);

	noFill();
	stroke(40);
	strokeWeight(3);
	ellipse(face_x - 35, 160, 48, 38);
	ellipse(face_x + 35, 160, 48, 38);
	line(face_x - 11, 155, face_x + 11, 155);

	fill(255);
	stroke(60);
	strokeWeight(3);
	ellipse(face_x - 35, 157, 18, 12);
	ellipse(face_x + 35, 157, 18, 12);

	fill(30);
	noStroke();
	ellipse(face_x - 35, 157, 6, 6);
	ellipse(face_x + 35, 157, 6, 6);

	stroke(60, 40, 20);
	strokeWeight(3);
	line(face_x - 45, 142, face_x - 25, 140);
	line(face_x + 25, 140, face_x + 45, 142);

	stroke(120, 90, 80);
	strokeWeight(2);
	line(face_x, 160, face_x - 5, 185);
	line(face_x - 5, 185, face_x + 5, 188);

	noFill();
	stroke(170, 80, 90);
	strokeWeight(2);
	arc(face_x, 205, 40, 20, 0, PI);

	if (blush) {
		noStroke();
		fill(255, 180, 190, 150);
		ellipse(face_x - 50, 190, 20, 10);
		ellipse(face_x + 50, 190, 20, 10);
	}

	stroke(255);
	strokeWeight(3);
	line(face_x - 20, 285, face_x - 25, 325);
	line(face_x + 20, 285, face_x + 25, 325);
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		face_x -= 10;
	} else if (keyCode === RIGHT_ARROW) {
		face_x += 10;
	}
}

function mousePressed() {
	blush = !blush;
}
