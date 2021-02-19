function Fruta(){
	this.x = floor(random(tam-2)+1)*sze;
	this.y = floor(random(tam-2)+1)*sze;

	this.show = function(){
		fill(200, 0, 75);
		rect(this.x, this.y, sze, sze);
	}

	this.gen = function(){
		this.x = floor(random(tam-2)+1)*sze;
		this.y = floor(random(tam-2)+1)*sze;
	}
}