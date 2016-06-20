window.onload = init;

function init(){
	//console.log('Hola Mundo JS');
	var canvas = document.getElementById('mycanvas');
	canvas.width = 500;
	canvas.height = 500;
	var ctx = canvas.getContext('2d');
	var linea = new line(100,200,300,0);
	printline(linea,'black');
	var lineas = [];
	lineas.push(linea);
	for(var i=0;i<2;i++){
		var newlines = [];
		for(x in lineas){
			console.log(lineas[x]);
			generateLines(lineas[x],newlines);
		}
		lineas = newlines;
	}
	generateLines(linea,lineas);
	//console.log(ctx);
};


function line(x,y,l,theta){
	this.x = x;
	this.y = y;
	this.l = l;
	this.theta = theta;
	//console.log(this);
};

function generateLines(linea,lineas){
	var x = linea.x;
	var y = linea.y;
	var l = linea.l/3;
	var theta = linea.theta;
	var line1 = new line(x,y,l,theta);
	var line2 = new line(x+l,y,l,theta-Math.PI/3);
	var line3 = new line(x+2*l,y,l,theta-2*Math.PI/3);
	var line4 = new line(x+2*l,y,l,theta);
	lineas.push(line1);
	lineas.push(line2);
	lineas.push(line3);
	lineas.push(line4);
	printline(line2,'green');
	printline(line3,'blue');
	printline(new line(x+l,y,l,theta),'white');
	return null;
};

function printline(line,color){
	//console.log(line);
	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');
	ctx.save();
	ctx.beginPath();
	ctx.translate(line.x,line.y);
	ctx.rotate(line.theta);
	ctx.strokeStyle = color;
	ctx.moveTo(0,0);
	ctx.lineTo(line.l,0);
	ctx.stroke();
	ctx.restore();
	//console.log('End print line');
}