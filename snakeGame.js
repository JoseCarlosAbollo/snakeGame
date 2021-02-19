/************************************************************************************************
This code set a version of the classic game Snake.

Author: Abollo Palacios, José Carlos
*************************************************************************************************/

function setup(){
	frames = 5;
	sze = 10;
	tam = 30;
	serp = new Serpiente();
	fruta = new Fruta();
	createCanvas(tam * sze, tam * sze);
}

function draw(){
	background(50);
	fill(0);
	rect(0, 0, tam*sze, sze);
	rect(0, (tam)*sze, tam*sze, -sze);
	rect(0, 0, sze, tam*sze);
	rect((tam-1)*sze, 0, sze, tam*sze);

	frameRate(frames + floor(serp.long / 2));
	
	fruta.show();

	serp.update();
	serp.show();
	
	if(serp.gameOver){
		console.log('GAME OVER LOOSER');
		noLoop();
	}
	else{
		if(serp.x == fruta.x && serp.y == fruta.y){
			serp.come();
			fruta.gen();
		}
	}
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		if(serp.dirY == 0 && serp.act){
			serp.dir(0, -1);
			serp.act = false;
		}
	}else if(keyCode == RIGHT_ARROW){
		if(serp.dirX == 0 && serp.act){
			serp.dir(1, 0);
			serp.act = false;
		}
	}else if(keyCode == DOWN_ARROW){
		if(serp.dirY == 0 && serp.act){
			serp.dir(0, 1);
			serp.act = false;
		}
	}else if(keyCode == LEFT_ARROW){
		if(serp.dirX == 0 && serp.act){
			serp.dir(-1, 0);
			serp.act = false;
		}
	}else if(keyPressed == CONTROL){
		serp = new Serpiente();
		fruta = new Fruta();
		loop();
	}
}