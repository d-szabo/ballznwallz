const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawBall(x, y, r){
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2*Math.PI);
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();	
}

drawBall(320, 240, 40);
drawBall(380, 240, 20);