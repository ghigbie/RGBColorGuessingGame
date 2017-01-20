//this file was created in the command line
//alert("JS file Connected!");

var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)",
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;

		if(clickedColor === pickedColor){
			alert(`Correct! You clicked on ${pickedColor}!`);
			messageDisplay.textContent = "Correct! Awesome Eye!"
		}else{
			alert(`Try again. You clicked color ${clickedColor}`);
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"; 
		}
		//grab color of clicked square
	});
}