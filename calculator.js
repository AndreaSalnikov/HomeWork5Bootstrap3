function addNumber(number) {
   if(memoryNewNumber){
      $(":text").val(number);
      memoryNewNumber = false;
   }else{
      if($(":text").val() === "0") {
         $(":text").val(number);
      }else{
         var dispVal = $(":text").val();
             dispVal += number;
             $(":text").val(dispVal);
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
    $(":text").val("0");
});
$("button").eq(16).bind("click", function () {
   var dispVal = $(":text").val();   
   if (dispVal.indexOf('.') === -1) 
   dispVal += '.';
   $(":text").val(dispVal);
});
$("button").eq(9).bind("click", function () {
   var dispVal = $(":text").val();
   var result = dispVal * (-1);
   $(":text").val(result);
});
$(".operation").click(function(e) {
   operation(e.target.textContent);
});
var memoryCurrentNumber = 0;
var memoryNewNumber = false;
var memoryPendingOperation = "";
function operation (op) {
   var localOperationMemory = $(":text").val();
   if(memoryNewNumber && memoryPendingOperation !== "="){
      $(":text").val(memoryCurrentNumber);
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
      if( $(":text").val() == Infinity ){
         $(":text").val() = "Деление на ноль невозможно";
      }
      $(":text").val(memoryCurrentNumber);
      memoryPendingOperation = op;
   };
};