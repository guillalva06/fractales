window.onload = init;

function init(){
	//console.log('Hola Mundo JS');
	var canvas = document.getElementById('mycanvas');
	canvas.width = 2500;
	canvas.height = 2500;
	var ctx = canvas.getContext('2d');
	ctx.lineWidth = 1;
	var linea = new line(100,200,1000,Math.PI/4*0,0);
	//var linea = new line(100,200,300,0);
	printline(linea,'blue');
	var lineas = [];
	lineas.push(linea);
	for(var i=0;i<5;i++){
		var newlines = [];
		for(x in lineas){
			console.log(lineas[x]);
			generateLines(lineas[x],newlines);
		}
		lineas = newlines;
	}
	//console.log(ctx);
};


function line(x,y,l,theta,type){
	this.x = x;
	this.y = y;
	this.l = l;
	this.theta = theta;
	this.type = type;
};

function generateLines(linea,lineas){
	var x = linea.x;
	var y = linea.y;
	var l = linea.l/3;
	var sen = Math.sin(linea.theta);
	var cos = Math.cos(linea.theta);
	var theta = linea.theta;
	var line1 = new line(x,y,l,theta,linea.type);
	var line4 = new line(x+2*l*cos,y+2*l*sen,l,theta,linea.type);
	if(linea.type%2 == 0){
		var line2 = new line(x+l*cos,y+l*sen,l,theta-Math.PI/3,linea.type);
		var line3 = new line(x+2*l*cos,y+2*l*sen,l,theta-2*Math.PI/3,linea.type+1);
	}else{
		var line2 = new line(x+l*cos,y+l*sen,l,theta+Math.PI/3,linea.type);
		var line3 = new line(x+2*l*cos,y+2*l*sen,l,theta+2*Math.PI/3,linea.type+1);
	}
	lineas.push(line1);
	lineas.push(line2);
	lineas.push(line3);
	lineas.push(line4);
	printline(line2,'blue');
	printline(line3,'blue');
	eraseline(new line(x+l*cos,y+l*sen,l,theta));
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
}

function eraseline(line){
	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');
	ctx.save();
	ctx.translate(line.x,line.y);
	ctx.rotate(line.theta);
	ctx.clearRect(1,-1,line.l-2,2);
	ctx.restore();	
}