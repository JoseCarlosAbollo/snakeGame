function Serpiente(){
	
	this.x = 2 * sze;
	this.y = 2 * sze;

	this.dirX = 0;
	this.dirY = 0;

	this.long = 0;
	this.cola = [];

	this.act = false;
	this.gameOver = false;

	this.dir = function(x, y){
		this.dirX = x;
		this.dirY = y;
	}

	this.come = function(){
		++this.long;
	}

	this.update = function(){
		if(this.long == this.cola.length){
			for(var i = 0; i < this.cola.length-1; ++i){
				this.cola[i] = this.cola[i+1];
			}
		}
		this.cola[this.long-1] = createVector(this.x, this.y);

		this.x += this.dirX * sze;
		this.y += this.dirY * sze;

		if(this.x == 0 || this.y == 0 || this.x == (tam-1)*sze || this.y == (tam-1)*sze){
			this.gameOver = true;
		}else{
			for (var i = 0; i <= this.cola.length-1; ++i) {
				if(this.x == this.cola[i].x && this.y == this.cola[i].y){
					this.gameOver = true;
				}
			}
		}
		this.act = true;
	}

	this.show = function(){
		fill(0, 225, 0);
		for(var i = 0; i < this.long; ++i){
			rect(this.cola[i].x, this.cola[i].y, sze, sze);
		}
		rect(this.x, this.y, sze, sze);
		
	}
}