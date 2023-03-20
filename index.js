var screen = document.getElementById("screen");
var data = {
  screen: [],
  operation: [],
};
var toggleFlag = {
  trigoFunction: true,
  inverseFunction: true,
  hyperFunction: true,
  radian: true,
  absFlag: true,
  functionToggle: true,
};
var memory = "";
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
      case "x2":
        btnText = `${data.screen.pop()}^2`;
        operation = `Math.pow(${data.operation.pop()},2)`;
        break;
      case "sin":
        btnText = "sin(";
        operation = "trigonometryValue(Math.sin,";
        break;
      case "cos":
        btnText = "cos(";
        operation = "trigonometryValue(Math.cos,";
        break;
      case "tan":
        btnText = "tan(";
        operation = "trigonometryValue(Math.tan,";
        break;
      case "cosec":
        btnText = "cosec(";
        operation = "trigonometryValue('Math.cosec',";
        break;
      case "sec":
        btnText = "sec(";
        operation = "trigonometryValue('Math.sec',";
        break;
      case "cot":
        btnText = "cot(";
        operation = "trigonometryValue('Math.cot',";
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
        operation = "inverseTrigoFunction(Math.asin,";
        break;
      case "cos-1":
        btnText = "arccos(";
        operation = "inverseTrigoFunction(Math.acos,";
        break;
      case "tan-1":
        btnText = "arctan(";
        operation = "inverseTrigoFunction(Math.atan,";
        break;
      case "cosec-1":
        btnText = "arccosec(";
        operation = "inverseTrigoFunction('Math.acosec',";
        break;
      case "sec-1":
        btnText = "arcsec(";
        operation = "inverseTrigoFunction('Math.asec',";
        break;
      case "cot-1":
        btnText = "arccot(";
        operation = "inverseTrigoFunction('Math.acot',";
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
      case "1/x":
        btnText = "1/";
        operation = "1/";
        break;
      case "|x|":
        btnText = "|";
        if (toggleFlag.absFlag) {
          operation = "Math.abs(";
          toggleFlag.absFlag = !toggleFlag.absFlag;
        } else {
          operation = ")";
          toggleFlag.absFlag = !toggleFlag.absFlag;
        }
        break;
      case "10x":
        btnText = "10^";
        operation = "10**";
        break;
      case "+/-":
        btnText = `${data.screen.pop() * -1}`;
        operation = `${data.operation.pop() * -1}`;
        break;
      case "exp":
        btnText = "e^(";
        operation = "Math.exp(";
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
  // debugger;
  console.log(data.operation.join(""));
  try {
    let value = eval(data.operation.join(""));
    console.log(value, "vlaue here");
    data.operation = [value];
    data.screen = [value];
    console.log(data.operation, data.screen, "infinal");
    screen.value = value;
  } catch {
    console.log(data.operation, data.screen, "error");
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
  } else if (value == "degToggle") {
    if (toggleFlag.radian) {
      document.getElementById("degButton").style.background = "#bdcbd5";
      toggleFlag.radian = !toggleFlag.radian;
    } else {
      document.getElementById("degButton").style.background = "#ecf0f3";
      toggleFlag.radian = !toggleFlag.radian;
    }
    return;
  } else if (value == "functionToggle") {
    if (toggleFlag.functionToggle) {
      document.getElementById("functionButton").style.display = "block";
      toggleFlag.functionToggle = !toggleFlag.functionToggle;
    } else {
      toggleFlag.functionToggle = !toggleFlag.functionToggle;
      document.getElementById("functionButton").style.display = "none";
    }
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
  screen.value = data.screen.join("");
}
console.log(document.querySelectorAll("#trigo_function .btn"));
function trigonometryValue(operation, value) {
  if (!toggleFlag.radian) {
    console.log("in trigon");
    value = (value * Math.PI) / 180;
  }
  if (operation == "Math.cosec") {
    return 1 / Math.sin(value);
  }
  if (operation == "Math.sec") {
    return 1 / Math.cos(value);
  }
  if (operation == "Math.cot") {
    return 1 / Math.tan(value);
  }
  return operation(value);
}
function inverseTrigoFunction(operation, value) {
  console.log("in inverse");
  if (operation == "Math.asec") {
    value = 1 / Math.acos(value);
  } else {
    value = operation(value);
  }
  if (!toggleFlag.radian) {
    value = (value * 180) / Math.PI;
  }
  return value;
}

function memoryFunction(event) {
  console.log(event.target.innerHTML);
  const operation = event.target.innerHTML;
  console.log("in memory");
  switch (operation) {
    case "MS":
      console.log(data.screen, data.operation, "in ms");
      memory = data.screen.join("");
      data.screen = [];
      data.operation = [];
      screen.value = "";
      break;
    case "MR":
      data.operation = [];
      data.screen = [];
      console.log(data.screen, data.operation, "in mr");
      data.operation.push(memory);
      data.screen.push(memory);
      screen.value = data.screen.join("");
      break;
    case "MC":
      console.log(data.screen, data.operation, "in mc");
      memory = "";
      screen.value = "";
      break;
    case "M+":
      memory = Number(memory) + Number(eval(data.screen.join("")));
      screen.value = "";
      data.screen = [];
      data.operation = [];
      break;
    case "M-":
      memory = Number(memory) - Number(eval(data.screen.join("")));
      screen.value = "";
      data.screen = [];
      data.operation = [];
      break;
  }
}
