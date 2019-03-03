function hamburgermenu(x) {
  var x = document.getElementById("myNavbar");
  if (x.className == "navbar") {
    x.className += " responsive";
    x.classList.toggle("change");
  } else {
    x.className = "navbar";
  }
}
