function setup() {
	let canvas = createCanvas(600, 400);
	canvas.parent("canvas-wrap");
	background(230, 245, 255);

	fill(70, 110, 190);
	stroke(50, 80, 140);
	strokeWeight(2);
	arc(300, 360, 220, 180, PI, TWO_PI);

	fill(245, 210, 185);
	noStroke();
	rect(270, 220, 60, 50, 10);

	fill(245, 210, 185);
	stroke(80);
	strokeWeight(2);
	ellipse(300, 160, 170, 190);

	// 머리
	fill(50, 35, 25);
	noStroke();
	arc(300, 130, 180, 150, PI, TWO_PI);
	ellipse(225, 140, 35, 70);
	ellipse(375, 140, 35, 70);

	triangle(240, 90, 270, 120, 220, 135);
	triangle(280, 85, 305, 140, 255, 130);
	triangle(320, 88, 345, 135, 295, 130);

	fill(245, 210, 185);
	stroke(80);
	ellipse(220, 165, 22, 35);
	ellipse(380, 165, 22, 35);

	noFill();
	stroke(40);
	strokeWeight(3);
	ellipse(265, 160, 48, 38);
	ellipse(335, 160, 48, 38);
	line(289, 155, 311, 155);

	fill(255);
	stroke(60);
	strokeWeight(3);
	ellipse(265, 157, 18, 12);
	ellipse(335, 157, 18, 12);

	fill(30);
	noStroke();
	ellipse(265, 157, 6, 6);
	ellipse(335, 157, 6, 6);

	stroke(60, 40, 20);
	strokeWeight(3);
	line(255, 142, 275, 140);
	line(325, 140, 345, 142);

	stroke(120, 90, 80);
	strokeWeight(2);
	line(300, 160, 295, 185);
	line(295, 185, 305, 188);

	noFill();
	stroke(170, 80, 90);
	strokeWeight(2);
	arc(300, 205, 40, 20, 0, PI);

	stroke(255);
	strokeWeight(3);
	line(280, 285, 275, 325);
	line(320, 285, 325, 325);
}
