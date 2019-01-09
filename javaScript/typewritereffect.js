
var i =0;
var txt = "Developer, Sound Designer, Student.";
var speed = 50;

function typeWriter(){
	
	if(i < txt.length){
		document.getElementById("tWEffect").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter,speed);
	}
}
