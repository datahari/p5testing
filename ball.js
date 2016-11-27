function Ball() {

	this.radius   = random( 20, 100 );
	this.diameter = this.radius * 2;

	this.y = random( height / 2 );
	this.x = random( this.radius, width - this.radius );

	this.color = [random( 255 ), random( 255 ), random( 255 )];

	this.gravity   = 1 * ( this.radius / 100 );
	this.yvelocity = 0;
	this.xvelocity = random( 1, 5 );

	this.squish   = 1;
	this.squishig = false;

	this.draw = function() {

		this.yvelocity += this.gravity;
		this.y         += this.yvelocity;
		this.x         += this.xvelocity;

		fill( this.color[0], this.color[1], this.color[2], 200 );

		ellipse( this.x, this.y, this.diameter * this.squish, this.diameter / this.squish );

		this.bounce();

		this.unsquish();

	}

	this.unsquish = function() {

		if( this.squishing == false && this.squish != 1 ) {
			this.squish -= 0.08;
		}

	}

	this.hitsWall = function() {
		return this.x < this.radius || this.x + this.radius > width;
	}

	this.hitsGround = function() {
		return this.y + this.radius > height;
	}

	this.bounce = function() {

		if( this.hitsWall() ) {
			this.xvelocity *= -1;
		}

		if( this.hitsGround() ) {
			if(this.squish < 1.3) {
				if( this.squishing == false ) {
					this.color = [random( 255 ), random( 255 ), random( 255 )];
				}
				this.squish   += 0.08;
				this.yvelocity = 0;
				this.squishing = true;
			} else {
				this.squishing  = false;
				this.yvelocity -= 25 - ( this.radius / 50 );
			}
		}

	}

}