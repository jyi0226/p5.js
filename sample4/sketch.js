function setup() {
	let canvas = createCanvas(600, 400);
	canvas.parent("canvas-wrap");
	colorMode(RGB);
}

function draw() {
	background(245, 239, 230);

	stroke(30, 30, 30);
	strokeWeight(2);

	let moveX = sin(frameCount * 0.03) * 10;
	let moveY = cos(frameCount * 0.03) * 8;
	let sizeChange = sin(frameCount * 0.05) * 12;

	let t = (sin(frameCount * 0.03) + 1) / 2;
	let redOrange = lerpColor(color(220, 80, 10), color(255, 150, 60), t);
	let blueColor = lerpColor(color(70, 130, 200), color(120, 180, 255), t);
	let yellowColor = lerpColor(color(245, 190, 60), color(255, 230, 120), t);
	let greenColor = lerpColor(color(120, 180, 120), color(170, 220, 150), t);
	let purpleColor = lerpColor(color(150, 90, 180), color(190, 130, 220), t);
	let pinkColor = lerpColor(color(230, 110, 160), color(255, 160, 190), t);
	let tealColor = lerpColor(color(80, 170, 170), color(110, 210, 210), t);

	fill(redOrange);
	rect(40 + moveX, 40, 160, 120);

	fill(blueColor);
	ellipse(170, 120 + moveY, 140 + sizeChange, 140 + sizeChange);

	fill(yellowColor);
	triangle(260, 40 + moveY, 360, 180, 180, 180);

	fill(40, 40, 40);
	rect(390, 35, 150, 90);

	fill(greenColor);
	ellipse(470 + moveX, 170, 170 + sizeChange, 110 + sizeChange / 2);

	fill(purpleColor);
	quad(60, 230, 180 + moveX, 210, 210, 320, 90, 350);

	fill(250, 250, 250);
	circle(150, 280, 70 + sizeChange);

	fill(pinkColor);
	triangle(250, 220, 330 + moveX, 360, 170 - moveX, 360);

	fill(tealColor);
	rect(360, 230 + moveY, 180, 110);

	fill(255, 210, 90);
	circle(430, 285, 90 + sizeChange);

	fill(255, 255, 255, 180);
	ellipse(300 + moveX, 120, 70, 180 + sizeChange);

	fill(30, 30, 30);
	rect(280, 250, 18, 90);
	rect(500, 70, 16, 140);

	fill(200, 60, 60);
	ellipse(518, 82 + moveY, 36 + sizeChange / 3, 36 + sizeChange / 3);

	fill(60, 90, 180);
	ellipse(288, 238 + moveY, 42 + sizeChange / 3, 42 + sizeChange / 3);
}
