var balls = [];

function setup() {
	createCanvas( 700, 700 );
	frameRate( 30 );

	for( var i = 0; i < 40; i++ ) {
		balls[i] = new Ball();
	}
}

function draw() {
	background( 0 );
	
	for( var i = 0; i < balls.length; i++ ) {
		balls[i].draw();
	}
}