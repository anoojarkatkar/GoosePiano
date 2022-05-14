const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

var bgm = new Audio('Sounds/legoosehonk.wav')
var playbgm = 1

function muse() {
	if(playbgm>0){
		bgm.play();
		playbgm = 1 - playbgm;
	}
	else{
		bgm.pause();
		playbgm = 1- playbgm;
	}
}

var dict_white = {
	"z": "c4",
	"x": "d4",
	"c": "e4",
	"v": "f4",
	"b": "g4",
	"n": "a4",
	"m": "b4",
	
	"w": "c5",
	"e": "d5",
	"r": "e5",
	"t": "f5",
	"y": "g5",
	"u": "a5",
	"i": "b5",
	"o": "c6",
	"p": "d6",
	
}

var dict_black = {
	"s": "c_4",
	"d": "d_4",
	"g": "f_4",
	"h": "g_4",
	"j": "a_4",
	
	"3": "c_5",
	"4": "d_5",
	"6": "f_5",
	"7": "g_5",
	"8": "a_5",
	"0": "c_6",
	
}

var notedict = {};

var notenames = Object.values(dict_white).concat(Object.values(dict_black));
for (var i = 0; i < notenames.length; i++){
	notedict[notenames[i]] = new Audio("Sounds/" + notenames[i] + ".wav");
}

function play(note) {
  var audio = notedict[note];
  audio.pause();
  audio.currentTime=0;
  audio.play();
}


document.addEventListener("keypress", function onEvent(event) {
    if (event.key in dict_white) {
	play(dict_white[event.key])}
	else if (event.key in dict_black) {
	play(dict_black[event.key])}
});

document.addEventListener("keydown", function onEvent(event){
	if (event.key in dict_white){
		var elements = document.querySelectorAll('[id='+dict_white[event.key] + ']')
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.background = "#52bf92";
		}
	}else if(event.key in dict_black){
		var elements = document.querySelectorAll('[id='+dict_black[event.key] + ']')
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.background = "#c94942";
			elements[i].style.borderColor= "#c94942";
		}
	}
});

document.addEventListener("keyup", function onEvent(event){
	if (event.key in dict_white){
		var elements = document.querySelectorAll('[id='+dict_white[event.key] + ']')
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.background = "white";
		}
	}else if (event.key in dict_black){
		var elements = document.querySelectorAll('[id='+dict_black[event.key] + ']')
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.background = "black";
			elements[i].style.borderColor = "black";
			
		}
	}
});
