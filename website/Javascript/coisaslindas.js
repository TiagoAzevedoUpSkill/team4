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
