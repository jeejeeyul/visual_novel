import { story1 } from "./story1.js";

var conversation_box = document.getElementById("conversation_box");
var bg = document.getElementById("bg");
var i = 0;
var j = 0;
var isInterval = false;

class GetOnestep {
  constructor(story) {
    this.story = story;
    this.i = 0;
    this.j = 0;
    this.isInterval = false;
  }

  intervals() {
    this.isInterval = true;
    var a = setInterval(() => {
      if (this.j < this.story[this.i].length) {
        conversation_box.textContent =
          conversation_box.textContent + this.story[this.i][this.j];
        this.j++;
      } else {
        this.i++;
        this.j = 0;
        this.isInterval = false;
        clearInterval(a);
      }
    }, 100);
  }
}

var getone = new GetOnestep(story1);

window.addEventListener("click", function () {
  if (getone.isInterval == false) {
    conversation_box.textContent = "";
    getone.intervals();
  }
});
