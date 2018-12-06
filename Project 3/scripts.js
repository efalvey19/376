
function multiply() {
    var value1 = getValue("value1");
    var value2 = getValue("value2");

    writeResult(value1 * value2);

    document.getElementById("result").innerHTML = result;
}
function calculateCubeVolume(){
  var side= getValue("side");
  var volume= side * side * side;

  writeResult(volume,"cubeVolume");
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
  var segment1= getValue("segment1");
  var segment2= getValue("segment2");
  var segment3= getValue("segment3");
  var volume= segment1 * segment2 * segment3;

  writeResult(volume,"prismVolume");
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
function calculatePyramidVolume(){
  var b= getValue("base");
  var h= getValue("height");
  var volume= (1/3) * b * h;

  writeResult(volume,"pyramidVolume");
}
function writeResult(value,elementId){
  document.getElementById(elementId).innerHTML = value;
}
function getValue(id) {
  return parseFloat(document.getElementById(id).value);
}
