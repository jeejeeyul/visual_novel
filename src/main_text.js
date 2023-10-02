import { story1 } from "./story1.js";

var conversation_box = document.getElementById("conversation_box");
var name_box = document.getElementById("name_box");
var bg = document.getElementById("bg");
var bg_container = document.getElementById("bg_container");

class GetOnestep {
  constructor(story) {
    this.story = story;
    this.i = 0;
    this.j = 0;
    this.isInterval = false;
    this.isSkip = false;
  }

  getBackgroundimage() {
    console.log(typeof this.story[this.i].bg);
    if (typeof this.story[this.i].bg == "string") {
      bg.style.backgroundImage = `url(${this.story[this.i].bg})`;
    }
  }

  getNames() {
    name_box.textContent = "";
    name_box.textContent = this.story[this.i].names;
  }

  intervals() {
    this.isInterval = true;
    this.isSkip = false;
    var a = setInterval(() => {
      if (this.isSkip == true) {
        conversation_box.textContent =
          conversation_box.textContent +
          this.story[this.i].lines.slice(
            this.j,
            this.story[this.i].lines.length
          );
        clearInterval(a);
        this.isInterval = false;
        this.j = 0;
        this.i++;
      } else if (this.j < this.story[this.i].lines.length) {
        conversation_box.textContent =
          conversation_box.textContent + this.story[this.i].lines[this.j];
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

bg_container.addEventListener(
  "click",
  function () {
    if (getone.isInterval == false) {
      getone.getNames();
      getone.getBackgroundimage();
      conversation_box.textContent = "";
      getone.intervals();
    } else {
      getone.isSkip = true;
    }
  },
  false
);
