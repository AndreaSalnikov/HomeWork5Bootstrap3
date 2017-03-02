function addNumber(number) {
   if(memoryNewNumber){
      display.value = number;
      memoryNewNumber = false;
   }else{
      if(display.value === "0" ) {
         display.value = number;
      }else{
         display.value += number;
      };
   };
};
var b0 = document.getElementById("but0");
b0.onclick =  function () {
   addNumber(0);
};
var b1 = document.getElementById("but1");
b1.onclick = function () {
   addNumber(1);
};
var b2 = document.getElementById("but2");
b2.onclick = function () {
   addNumber(2);
};
var b3 = document.getElementById("but3");
b3.onclick = function () {
   addNumber(3);
};
var b4 = document.getElementById("but4");
b4.onclick = function () {
   addNumber(4);
};
var b5 = document.getElementById("but5");
b5.onclick = function () {
   addNumber(5);
};
var b6 = document.getElementById("but6");
b6.onclick = function () {
   addNumber(6);
};
var b7 = document.getElementById("but7");
b7.onclick = function () {
   addNumber(7);
};
var b8 = document.getElementById("but8");
b8.onclick = function () {
   addNumber(8);	
};
var b9 = document.getElementById("but9");
b9.onclick = function () {
   addNumber(9);
};
function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '0';
};
var clear = document.getElementById("clearDisplay");    
clear.onclick = function () {
   clearDisplay();
};
function insertDecimal() {
    var display = document.getElementById('display');    
    if (display.value.indexOf('.') === -1) 
       display.value += '.';
};
var decimal = document.getElementById("insertDecimal");
decimal.onclick = function () {
   insertDecimal();
};
function plusMin () {
   var display = document.getElementById('display');
   display.value = display.value * (-1);
};
var plMin = document.getElementById("plusMinus"); 
plMin.onclick = function () {
   plusMin();
};
var operations = document.querySelectorAll(".operation");
var result = document.getElementById("rowspan");
for (var i = 0 ; i < operations.length; i++) {
   var operationBtn = operations[i];
   operationBtn.addEventListener("click", function(e) {
   operation(e.target.textContent);
   });
};
var memoryCurrentNumber = 0;
var memoryNewNumber = false;
var memoryPendingOperation = "";
function operation (op) {
   var display = document.getElementById("display");
   var localOperationMemory = display.value;
   if(memoryNewNumber && memoryPendingOperation !== "="){
      display.value = memoryCurrentNumber;
   }else{
      memoryNewNumber = true;
      if(memoryPendingOperation === "+"){
         memoryCurrentNumber = parseFloat(memoryCurrentNumber) + parseFloat(localOperationMemory);
      } else if( memoryPendingOperation === "-" ){
         memoryCurrentNumber = parseFloat(memoryCurrentNumber) - parseFloat(localOperationMemory);
      } else if( memoryPendingOperation === "*" ){
         memoryCurrentNumber = parseFloat(memoryCurrentNumber) * parseFloat(localOperationMemory);
      } else if( memoryPendingOperation === "/" ){
         memoryCurrentNumber = parseFloat(memoryCurrentNumber) / parseFloat(localOperationMemory);
      } else {
         memoryCurrentNumber = localOperationMemory;
      }
   if( memoryCurrentNumber == Infinity ){
      memoryCurrentNumber = "Деление на ноль невозможно";
      };    
      display.value = memoryCurrentNumber;
      memoryPendingOperation = op;
   };
};