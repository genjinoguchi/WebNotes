//Strings

function DrawString(message, xcor, ycor, fontSize, fill, fontFamily, fontStyle){
	this.message 	= message 	|| "Use a custom message";
	this.xcor		= xcor		|| 100;
	this.ycor		= ycor		|| 100;
	this.fill 		= fill 		|| "black";
	this.fontSize 	= fontSize 	|| "16pt";
	this.fontFamily 	= fontFamily|| "Calibri";
	this.fontStyle 	= fontStyle || "";

	this.draw = function(context){
		context.font = this.fontStyle+" "+this.fontSize+" "+this.fontFamily;
		context.fillStyle = this.fill;
		context.fillText(this.message, this.xcor, this.ycor);
	}
}