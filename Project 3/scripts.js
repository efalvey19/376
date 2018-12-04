
function multiply() {
    var value1 = getValue("value1");
    var value2 = getValue("value2");

    writeResult(value1 * value2);

    document.getElementById("result").innerHTML = result;
}
function calculateCubeVolume(){
  var side= getValue("side");
  var volume= side * side * side;

  writeResult(volume,"cubevolume");
}
function writeResult(value,elementId){
  document.getElementById(elementId).innerHTML = value;
}

function getValue(id) {
  return parseFloat(document.getElementById(id).value);
}
function multiply() {
    var value1 = getValue("value1");
    var value2 = getValue("value2");
    var value3 = getValue("value3")

    writeResult(value1 * value2 * value3);

    document.getElementById("result").innerHTML = result;
}
function calculatePrismVolume(){
  var side= getValue("side");
  var volume= side * side * side;

  writeResult(volume,"prismvolume");
}
