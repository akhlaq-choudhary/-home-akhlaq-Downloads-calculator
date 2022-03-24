'use strict';
var display = document.getElementById("numb"); // displayer number
	var  button = new Array()
for (let i = 0; i < 10;i++ ) {
	button[i] = document.getElementById(String(i));
}
let myfun= event => {
	button = event.target;
	display.value += button.innerHTML;
}

button.forEach(function(num) 
	{num.onclick = myfun;});

function allclear(event) {
var key = event.keyCode || event.which;
	if (key === 99) {
display.value = null;
	}// clear the displayer
}
window.document.addEventListener("keypress",allclear);
var plus = document.getElementById("plus"); // plus sign
plus.addEventListener("click",function() {
display.value += "+";
})
var equal = document.getElementById("equal"); // evaluate the number
equal.addEventListener("click",function() {
try {
display.value = eval(String(display.value.replace(/,/g,'')));
if (Number(display.value) > 999) {
display.value = Number(display.value).toLocaleString();
}
}
catch(e) {
	display.value = e.message;
} 
});
var minus = document.getElementById("minus"); // minus sign
minus.addEventListener("click",function() {
	display.value += "-";
})
var dot = document.getElementById("dot"); // dot sign
dot.addEventListener("click",function() {
	display.value += ".";
})
function keyboard(event) {
var key = event.keyCode || event.which;
 if(key === 13 || key === 61) {
	try {
display.value = eval(String(display.value.replace(/,/g,'')));
if ( Number(display.value) > 999) {
display.value = Number(String(display.value)).toLocaleString();
}
}
catch(e) {
	display.value = e.message;
}
}
else if (key === 112) {
	display.value = String(Math.PI);
}
}
window.document.addEventListener("keypress",keyboard);
var clear = document.getElementById("clear");
clear.addEventListener("click",function() {
	display.value = display.value.slice(0,-1);
})
var multiply = document.getElementById("multiply");
multiply.addEventListener("click",function() {
display.value += "*";
});
var divide = document.getElementById("divide");
divide.addEventListener("click",function() {
display.value += "/";
});
var ac = document.getElementById("ac");
ac.addEventListener("click",function() {
display.value = "";
});
let pi = document.getElementById("pi");

pi.addEventListener("click",function() {
display.value += String(Math.PI);
})
var leftbrac = document.getElementById("leftbracket");
leftbrac.addEventListener("click",function() {display.value += leftbrac.textContent});
var rightbrac = document.getElementById('rightbracket');
rightbrac.addEventListener("click",function() {display.value += rightbrac.textContent})
window.onclick = function() {display.focus();}
