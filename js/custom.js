var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar--main").style.top = "0";
  } else {
    document.getElementById("navbar--main").style.top = "-110px";
    document.getElementById("results--page").style.top = "-110px";

  }
  prevScrollpos = currentScrollPos;
} 