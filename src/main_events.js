var fullsize = document.getElementById("fullsize");
var isVisible = true;
var bg_container = document.getElementById("bg_container");

var exit = document.getElementById("exit");

function setCookie(name, value, exp) {
  var date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

fullsize.addEventListener("click", function () {
  bg_container.style.visibility = "hidden";
  isVisible = false;
});

exit.addEventListener("click", function () {
  window.location.reload();
  console.log(1);
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
