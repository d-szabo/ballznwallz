const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let x = 320;
let y = 240;

let LEFT, UP, RIGHT, DOWN;

function drawBall(x, y, r){
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2*Math.PI);
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
}

document.onkeydown = function(e) {
	if (e.keyCode == 37) LEFT = true;
	if (e.keyCode == 38) UP = true;
	if (e.keyCode == 39) RIGHT = true;
	if (e.keyCode == 40) DOWN = true;
}

document.onkeyup = function(e) {
	if (e.keyCode == 37) LEFT = false;
	if (e.keyCode == 38) UP = false;
	if (e.keyCode == 39) RIGHT = false;
	if (e.keyCode == 40) DOWN = false;
}

function move() {
	if(LEFT) x--;
	if(UP) y--;
	if(RIGHT) x++;
	if(DOWN) y++;
}

window.main = function () {
  window.requestAnimationFrame( main );
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  move();

  drawBall(x, y, 30);
};

main(); // Start the cycle



