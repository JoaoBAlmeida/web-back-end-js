var altura;
var largura;
var life = 3;
var timer = 11;
var gametime = 4000;

function adjustScreen(){
	//Get size of screen at X & Y
	altura = window.innerHeight;
	largura = window.innerWidth;
	console.log("largura: " + largura + " - altura: " + altura);
}

//Cronometro do jogo
function cronometro(){
	var timedGame = setInterval(function(){
	timer--;
	if(timer < 0){
		clearInterval(timedGame);
		window.location.href="victory.html";
	} else {
		document.getElementById("tick").innerHTML = timer;
	}
}, 1000);
}

function randomFly(){
	//Remove fly if existent and deal with life ingame
	if(document.getElementById("gameFly")){
		switch(life){
			case 3:
				life = 2;
				document.getElementById("Heart1").src = "imagens/coracao_vazio.png";
				break;
			case 2:
				life = 1;
				document.getElementById("Heart2").src = "imagens/coracao_vazio.png";
				break;
			case 1:
				document.getElementById("Heart3").src = "imagens/coracao_vazio.png";
				window.location.href="endgame.html";
				break;
			default:
				alert("an error occurred");
		}
		//Removal of Fly
		document.getElementById("gameFly").remove();
	}
	//Random value for X & Y proportional to screen size
	//"-100" to prevent img overflow and scroll bar
	var posX = Math.floor(Math.random()*largura) - 100;
	var posY = Math.floor(Math.random()*altura) - 100;
	//Prevent negative values
	posX = posX < 0 ? 0 : posX;
	posY = posY < 0 ? 0 : posY;
	console.log("largura rand: " + posX + " - altura rand: " + posY);
	//HTML Element creation
	var fly = document.createElement("img");
	fly.src = "imagens/mosca.png";
	fly.className = randomClass() + " " + randomMirror();
	fly.style.left = posX + "px";
	fly.style.top = posY + "px";
	fly.style.position = "absolute";
	fly.id = "gameFly";
	fly.onclick = function(){
		this.remove();
	}
	document.body.appendChild(fly);
}

function randomClass(){
	var size = Math.floor(Math.random()*3);
	switch(size){
		case 0:
			return "mosca";
		case 1:
			return "moscaEasy"
		case 2:
			return "moscaTrain"
		default:
			return "mosca"
	}
}

function randomMirror(){
	var side = Math.floor(Math.random()*2);
	switch(side){
		case 0:
			return "normal";
		case 1:
			return "mirrored";
		default:
			return "normal";
	}
}

function gameStart(){
	var level = window.location.search;
	level = level.replace("?", "");
	switch(level){
		case "normal":
			timer = 11;
			gametime = 1500;
			break;
		case "hard":
			timer = 16;
			gametime = 1000;
			break;
		case "impossible":
			timer = 21;
			gametime = 500;
			break;
		default:
			timer = 11;
			gametime = 1500;
			break;
	}
}