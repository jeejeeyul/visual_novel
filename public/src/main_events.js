var fullsize = document.getElementById("fullsize");
var isVisible = true;
var bg_container = document.getElementById("bg_container");

fullsize.addEventListener("click", function () {
  bg_container.style.visibility = "hidden";
  isVisible = false;
});

window.addEventListener(
  "click",
  function () {
    if (isVisible == false) {
      isVisible = true;
      bg_container.style.visibility = "visible";
    }
  },
  true
);
