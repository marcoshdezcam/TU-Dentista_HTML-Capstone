var prevScrollpos = window.pageYOffset;
var screenWidth = screen.width;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (screenWidth < 576) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar--main").style.top = "0";
      document.getElementById("results--page").style.marginTop = "25vh";
    } else {
      document.getElementById("navbar--main").style.top = "-130px";
      document.getElementById("results--page").style.marginTop = "130px";
  
    }
    prevScrollpos = currentScrollPos;
  }
}
