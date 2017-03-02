var result = document.getElementById("result");
result.onclick = function testOperation(){
     var res;
     var i = 0;
   if( valA.checked ) {
     i++;
     res = i;
   }
   if( valOl.checked ) {
    i++;
    res = i;
   }
   if( valMeta.checked ) {
    i++;
    res = i;
   }
    if( valBodyt.checked == false && valTd.checked == true && valCaption.checked == true && valColumn.checked == false ) {
     i++;
     res = i;
   }
   if( valCharset.checked == false && valAutocomplete.checked == true && valAction.checked == true && valValidate.checked == false ) {
     i++;
     res = i;  
   }
   if( res == undefined ) {
      res = 0;
   }
   alert( "Ваш результат: "+res+" из 5 баллов!" );
   if( res == 5 ) {
   alert("ПОЗДРАВЛЯЕМ!!!=)"); 
   }
};