var submit= document.getElementById("submit");

var result1= document.getElementById("result1");

function pythogoras() {
	var hyp= document.getElementById("hypotenuse");
	var perp= document.getElementById("perpendicular");
	var base= document.getElementById("base");
	hyp= hyp.value;
	perp= perp.value;
	base= base.value;
	if (hyp=="" || perp== "" || base== ""){
		result1.textContent= "One or more input is empty";
	}
	else if ((hyp**2)==(base**2)+(perp**2)) {
		result1.textContent= "The following values are pythogorean triplets";
	}
	else if ((hyp**2)!==(base**2)+(perp**2)) {
		result1.textContent= "The following values are not pythogorean triplets";
	}
	else {
		result1.textContent= "Enter something valid";
	}
}

submit.onclick= pythogoras;