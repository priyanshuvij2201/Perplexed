var submit= document.querySelector(".guessSubmit");
var result= document.getElementById("result");
function check() {

	var a= document.querySelector("#inp");
	var b= (a.value);
	var n= b;
	var c= 0;
	if (b == "") {
			result.textContent="The input is empty";
		}
	else {
		while(b>0) { 	
				c= (c*10)+b%10;
				b= parseInt(b/10);
			}
			if(c==n) {
				result.textContent="The entered number is palindrome";
			}
			else {
				result.textContent="The entered number is not palindrome";
			} 
	}
}
submit.onclick= check;