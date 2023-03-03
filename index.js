let a = 10;
function run() {
  function fast() {
    console.log(a);
  }
  return fast;
}
var x = run();
x();
