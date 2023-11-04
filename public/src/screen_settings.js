var screen_sizing = document.getElementById("screen_sizing");

var window_height = window.innerHeight;
var window_width = (window_height / 16) * 9;
console.log();
screen_sizing.style.position = "fixed";
console.log(window_height);
console.log(window_width);
function sizing() {
  if (
    window.innerHeight < window.innerWidth ||
    (window.innerHeight / 16) * 9 < window.innerWidth
  ) {
    var window_height = window.innerHeight;
    var window_width = (window_height / 16) * 9;
    screen_sizing.style.height = `${window_height}px`;
    screen_sizing.style.width = `${window_width}px`;
    screen_sizing.style.left = `${(window.innerWidth - window_width) / 2}px`;
    screen_sizing.style.fontSize = `${window_height / 35}px`;
  } else {
    var window_height = window.innerHeight;
    screen_sizing.style.height = `100%`;
    screen_sizing.style.width = `100%`;
    screen_sizing.style.left = 0;
    screen_sizing.style.fontSize = `${window_height / 37}px`;
  }
}

sizing();

window.addEventListener("resize", sizing);
