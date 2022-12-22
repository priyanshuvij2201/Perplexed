//This is the paragraph for displaying current note

var current_note = document.getElementById("current");

//These are the variables containing sounds

//These are octave 2 notes and sounds in variables

var C_octave2 = new Audio("notes/octave2/Piano.ff.C2.mp3");
var C_sharp_octave2 = new Audio("notes/octave2/Piano.ff.Db2.mp3");
var D_octave2 = new Audio("notes/octave2/Piano.ff.D2.mp3");
var D_sharp_octave2 = new Audio("notes/octave2/Piano.ff.Eb2.mp3");
var E_octave2 = new Audio("notes/octave2/Piano.ff.E2.mp3");
var F_octave2 = new Audio("notes/octave2/Piano.ff.F2.mp3");
var F_sharp_octave2 = new Audio("notes/octave2/Piano.ff.Gb2.mp3");
var G_octave2 = new Audio("notes/octave2/Piano.ff.G2.mp3");
var G_sharp_octave2 = new Audio("notes/octave2/Piano.ff.Ab2.mp3");
var A_octave2 = new Audio("notes/octave2/Piano.ff.A2.mp3");
var A_sharp_octave2 = new Audio("notes/octave2/Piano.ff.Ab2.mp3");
var B_octave2 = new Audio("notes/octave2/Piano.ff.B2.mp3");

//These are octave 4 notes and sounds in variables

var C_octave4 = new Audio("notes/octave4/Piano.ff.C4.mp3");
var C_sharp_octave4 = new Audio("notes/octave4/Piano.ff.Db4.mp3");
var D_octave4 = new Audio("notes/octave4/Piano.ff.D4.mp3");
var D_sharp_octave4 = new Audio("notes/octave4/Piano.ff.Eb4.mp3");
var E_octave4 = new Audio("notes/octave4/Piano.ff.E4.mp3");
var F_octave4 = new Audio("notes/octave4/Piano.ff.F4.mp3");
var F_sharp_octave4 = new Audio("notes/octave4/Piano.ff.Gb4.mp3");
var G_octave4 = new Audio("notes/octave4/Piano.ff.G4.mp3");
var G_sharp_octave4 = new Audio("notes/octave4/Piano.ff.Ab4.mp3");
var A_octave4 = new Audio("notes/octave4/Piano.ff.A4.mp3");
var A_sharp_octave4 = new Audio("notes/octave4/Piano.ff.Ab4.mp3");
var B_octave4 = new Audio("notes/octave4/Piano.ff.B4.mp3");

//This is the function to play the sound on pressing a key for octave 2 and 4

window.onkeydown = function(event) {
   if (event.keyCode === 81) {
      C_octave2.play();
      current_note.textContent= "C";
   }
   else if (event.keyCode === 87) {
      C_sharp_octave2.play();
      current_note.textContent= "C#";
   }
   else if (event.keyCode === 69) {
      D_octave2.play();
      current_note.textContent= "D";
   }
   else if (event.keyCode === 82) {
      D_sharp_octave2.play();
      current_note.textContent= "D#";
   }
   else if (event.keyCode === 84) {
      E_octave2.play();
      current_note.textContent= "E";
   }
   else if (event.keyCode === 89) {
      F_octave2.play();
      current_note.textContent= "F";
   }
   else if (event.keyCode === 85) {
      F_sharp_octave2.play();
      current_note.textContent= "F#";
   }
   else if (event.keyCode === 73) {
      G_octave2.play();
      current_note.textContent= "G";
   }
   else if (event.keyCode === 79) {
      G_sharp_octave2.play();
      current_note.textContent= "G#";
   }
   else if (event.keyCode === 80) {
      A_octave2.play();
      current_note.textContent= "A";
   }
   else if (event.keyCode === 65) {
      A_sharp_octave2.play();
      current_note.textContent= "A#";
   }
   else if (event.keyCode === 83) {
      B_octave2.play();
      current_note.textContent= "B";
   }
   else if (event.keyCode === 68) {
      C_octave4.play();
      current_note.textContent= "C";
   }
   else if (event.keyCode === 70) {
      C_sharp_octave4.play();
      current_note.textContent= "C#";
   }
   else if (event.keyCode === 71) {
      D_octave4.play();
      current_note.textContent= "D";
   }
   else if (event.keyCode === 72) {
      D_sharp_octave4.play();
      current_note.textContent= "D#";
   }
   else if (event.keyCode === 74) {
      E_octave4.play();
      current_note.textContent= "E";
   }
   else if (event.keyCode === 75) {
      F_octave4.play();
      current_note.textContent= "F";
   }
   else if (event.keyCode === 76) {
      F_sharp_octave4.play();
      current_note.textContent= "F#";
   }
   else if (event.keyCode === 90) {
      G_octave4.play();
      current_note.textContent= "G";
   }
   else if (event.keyCode === 88) {
      G_sharp_octave4.play();
      current_note.textContent= "G#";
   }
   else if (event.keyCode === 67) {
      A_octave4.play();
      current_note.textContent= "A";
   }
   else if (event.keyCode === 86) {
      A_sharp_octave4.play();
      current_note.textContent= "A#";
   }
   else if (event.keyCode === 66) {
      B_octave4.play();
      current_note.textContent= "B";
   }
};

//This is the function to stop the sound on releasing the key for ocatve 2 and 4

window.onkeyup = function(event) {
   if (event.keyCode === 81) {
      C_octave2.pause();
      C_octave2.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 87) {
      C_sharp_octave2.pause();
      C_sharp_octave2.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 69) {
      D_octave2.pause();
      D_octave2.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 82) {
      D_sharp_octave2.pause();
      D_sharp_octave2.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 84) {
      E_octave2.pause();
      E_octave2.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 89) {
      F_octave2.pause();
      F_octave2.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 85) {
      F_sharp_octave2.pause();
      F_sharp_octave2.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 73) {
      G_octave2.pause();
      G_octave2.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 79) {
      G_sharp_octave2.pause();
      G_sharp_octave2.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 80) {
      A_octave2.pause();
      A_octave2.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 65) {
      A_sharp_octave2.pause();
      A_sharp_octave2.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 83) {
      B_octave2.pause();
      B_octave2.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 68) {
      C_octave4.pause();
      C_octave4.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 70) {
      C_sharp_octave4.pause();
      C_sharp_octave4.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 71) {
      D_octave4.pause();
      D_octave4.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 72) {
      D_sharp_octave4.pause();
      D_sharp_octave4.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 74) {
      E_octave4.pause();
      E_octave4.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 75) {
      F_octave4.pause();
      F_octave4.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 76) {
      F_sharp_octave4.pause();
      F_sharp_octave4.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 90) {
      G_octave4.pause();
      G_octave4.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 88) {
      G_sharp_octave4.pause();
      G_sharp_octave4.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 67) {
      A_octave4.pause();
      A_octave4.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 86) {
      A_sharp_octave4.pause();
      A_sharp_octave4.currentTime = 0;
      current_note.textContent= "";
   }
   else if (event.keyCode === 66) {
      B_octave4.pause();
      B_octave4.currentTime = 0;
      current_note.textContent= "";
   }
};

/* KEYCODES 
======================
0 ========== 48
1 ========== 49
2 ========== 50
3 ========== 51
4 ========== 52
5 ========== 53
6 ========== 54
7 ========== 55
8 ========== 56
9 ========== 57
q ========== 81
w ========== 87
e ========== 69
r ========== 82
t ========== 84
y ========== 89
u ========== 85
i ========== 73
o ========== 79
p ========== 80
a ========== 65
s ========== 83
d ========== 68
f ========== 70
g ========== 71
h ========== 72
j ========== 74
k ========== 75
l ========== 76
z ========== 90
x ========== 88
c ========== 67
v ========== 86
b ========== 66
n ========== 78
m ========== 77
*/