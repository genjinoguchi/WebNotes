//Canvas foo!

var canvas
var context;
var objects;

var grayBubble, greenBubble;
var closest;

//Mouse and Keyboard
var mousex=0, mousey=0, prevmousex=0, prevmousey=0;
var mousedown = false;

window.onload = function(){
	//Initializers
	canvas = document.getElementById("main-canvas");
	context = canvas.getContext("2d");
	objects = [];

	grayBubble = new Bubble(100,100,50,"gray");
	greenBubble = new Bubble(500,300,100,"green");
	objects.push(grayBubble);
	objects.push(greenBubble);

	paint();


	//Listeners
	canvas.addEventListener('mousemove', function(evt) {
		 var position = getMousePosition(canvas, evt);
		 prevmousex = mousex;
		 prevmousey = mousey;
		 mousex = position.x;
		 mousey = position.y;

		 console.log(closest)

		 if(mousedown){
		 	if(closest){
		 		//console.log(mousex + "   " + mousey + "    ")
		 		//closest.xcor = mousex;
		 		//closest.ycor = mousey;
		 		//closest.displace(mousex - prevmousex, mousey - prevmousey);
		 		closest.xcor += (mousex - prevmousex);
		 		closest.ycor += (mousey - prevmousey);
		 		paint();
		 	}
		 	else{
		 		for(var x=0;x<objects.length;x++){
		 			objects[x].xcor += (mousex - prevmousex);
		 			objects[x].ycor += (mousey - prevmousey);
		 		}
		 		paint();
		 	}
		 	
		 }

		function getMousePosition(canvas, evt){
			var bounds = canvas.getBoundingClientRect();
			return {
				x : evt.clientX - bounds.left,
				y : evt.clientY - bounds.top
			}
		}
	} , false);

	canvas.addEventListener('mousedown', function(){
		mousedown = true;

		for(var x=0;x<objects.length;x++){
			if(objects[x].distanceSq(mousex, mousey)<Math.pow(objects[x].radius,2)){
				closest = objects[x];
			}
		}

	}, false);
	canvas.addEventListener('mouseup', function(){
		mousedown = false;
		closest = null;
	}, false)



	function paint(){
		//Clear the canvas
		canvas.width = canvas.width;
		for(var x=0;x<objects.length;x++){
			objects[x].draw(context);
		}
	}


}


