var screen = document.getElementById("screen");
var data = {
  screen: [],
  operation: [],
};
var flag = false;

const button = document.querySelectorAll(".btn");
console.log(button);
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    var btnText = btn.innerText;
    let operation = btn.innerText;
    switch (btnText) {
      case "\u00F7":
        btnText = "/";
        operation = "/";
        break;
      case "\u2A09":
        btnText = "*";
        operation = "*";
        break;
      case "mod":
        btnText = "%";
        operation = "%";
        break;
      case "xy":
        btnText = "^";
        operation = "**";
        break;
      case "sin":
        btnText = "sin(";
        operation = "Math.sin(";
        break;
      case "cos":
        btnText = "cos(";
        operation = "Math.cos(";
        break;
      case "tan":
        btnText = "tan(";
        operation = "Math.tan(";
        break;
      case "cosec":
        btnText = "cosec(";
        operation = "Math.cosec(";
        break;
      case "sec":
        btnText = "sec(";
        operation = "Math.sec(";
        break;
      case "cot":
        btnText = "cot(";
        operation = "Math.cot(";
        break;
      case "log":
        btnText = "log(";
        operation = "Math.log10(";
        break;
      case "ln":
        btnText = "ln(";
        operation = "Math.log(";
        break;
      case "\u03C0":
        btnText = "\u03C0";
        operation = "Math.PI";
      case "e":
        btnText = "e";
        operation = "Math.E";
      case "\u221A":
        btnText = "\u221A(";
        operation = "Math.sqrt(";
    }
    data.operation.push(operation);
    data.screen.push(btnText);
    screen.value = data.screen.join("");
    console.log(data.screen);
    console.log(data.operation);
  });
});

function finalAnswer() {
  try {
    let value = eval(data.operation.join(""));
    console.log(value, "vlaue here");
    data.operation = [value];
    data.screen = [value];
    console.log(data.operation, data.screen, "infinal");
    screen.value = value;
  } catch {
    data.operation = [];
    data.screen = [];
    screen.value = "Invalid Syntax";
  }
}
function clearScreen() {
  console.log("in clear");
  data.operation = [];
  data.screen = [];
  console.log(data.operation);
  console.log(data.screen);
  screen.value = "";
}
function toggle() {
  flag = !flag;
  if (flag) {
    document.getElementById("trigo_function").style.display = "block";
  } else {
    document.getElementById("trigo_function").style.display = "none";
  }
}
function backFunction() {
  data.operation.pop();
  data.screen.pop();
  console.log(data.operation, "in back");
  console.log(data.screen, "in back");
  screen.value = data.screen.join("");
}
