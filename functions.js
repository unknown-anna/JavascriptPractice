//Player setting
var player = {
	x:150,
	y:130,
	girl:0,
	girldir:96,
	speed:10
}

//canvas setting
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.height = 198;
canvas.width = 330;

//image Load part
mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "rpg.gif";

bgImage = new Image();
bgImage.ready = false;
bgImage.onload = checkReady;
bgImage.src = "map.jpg";

//controller
var keyclick = {};
document.addEventListener("keydown",function(event){
	keyclick[event.keyCode]=true;
	move(keyclick);
},false);

var keyclick = {};
document.addEventListener("keyup",function(event){
	delete keyclick[event.keyCode];
},false);


//move
function move(keyclick){
	
	// alert("player.y = "+player.y);
	// alert("canvas height = "+canvas.height);

	if(39 in keyclick){ 
		if(checkWalkingRoad("right")) {
			player.x += player.speed;
		}

		player.girldir = 0;
		document.getElementById("canvas_playerX").textContent = "player X = "+player.x;
		
	}//right

	if(37 in keyclick){
		if(checkWalkingRoad("left")) {
			player.x -= player.speed;
		}

		player.girldir = 32;
		document.getElementById("canvas_playerX").textContent = "player X = "+player.x;
	}//left


	if(38 in keyclick ){
				
		if(checkWalkingRoad("up")) {
			player.y -= player.speed;
		}

		player.girldir = 64;
		document.getElementById("canvas_playerY").textContent = "player Y = "+player.y;
	}//up


	if(40 in keyclick){
		if(checkWalkingRoad("down")) {
			player.y += player.speed;
		}

		player.girldir = 96;
		document.getElementById("canvas_playerY").textContent = "player Y = "+player.y;
	}//down

	// if(player.x >=(canvas.width - 32)){player.x = 0;}
	// if(player.y >=(canvas.height - 32)){player.y = 0;}
	// if(player.x < 0 ){player.x = (canvas.width - 32);}
	// if(player.y < 0 ){player.y = (canvas.height - 32);}
	if(player.girl == 0){player.girl = 32}else{player.girl = 0;}

	document.getElementById("canvas_height_32").textContent = "canvas height - 32 = " + (canvas.height - 32);
	document.getElementById("canvas_width_32").textContent ="canvas width - 32 = "+ (canvas.width - 32);

	render();
}

function checkWalkingRoad(state){

	if(state=="up"){
		if(player.y == 50){
			return false;

		} else if (player.y == 80 && player.x <= 80) {
			return false;

		} else if (player.y == 110 && player.x >= 110){
			return false;

		}
	}


	if(state=="right"){
		if(player.x == 290){
			return false;

		} else if (player.x == 100 && player.y <= 100) {
			return false;

		} 
	}

	if(state=="down"){
		if(player.y == 160){
			return false;
		} 
	}
	

	if(state=="left"){
		if(player.x == 0){
			return false;

		} else if (player.x == 100 && player.y <= 70) {
			return false;

		}
	}


	return true;
}

function checkReady(){
	this.ready = true;
	playgame();
}

function playgame(){
	document.getElementById("canvas_height").textContent = "canvas height = "+canvas.height;
	document.getElementById("canvas_width").textContent ="canvas width = "+ canvas.width;
	render();
}

// charactor drow
function render(){
	context.fillRect(0,0,canvas.width,canvas.height);
	context.drawImage(bgImage,0,0);
	context.drawImage(mainImage,player.girl,player.girldir,32,32,player.x,player.y,32,32);
	// context.drawImage(mainImage,0,96,32,32,0,0,32,32);
	// context.drawImage(mainImage,player.girl,player.girldir,32,32,player.x,player.y,32,32);

	//score
	// context.font = "20px Verdana";
	// context.fillstyle = "white";
	// context.filltext("score" + score);

}

document.body.appendChild(canvas);
// ctx.fillText("hello",300,200);