// Get name and comment and have a comment showing in the page
// Comment Template Generator
function commentTemplate(name, comment) {
  return (
    "<div>" +
    "<b>Traveller name</b>: " +
    name +
    "</div><br>" +
    "<div>" +
    "<b>Comment</b>: " +
    comment +
    "</div><br>"
  );
}

// Get info from Forms

function renderComment() {
  var name = document.querySelector("#myName").value;
  var comment = document.querySelector("#myComment").value;
  document.querySelector("#comment_card").innerHTML = commentTemplate(
    name,
    comment
  );
}

// Number of Adults and associate promo with them
function AdultPromo() {
  var anumb = parseInt(document.getElementById("adultnum").value);
  if (isNaN(anumb)) {
    anumb = 0;
  }
  if (anumb < 5) {
    return 0;
  } else if (anumb >= 5 && anumb < 10) {
    return 10;
  } else if (anumb >= 10) {
    return 15;
  }
}
// Number of Chils and promo associate with them
function ChildPromo() {
  var anum = parseInt(document.getElementById("adultnum").value);
  var cnum = parseInt(document.getElementById("childnum").value);
  if (isNaN(anum)) {
    anum = 0;
  }
  if (cnum >= anum) {
    return 10;
  }
  return 0;
}

function SeasonPromo() {
  var season = document.getElementById("chooseseason").value;
  if (season == "spr" || season == "aut") {
    return 5;
  } else if (season == "sum") {
    return 0;
  } else if (season == "win") {
    return 10;
  }
}

function CalculatePromo() {
  var promo = AdultPromo() + ChildPromo() + SeasonPromo();
  if (promo != 0) {
    document.getElementById("h401").style.visibility = "visible";
  }
  document.getElementById("discount").innerHTML = promo;
}
