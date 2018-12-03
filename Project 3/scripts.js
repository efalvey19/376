
function multiply() {
    var value1 = getValue("value1");
    var value2 = getValue("value2");

    writeResult(value1 * value2);

    document.getElementById("result").innerHTML = result;
}
function calculate(){
  var side= getValue("side");
  var volume= side * side * side;

  writeResult(volume);
}
function writeResult(result){
  document.getElementById("result").innerHTML = result;
}

function getValue(id) {
  return parseFloat(document.getElementById(id).value);
}
