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
$("button").eq(15).bind("click", function () {
   addNumber(0);
});
$("button").eq(10).bind("click", function () {
   addNumber(1);
});
$("button").eq(11).bind("click", function () {
   addNumber(2);
});
$("button").eq(12).bind("click", function () {
   addNumber(3);
});
$("button").eq(5).bind("click", function () {
   addNumber(4);
});
$("button").eq(6).bind("click", function () {
   addNumber(5);
});
$("button").eq(7).bind("click", function () {
   addNumber(6);
});
$("button").eq(0).bind("click", function () {
   addNumber(7);
});
$("button").eq(1).bind("click", function () {
   addNumber(8);
});
$("button").eq(2).bind("click", function () {
   addNumber(9);
});
$("button").eq(4).bind("click", function () {
    display.value = '0';
});

$("button").eq(16).bind("click", function () {    
    if (display.value.indexOf('.') === -1) 
       display.value += '.';
});
$("button").eq(9).bind("click", function () {
   display.value = display.value * (-1);
});
$(".operation").click(function(e) {
   operation(e.target.textContent);
});
var memoryCurrentNumber = 0;
var memoryNewNumber = false;
var memoryPendingOperation = "";
function operation (op) {
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