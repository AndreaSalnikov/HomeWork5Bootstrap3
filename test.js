$("#result").click(function(){
     var res;
     var i = 0;
   if( $("#valA").prop("checked") ) {
     i++;
     res = i;
   }
   if( $("#valOl").prop("checked") ) {
    i++;
    res = i;
   }
   if( $("#valMeta").prop("checked") ) {
    i++;
    res = i;
   }
    if( $("#valBodyt").prop("checked") == false && $("#valTd").prop("checked") == true && $("#valCaption").prop("checked") == true && $("#valColumn").prop("checked") == false ) {
     i++;
     res = i;
   }
   if( $("#valCharset").prop("checked") == false && $("#valAutocomplete").prop("checked") == true && $("#valAction").prop("checked") == true && $("#valValidate").prop("checked") == false ) {
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
})