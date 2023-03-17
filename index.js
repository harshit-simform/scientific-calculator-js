var screen = document.getElementById("screen");
var data = {
  screen: [],
  operation: [],
};
var toggleFlag = {
  trigoFunction: true,
  inverseFunction: true,
  hyperFunction: true,
};
const factorial = (n) => (!(n > 1) ? 1 : factorial(n - 1) * n);
const trigoButton = document.querySelectorAll("#trigo_function .btn");
const button = document.querySelectorAll(".btn");
console.log(button);
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    var btnText = btn.innerText;
    console.log(btnText);
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
      // case "x2":
      //   btnText = `${data.screen[data.screen.length - 1]}${"\00B2"}`;
      //   operation = `Math.pow(${data.operation.pop()},2})`;
      //   break;
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
        break;
      case "e":
        btnText = "e";
        operation = "Math.E";
        break;
      case "x!":
        btnText = "!";
        operation = factorial(data.operation.pop());
        console.log(operation);
        break;
      case "\u221A":
        btnText = "\u221A(";
        operation = "Math.sqrt(";
        break;
      case "sin-1":
        btnText = "arcsin(";
        operation = "Math.asin(";
        break;
      case "cos-1":
        btnText = "arccos(";
        operation = "Math.acos(";
        break;
      case "tan-1":
        btnText = "arctan(";
        operation = "Math.atan(";
        break;
      case "cosec-1":
        btnText = "arccosec(";
        operation = "Math.acosec(";
        break;
      case "sec-1":
        btnText = "arcsec(";
        operation = "Math.asec(";
        break;
      case "cot-1":
        btnText = "arccot(";
        operation = "Math.acot(";
        break;
      case "sinh":
        btnText = "sinh(";
        operation = "Math.sinh(";
        break;
      case "cosh":
        btnText = "cosh(";
        operation = "Math.cosh(";
        break;
      case "tanh":
        btnText = "tanh(";
        operation = "Math.tanh(";
        break;
      case "sech":
        btnText = "sech(";
        operation = "Math.sech(";
        break;
      case "coth":
        btnText = "coth(";
        operation = "Math.coth(";
        break;
      case "cosech":
        btnText = "cosech(";
        operation = "Math.cosech(";
        break;
    }
    data.operation.push(operation);
    data.screen.push(btnText);
    screen.value = data.screen.join("");
    console.log(data.screen);
    console.log(data.operation);
  });
});

function finalAnswer() {
  console.log(data.operation);
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
function toggle(value) {
  let trigoObject = {
    sin: ["sin<sup>-1</sup>", "sin-1", "sinh"],
    cos: ["cos<sup>-1</sup>", "cos-1", "cosh"],
    tan: ["tan<sup>-1</sup>", "tan-1", "tanh"],
    sec: ["sec<sup>-1</sup>", "sec-1", "sech"],
    cot: ["cot<sup>-1</sup>", "cot-1", "coth"],
    cosec: ["cosec<sup>-1</sup>", "cosec-1", "cosech"],
    hyp: ["hyp", "hyp", "hyp"],
  };
  console.log(value);
  if (value == "trigoToggle") {
    trigoButton.forEach((btn) => {
      let btnText = btn.innerText;
      let btnTextReplacement = btn.innerText;
      if (toggleFlag.inverseFunction) {
        btnTextReplacement = trigoObject.hasOwnProperty(`${btnText}`)
          ? trigoObject[btnText][0]
          : btnText;
      } else {
        console.log(btnText);
        btnTextReplacement = Object.keys(trigoObject).find(
          (key) => trigoObject[key][1] === btnText
        );
      }
      btn.innerHTML = btnTextReplacement;
    });
    toggleFlag.inverseFunction = !toggleFlag.inverseFunction;
    return;
  } else if (value == "hyperToggle") {
    trigoButton.forEach((btn) => {
      let btnText = btn.innerText;
      let btnTextReplacement = btn.innerText;
      if (toggleFlag.hyperFunction) {
        btnTextReplacement = trigoObject.hasOwnProperty(`${btnText}`)
          ? trigoObject[btnText][2]
          : btnText;
      } else {
        console.log(btnText);
        btnTextReplacement = Object.keys(trigoObject).find(
          (key) => trigoObject[key][2] === btnText
        );
      }
      btn.innerHTML = btnTextReplacement;
    });
    toggleFlag.hyperFunction = !toggleFlag.hyperFunction;
    return;
  }

  if (toggleFlag.trigoFunction) {
    document.getElementById("trigo_function").style.display = "block";
    toggleFlag.trigoFunction = !toggleFlag.trigoFunction;
  } else {
    toggleFlag.trigoFunction = !toggleFlag.trigoFunction;
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
console.log(document.querySelectorAll("#trigo_function .btn"));
