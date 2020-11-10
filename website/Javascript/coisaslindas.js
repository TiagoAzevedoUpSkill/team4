// Get name and comment and have a comment showing in the page
// Comment Template Generator
function commentTemplate() {}

// Get info from Forms
function getName() {
  console.log("Olá!");
  document.querySelector("#text_name").innerHTML = document.querySelector(
    "#myName"
  ).value;
}

function getComment() {
  document.querySelector("#text_comment").innerHTML = document.querySelector(
    "#myComment"
  ).value;
}






















// Number of Adults and associate promo with them
function AdultPromo(){
  var anumb = parseInt(document.getElementById("adultnum").value);
  if (anumb >= 5 && anumb < 10){
    return 10;
  } else if (anumb >= 10){
    return 15;
  }
}
// Number of Chils and promo associate with them
function ChildPromo(){
  var anum = parseInt(document.getElementById("adultnum").value);
  var cnum = parseInt(document.getElementById("childnum").value);
  while (cnum > anum ){
    return 10;
  }
}

function SeasonPromo(){
  var season = document.getElementById('chooseseason').value;
  if (season == "spr" || season == "aut"){
    return 5;
  } else if (season == "sum") {
    return 0;
  } else if (season == "win"){
    return 10;
  }
}

function CalculatePromo(){
  var promo = AdultPromo() + ChildPromo() + SeasonPromo();
  document.getElementById('discount').innerHTML = promo;
}
