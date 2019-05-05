
var display = document.getElementById("displayer"); // displayer number
	var  button = new Array()
for (let i = 0; i < 10;i++ ) {
	button[i] = document.getElementById(String(i));
}
myfun= () => {
	button = event.target;
	display.innerHTML += button.innerHTML;
// function that display button input
}
for (var j = 0; j < 10;j++) {
button[j].onclick = myfun;
}

function allclear(event) {
var key = event.keyCode || event.which;
	if (key === 99) {
display.innerHTML = null;
	}// clear the displayer
}
window.document.addEventListener("keypress",allclear);
var plus = document.getElementById("plus"); // plus sign
plus.addEventListener("click",function() {
displayer.innerHTML += "+";
})
var equal = document.getElementById("equal"); // evaluate the number
equal.addEventListener("click",function() {
	try {
		display.innerHTML = eval(String(display.innerHTML));
	display.innerHTML;
}
catch(e) {
	display.innerHTML = e.message;
} 
});
var minus = document.getElementById("minus"); // minus sign
minus.addEventListener("click",function() {
	display.innerHTML += "-";
})
var dot = document.getElementById("dot"); // dot sign
dot.addEventListener("click",function() {
	display.innerHTML += ".";
})
function keyboard(event) {
var key = event.keyCode || event.which;
	for(var c = 40;c < 58;c++)
if (key === c) {
	
display.innerHTML += String.fromCharCode(c);

}
else if (key === 13 || key === 61) {
	// evaluate if press enter or equal
	try {
 display.innerHTML = eval(String(display.innerHTML));
	display.innerHTML;
}
catch(e) {
	display.innerHTML = e.message;
}
}
else if (key == 112) {
	display.innerHTML = String(Math.PI);
}
}
window.document.addEventListener("keypress",keyboard);
var clear = document.getElementById("clear");
clear.addEventListener("click",function() {
	display.innerHTML = display.innerHTML.slice(0,-1);
})
var multiply = document.getElementById("multiply");
multiply.addEventListener("click",function() {
display.innerHTML += "*";
});
var divide = document.getElementById("divide");
divide.addEventListener("click",function() {
display.innerHTML += "/";
});
var ac = document.getElementById("ac");
ac.addEventListener("click",function() {
display.innerHTML = "";
});
window.addEventListener("keydown",function(e) {
mykeycode = e.keyCode;
	if (mykeycode === 8) {
	display.innerHTML = display.innerHTML.slice(0,-1);
	}
});// now you can clear one number at a time
let pi = document.getElementById("pi");

pi.addEventListener("click",function() {
display.innerHTML += String(Math.PI);
})
var leftbrac = document.getElementById("leftbracket");
leftbrac.addEventListener("click",function() {display.innerHTML += leftbrac.textContent});
var rightbrac = document.getElementById('rightbracket');
rightbrac.addEventListener("click",function() {display.innerHTML += rightbrac.textContent})
