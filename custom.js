/* 
////*** COLOR CHANGE IN BETWEEN ARRAY COLORS  ****
****************************************************

const colorButton = document.querySelector('.btnColor');
const bodyBackground = document.querySelector('body');

const colors = ["red","green","yellow","purple","#3b5998"];

colorButton.addEventListener('click',changeColor);

function changeColor(){
	//bodyBackground.style.backgroundColor = colors[4];
	let random = Math.floor(Math.random()*colors.length);
	bodyBackground.style.backgroundColor = colors[random];
}

*/


const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const colorButton = document.querySelector('.btnColor');
const bodyBackground = document.querySelector('body');
const hexCode = document.querySelector('.hexCode');

colorButton.addEventListener('click',changeHexColor);

function changeHexColor(){
	let hexColor = '#';
	for(var i =0; i<6; i++){
		let random = Math.floor(Math.random()*hexNumbers.length);
		hexColor += hexNumbers[random];
	}

	bodyBackground.style.backgroundColor = hexColor;
	hexCode.innerHTML = hexColor;
}