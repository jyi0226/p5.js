function setup() {
	let canvas = createCanvas(600, 400);
	canvas.parent("canvas-wrap");
	background(245, 239, 230);

	stroke(30, 30, 30);
	strokeWeight(2);

	fill(220, 80, 10);
	rect(40, 40, 160, 120);

	fill(70, 130, 200);
	ellipse(170, 120, 140, 140);

	fill(245, 190, 60);
	triangle(260, 40, 360, 180, 180, 180);

	fill(40, 40, 40);
	rect(390, 35, 150, 90);

	fill(120, 180, 120);
	ellipse(470, 170, 170, 110);

	fill(150, 90, 180);
	quad(60, 230, 180, 210, 210, 320, 90, 350);

	fill(250, 250, 250);
	circle(150, 280, 70);

	fill(230, 110, 160);
	triangle(250, 220, 330, 360, 170, 360);

	fill(80, 170, 170);
	rect(360, 230, 180, 110);

	fill(255, 210, 90);
	circle(430, 285, 90);

	fill(255, 255, 255, 180);
	ellipse(300, 120, 70, 180);

	fill(30, 30, 30);
	rect(280, 250, 18, 90);
	rect(500, 70, 16, 140);

	fill(200, 60, 60);
	ellipse(518, 82, 36, 36);

	fill(60, 90, 180);
	ellipse(288, 238, 42, 42);
}
