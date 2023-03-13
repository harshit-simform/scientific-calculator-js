const screen = document.getElementById("screen");
console.log(screen.value);
console.log("hiii");
const button = document.querySelectorAll(".btn");
console.log(button);
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    var btnText = btn.innerText;
    switch (btnText) {
      case "\u00F7":
        btnText = "/";
        break;
      case "\u2A09":
        btnText = "*";
        break;
      case "mod":
        btnText = "%";
        break;
      case "xy":
        btnText = "^";
        break;
    }
    screen.value += btnText;
    console.log(screen.value);
  });
});

function finalAnswer(value) {
  if (value.includes("^")) {
    value = value.replace("^", "**");
  }
  screen.value = eval(value);
}
