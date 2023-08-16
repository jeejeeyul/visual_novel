import { story1 } from "./story1.js";

var main_text = document.getElementById("main_text");
var i = 0;
window.addEventListener("click", function () {
  if (story1.length != i) {
    main_text.textContent = "";

    main_text.append(story1[i]);
    i++;
  }
});
