//bubble

Bubble = function(xcor, ycor, radius, color){
	this.radius = radius || 100;
	this.xcor = xcor || canvas.width;
	this.ycor = ycor || canvas.height;
	this.color = color || "gray";

	this.objects = [];

	this.draw = function(context){
		context.beginPath();
		context.arc(this.xcor, this.ycor, this.radius, 0, 2 * Math.PI, false);
		context.fillStyle = this.color;
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = '#000000';
		context.stroke();
	}
	this.displace = function(x, y){
		//Remap all of the objects within the bubble.
		this.xcor += x;
		this.ycor += y;

		for(var x=0;x<objects.length;x++){
			objects[x].displace(x,y);
		}

	}
	this.distanceSq = function(x, y){
		return Math.pow((this.xcor-x), 2) + Math.pow((this.ycor-y),2);
	}
}