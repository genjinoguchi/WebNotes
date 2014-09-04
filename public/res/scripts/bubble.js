//bubble

Bubble = function(xcor, ycor, radius){
	this.radius = radius || 100;
	this.xcor = xcor || 300;
	this.ycor = ycor || 300;

	this.draw = function(context){
	var centerX = 300
      var centerY = 300;
      var radius = 70;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'gray';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();
	}
}