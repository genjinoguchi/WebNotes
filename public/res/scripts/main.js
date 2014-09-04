//Canvas foo!

var canvas
var context;
var objects;
var coordinates;

window.onload = function(){
	//Initializers
	canvas = document.getElementById("main-canvas");
	context = canvas.getContext("2d");
	objects = [];

	coordinates = new DrawString();
	objects.push(coordinates);


	//Listeners
	canvas.addEventListener('mousemove', function(evt) {
		canvas.width = canvas.width;
		var position = getMousePosition(canvas, evt);
		coordinates.message = position.x+"            "+position.y;
		paint();

		function getMousePosition(canvas, evt){
			var bounds = canvas.getBoundingClientRect();
			return {
				x : evt.clientX - bounds.left,
				y : Math.floor(evt.clientY - bounds.top)
			}
		}
	} , false);

	function paint(){
		//Clear the canvas
		canvas.width = canvas.width;
		for(var x=0;x<objects.length;x++){
			objects[x].draw(context);
		}
	}


}


