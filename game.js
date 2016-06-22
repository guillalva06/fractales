window.onload = init;

function init(){
	var canvas = document.getElementById('mycanvas');
	canvas.width = 500;
	canvas.height = 500;
	var r = 240;
	var center = new Point(250,250);
	var ctx = canvas.getContext('2d');
	var n = 5;
	var points = [];
	for(var i=0;i<n;i++){
		var x = center.x + r*Math.cos(i*2*Math.PI/n);
		var y = center.y + r*Math.sin(i*2*Math.PI/n);
		points.push(new Point(x,y));
		drawpoint(points[i]);
	}	
	ctx.beginPath();
	ctx.arc(center.x,center.y,r,0,2*Math.PI);
	ctx.stroke();
	var r = 1-1/2;
	var iterations = 30000;
	var point = new Point(250,250);
	drawpoint(point);
	for(var i=0;i<iterations;i++){
		var diece = Math.floor(Math.random()*n);
		//point.x = (points[diece].x+point.x*r)/(1+r)+0*point.x;
		//point.y = (points[diece].y+point.y*r)/(1+r)+0*point.y;
		point.x = (points[diece].x-point.x)*r+point.x;
		point.y = (points[diece].y-point.y)*r+point.y;		
		drawpoint(point);
	}
}

function drawpoint(point){
	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');
	ctx.fillRect(point.x,point.y,1,1);
}

function Point(x,y){
	this.x = x;
	this.y = y;
}