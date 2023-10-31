import { story1, story2, story3, story4 } from "./story1.js";

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
    if (
      typeof this.story[this.i].bg == "string" &&
      this.story[this.i].bg.length > 0
    ) {
      bg.style.backgroundImage = `url(${this.story[this.i].bg})`;
    }
  }

  getNames() {
    if (typeof this.story[this.i].names == "string") {
      if (this.story[this.i].names.length > 0) {
        name_box.textContent = "";
      }
      name_box.textContent = this.story[this.i].names;
    }
  }

  intervals() {
    if (typeof this.story[this.i].lines == "string") {
      conversation_box.textContent = "";
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
      }, 80);
    }
  }
}

var getone = new GetOnestep(story4);

bg_container.addEventListener(
  "click",
  function () {
    if (getone.isInterval == false) {
      getone.getNames();
      getone.getBackgroundimage();
      getone.intervals();
    } else {
      getone.isSkip = true;
    }
  },
  false
);
