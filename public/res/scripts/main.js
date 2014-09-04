//Canvas foo!

var canvas
var context;
var objects;

var testBubble;

//Mouse and Keyboard
var cursor;
var mousedown = false;

window.onload = function(){
	//Initializers
	canvas = document.getElementById("main-canvas");
	context = canvas.getContext("2d");
	objects = [];
	cursor = {};

	testBubble = new Bubble();
	objects.push(testBubble);

	paint();

	//Listeners
	canvas.addEventListener('mousemove', function(evt) {
		coordinates = getMousePosition(canvas, evt);

		function getMousePosition(canvas, evt){
			var bounds = canvas.getBoundingClientRect();
			return {
				x : evt.clientX - bounds.left,
				y : Math.floor(evt.clientY - bounds.top)
			}
		}
	} , false);

	canvas.addEventListener('mousedown', function(){
		mousedown = true;
	}, false);
	canvas.addEventListener('mouseup', function(){
		mousedown = false;
	}, false)



	function paint(){
		//Clear the canvas
		canvas.width = canvas.width;
		for(var x=0;x<objects.length;x++){
			objects[x].draw(context);
		}
	}


}


