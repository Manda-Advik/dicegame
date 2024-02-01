var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomdiceimg1 = "images/" + "dice" + randomnumber1 + ".png";
var randomdiceimg2 = "images/" + "dice" + randomnumber2 + ".png";

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", randomdiceimg1);
img2.setAttribute("src", randomdiceimg2);

var newname = document.querySelector("h1");

if (randomnumber1 == randomnumber2) {
  newname.innerHTML = "Draw";
}
if (randomnumber1 > randomnumber2) {
  newname.innerHTML = "piggy1 Wins";
}
if (randomnumber1 < randomnumber2) {
  newname.innerHTML = "piggy2 wins";
}
