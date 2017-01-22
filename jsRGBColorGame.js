//this file was created in the command line
//alert("JS file Connected!");
var isHard;
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;

		if(clickedColor === pickedColor){
			alert(`Correct! You clicked on ${pickedColor}!`);
			messageDisplay.textContent = "Correct! Awesome Eye!"
			changeToWinningColor(clickedColor);
			resetButton.textContent = "Play Again?"
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

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(numberOfColors){
	var red;
	var green;
	var blue;
	var newColor;
	var numberOfColorsArray = [];
	for(let i = 0; i < numberOfColors; i++){
		red = Math.floor(Math.random() * 256);
		green = Math.floor(Math.random() * 256);
		blue = Math.floor(Math.random() * 256);
		//newColor = `rgb(${red}, ${green}, ${blue})`;
		newColor = "rgb("+ red + ", "+ green + ", " + blue +")";
		numberOfColorsArray.push(newColor);
	}
	return numberOfColorsArray;
	
}