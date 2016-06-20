window.onload = init;

function init(){
	var canvas = document.getElementById("mycanvas");
	canvas.width = 1000*2;
	canvas.height = 1000*2;
	var cont = canvas.getContext('2d');
	var originalsquare = new square(0,0,1000*2,1000*2);
	var listsquares = [];
	listsquares.push(originalsquare);
	cont.strokeRect(originalsquare.x,originalsquare.y,originalsquare.w,originalsquare.h);
	for(var i=0;i<8;i++){
		var newsquares = []
		console.log(listsquares);
		for(s in listsquares){
			generatesquares(listsquares[s],newsquares);
		}
		listsquares = newsquares;
	}
};

var generatesquares = function(s,list){
	var x = s.x;
	var y = s.y;
	var w = s.w/3;
	var h = s.h/3;
	list.push(new square(x,y,w,h));
	list.push(new square(x+w,y,w,h));
	list.push(new square(x+2*w,y,w,h));
	list.push(new square(x,y+h,w,h));
	list.push(new square(x+2*w,y+h,w,h));
	list.push(new square(x,y+2*h,w,h));
	list.push(new square(x+w,y+2*h,w,h));
	list.push(new square(x+2*w,y+2*h,w,h));
	//Print the square in the middle
	var cont = document.getElementById('mycanvas').getContext('2d');
	cont.fillRect(x+w,y+h,w,h);
	return list;
};

function square(x,y, weight, height){
	this.x = x;
	this.y = y;
	this.w = weight;
	this.h = height;
};