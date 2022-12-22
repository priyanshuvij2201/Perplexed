function randomnum() {
  var g= Math.floor(Math.random()*255);
	return g;
}

function randomcol() {
	var bgcolor= "rgb("+randomnum() +","+ randomnum() +"," +randomnum()+")";
	return bgcolor;
}

var xyz = document.querySelector("#xyz");


for (var y= 0; y<=100; y++) {
	var c= document.createElement("div");
	c.setAttribute("class", "squares");
	xyz.appendChild(c);  
}

var abc= document.getElementsByClassName("squares");

for (var x=0; x<100; x++) {
	abc[x].onclick= function (event) {
			event.target.style.backgroundColor= randomcol();
				}
}
for (var x=0; x<100; x++) {
	abc[x].onmouseout= function (event) {
			event.target.style.backgroundColor= randomcol();
				}
}