var sound1 = document.getElementById('sound1');
var sound2 = document.getElementById('sound2');
var sound3 = document.getElementById('sound3');
var sound4 = document.getElementById('sound4');
var sound5 = document.getElementById('sound5');
var sound6 = document.getElementById('sound6');
var sound7 = document.getElementById('sound7');
var sound8 = document.getElementById('sound8');
var loop = false;
var loop2 = true;
var loop3 = true;
var loop4 = true;
var loop5 = true;
var loop6 = true;
var loop7 = true;
var loop8 = true;

var playback21 = document.getElementById('playback21');
var playback22 = document.getElementById('playback22');
var playbackRate2 = 1;

function playSound1() {
	var sound = document.getElementById('audiosound1');
	sound.play();
}

function playSound2() {
	var sound = document.getElementById('audiosound2');
	sound.play();
	sound.loop = loop2;
	if (loop2 == true) {
		loop2 = false;
	}else{
		loop2 = true;
	}
}

function playSound3() {
	var sound = document.getElementById('audiosound3');
	sound.play();
	sound.loop = loop3;
	if (loop3 == true) {
		loop3 = false;
	}else{
		loop3 = true;
	}
}

function playSound4() {
	var sound = document.getElementById('audiosound4');
	sound.play();
	sound.loop = loop4;
	if (loop4 == true) {
		loop4 = false;
	}else{
		loop4 = true;
	}
}

function playSound5() {
	var sound = document.getElementById('audiosound5');
	sound.play();
	sound.loop = loop5;
	if (loop5 == true) {
		loop5 = false;
	}else{
		loop5 = true;
	}
}

function playSound6() {
	var sound = document.getElementById('audiosound6');
	sound.play();
	sound.loop = loop6;
	if (loop6 == true) {
		loop6 = false;
	}else{
		loop6 = true;
	}
}

function playSound7() {
	var sound = document.getElementById('audiosound7');
	sound.play();
	sound.loop = loop7;
	if (loop7 == true) {
		loop7 = false;
	}else{
		loop7 = true;
	}
}

function playSound8() {
	var sound = document.getElementById('audiosound8');
	sound.play();
	sound.loop = loop8;
	if (loop8 == true) {
		loop8 = false;
	}else{
		loop8 = true;
	}
}

window.addEventListener('keydown', playSound1);
sound2.addEventListener('click', playSound2);
sound3.addEventListener('click', playSound3);
sound4.addEventListener('click', playSound4);
sound5.addEventListener('click', playSound5);
sound6.addEventListener('click', playSound6);
sound7.addEventListener('click', playSound7);
sound8.addEventListener('click', playSound8);
playback21.addEventListener('click', function(){
playbackRate2 = playbackRate2 + 0.5;
var sound = document.getElementsByClassName('sound2');
sound.playbackRate = playbackRate2;
console.log(playbackRate2)
})
playback22.addEventListener('click', function(){
playbackRate2 = playbackRate2 - 0.5;
var sound = document.getElementsByClassName('sound2');
sound.playbackRate = playbackRate2;
console.log(playbackRate2)
})