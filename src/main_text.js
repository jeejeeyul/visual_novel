import { stories } from "./story1.js";

var conversation_box = document.getElementById("conversation_box");
var name_box = document.getElementById("name_box");
var bg = document.getElementById("bg");
var bg_container = document.getElementById("bg_container");
var character_box = document.getElementById("character_box");

if (getCookie("storynumber") == null) {
  setCookie("storynumber", 0, 1);
}

function setCookie(name, value, exp) {
  var date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

function getCookie(name) {
  var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : null;
}

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

  getCharacter() {
    if (
      typeof this.story[this.i].character == "string" &&
      this.story[this.i].character.length > 0
    ) {
      character_box.innerHTML = "";
      character_box.innerHTML = `<img id=character src=${
        this.story[this.i].character
      } />`;
    }
  }

  intervals() {
    console.log(Number(getCookie("storynumber")) + 1);
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

if (getCookie("storynumber") == "0") {
  var getone = new GetOnestep(stories[Number(getCookie("storynumber"))]);
}

bg_container.addEventListener(
  "click",
  function () {
    if (getone.i + 1 == getone.story.length) {
      setCookie("storynumber", Number(getCookie("storynumber")) + 1, 1);
      getone = new GetOnestep(stories[Number(getCookie("storynumber"))]);
    }
    if (getone.isInterval == false) {
      getone.getNames();
      getone.getBackgroundimage();
      getone.intervals();
      getone.getCharacter();
    } else {
      getone.isSkip = true;
    }
  },
  false
);
