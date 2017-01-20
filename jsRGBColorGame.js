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
let h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;

		if(clickedColor === pickedColor){
			alert(`Correct! You clicked on ${pickedColor}!`);
			messageDisplay.textContent = "Correct! Awesome Eye!"
			changeToWinningColor(clickedColor);
		}else{
			alert(`Try again. You clicked color ${clickedColor}`);
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"; 
		}
		//grab color of clicked square
	});
}

function changeToWinningColor(color){
	for(let a = 0; a < squares.length; a++){
		squares[a].style.background = color;
	}
	h1.style.background = color;
}