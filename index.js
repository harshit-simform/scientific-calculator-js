var screen = document.getElementById("screen");
const trigoButton = document.querySelectorAll("#trigo_function .btn");
var memory = "";
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
//function that will be called whenever user clicks on the screen or button
function uiclick(e) {
  console.log("trial");
  console.log();
  handleEvents(e.target.innerText);
}
// function that calculates the factorial of the given number
const factorial = (n) => (!(n > 1) ? 1 : factorial(n - 1) * n);
console.log(trigoButton);
//event listner that will be called when user presses any key in the keyboard
window.addEventListener("keydown", (e) => {
  e.preventDefault();

  console.log(e);
  if (e.key == "Enter") {
    console.log("in if in window");
    finalAnswer(e);
    return;
  } else if (e.key == "Backspace") {
    backFunction(e);
  } else {
    handleEvents(e.key);
  }
});
// funtion for handling keyboard as well as click events
function handleEvents(btn) {
  var btnText = btn;
  console.log(btnText);
  let operation = btn;
  switch (btnText) {
    case "1":
      btnText = "1";
      operation = "1";
      break;
    case "2":
      btnText = "2";
      operation = "2";
      break;
    case "3":
      btnText = "3";
      operation = "3";
      break;
    case "4":
      btnText = "4";
      operation = "4";
      break;
    case "5":
      btnText = "5";
      operation = "5";
      break;
    case "6":
      btnText = "6";
      operation = "6";
      break;
    case "7":
      btnText = "7";
      operation = "7";
      break;
    case "8":
      btnText = "8";
      operation = "8";
      break;
    case "9":
      btnText = "9";
      operation = "9";
      break;
    case "0":
      btnText = "0";
      operation = "0";
      break;
    case ".":
      btnText = ".";
      operation = ".";
      break;
    case "(":
      btnText = "(";
      operation = "(";
      break;
    case ")":
      btnText = ")";
      operation = ")";
      break;
    case "+":
      btnText = "+";
      operation = "+";
      break;
    case "-":
      btnText = "-";
      operation = "-";
      break;
    case "\u00F7":
    case "/":
      btnText = "/";
      operation = "/";
      break;
    case "\u2A09":
    case "*":
      btnText = "*";
      operation = "*";
      break;
    case "mod":
    case "%":
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
      operation = factorial(data.operation.join(""));
      console.log(operation);
      break;
    case "\u221A":
      btnText = "\u221A(";
      operation = "Math.sqrt(";
      break;
    case "\u221b":
      btnText = "\u221b(";
      operation = "Math.cbrt(";
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
      operation = "hyperFunction(Math.sinh,";
      break;
    case "cosh":
      btnText = "cosh(";
      operation = "hyperFunction(Math.cosh,";
      break;
    case "tanh":
      btnText = "tanh(";
      operation = "hyperFunction(Math.tanh,";
      break;
    case "sech":
      btnText = "sech(";
      operation = "hyperFunction('Math.sech',";
      break;
    case "coth":
      btnText = "coth(";
      operation = "hyperFunction('Math.coth',";
      break;
    case "cosech":
      btnText = "cosech(";
      operation = "hyperFunction('Math.cosech',";
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
    case "rand":
      var rand = Math.random();
      btnText = rand;
      operation = rand;
      break;
    case "ceil":
      btnText = `${Math.ceil(data.screen.join(""))}`;
      operation = `${Math.ceil(data.operation.join(""))}`;
      emptyarray();
      break;
    case "floor":
      btnText = `${Math.floor(data.screen.join(""))}`;
      operation = `${Math.floor(data.operation.join(""))}`;
      emptyarray();
      break;
    case "F-E":
      console.log(data.operation.length);
      if (data.operation.length === 0) {
        return;
      }
      btnText = `${Number.parseFloat(data.operation.join("")).toExponential()}`;
      operation = `${Number.parseFloat(
        data.operation.join("")
      ).toExponential()}`;
      emptyarray();
      break;
    default:
      btnText = "";
      operation = "";
      break;
  }
  if (btnText == "" && operation == "") {
    return;
  }
  data.operation.push(operation);
  data.screen.push(btnText);
  screen.value = data.screen.join("");
  console.log(data.screen);
  console.log(data.operation);
}
// main function that calulates every operation and displays the results
function finalAnswer(event) {
  if (data.operation.length === 0) {
    return;
  }
  console.log("finalAnswer");
  event.stopPropagation();
  console.log(data.operation.join(""));
  try {
    let value = eval(data.operation.join(""));
    console.log(value, "vlaue here");
    data.operation = [value];
    data.screen = [value];
    console.log(data.operation, data.screen, "infinal");
    screen.value = value;

    return;
  } catch {
    console.log(data.operation, data.screen, "error");
    emptyarray();
    console.log(data.operation, data.screen, "error");
    screen.value = "Invalid Syntax";
    return;
  }
}
// function for erasing everything
function emptyarray() {
  data.operation = [];
  data.screen = [];
  return;
}
// function that handles all the toggle operations (trigoToggle, inverseToggle , hyperToggle , degToggle , functionToggle)
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
      // console.log(btn.innerHTML);
      let btnText = btn.innerText;
      let btnTextReplacement = btn.innerText;
      if (toggleFlag.inverseFunction) {
        console.log(btnText, "in if");
        btnTextReplacement = trigoObject.hasOwnProperty(`${btnText}`)
          ? trigoObject[btnText][0]
          : btnText;
        console.log(btnTextReplacement, "in if");
      } else {
        console.log(btnText);
        btnTextReplacement = Object.keys(trigoObject).find(
          (key) => trigoObject[key][1] === btnText
        );
        console.log(btnTextReplacement, "in heree");
      }
      btn.innerHTML = btnTextReplacement;
      console.log(btn.innerHTML, "final");
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
      document.getElementById("degButton").style.background = "#91c1e7";
      toggleFlag.radian = !toggleFlag.radian;
    } else {
      document.getElementById("degButton").style.background = "#f8f8f8";
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
// function that handles back button clicks and clears the screen
function backFunction() {
  data.operation.pop();
  data.screen.pop();
  screen.value = data.screen.join("");
}
console.log(document.querySelectorAll("#trigo_function .btn"));
//functoin for calculating trignometry values
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
//function for calculating inverse trignometry values
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
// function for calculating hyperbolic trignometry values
function hyperFunction(operation, value) {
  if (!toggleFlag.radian) {
    console.log("in trigon");
    value = (value * Math.PI) / 180;
  }
  if (operation == "Math.cosech") {
    return 1 / Math.sinh(value);
  }
  if (operation == "Math.sech") {
    return 1 / Math.cosh(value);
  }
  if (operation == "Math.coth") {
    return 1 / Math.tanh(value);
  }
  return operation(value);
}
// function that calculates and stores the data in the memory
function memoryFunction(event) {
  console.log(event.target.innerHTML);
  const operation = event.target.innerHTML;
  console.log("in memory");
  switch (operation) {
    case "MS":
      console.log(data.screen, data.operation, "in ms");
      memory = eval(data.screen.join(""));
      emptyarray();
      screen.value = "";
      break;
    case "MR":
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
      emptyarray();
      break;
    case "M-":
      memory = Number(memory) - Number(eval(data.screen.join("")));
      screen.value = "";
      emptyarray();
      break;
  }
}
// function that clears the screen
function clearScreen(event) {
  event.preventDefault();
  console.log("in clear");
  emptyarray();
  console.log(data.operation);
  console.log(data.screen);
  screen.value = "";
  return;
}
