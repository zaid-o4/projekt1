$(".baseBN").on('click', start)

function start() {
var A1 = genreateRun();
var A2 = genreateRun();
var A3 = OOO(A1 , A2);
var A4 = jjj(A1 , A2);
var A5 = jjj2(A1 , A2);
var A6 = bbb(A1 , A2)
$("#first").attr('src' , 'PHOTO/'+A1+'.png');
$("#second").attr('src' , 'PHOTO/'+A2+'.png');
$(".baseH1").text(A3);
$("#first").attr('class', 'white ' + A4);
$("#second").attr('class', 'white ' + A5);
var audio = new Audio('AUDIO/'+A6+'.mp3');
audio.play();
}

function genreateRun() {
var R = Math.floor((Math.random() * 6))+1
return R
}

function OOO(A1,A2) {
  var win = "";
  if (A1 > A2) {
    win = "الفائز هو اللاعب الاول"
  }
  else if (A1===A2){
    win ="تعادل"
  }
  else if (A1 < A2){
    win ="الفائز هو اللاعب الثاني"
  }
  return win
}

function jjj(A1,A2) {
var wqa = "";
if (A1 > A2) {
wqa = 'green'
}
else if (A1 === A2){
  wqa = 'red'
}
else if (A1 < A2){
  wqa = 'white'
}
  return wqa
}

function jjj2(A1,A2) {
var wqa2 = "";
  if (A2 > A1) {
wqa2 = 'green'
}
else if (A2 === A1){
  wqa2 = 'red'
}
else if (A2 < A1){
  wqa2 = 'white'
}
  return wqa2
}

function bbb(A1,A2) {
  var A ="";
  if (A1 === A2) {
    A = 'same'
  }
  else {
    A = 'win'
  }
  return A
}
