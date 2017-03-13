$("#result").click(function(){
      var res;
      var i = 0;
   if( $("#valA").prop("checked") ) {
      i++;
      res = i;
   };
   if( $("#valOl").prop("checked") ) {
      i++;
      res = i;
   };
   if( $("#valMeta").prop("checked") ) {
      i++;
      res = i;
   };
   if( $("#valTd").prop("checked") !== $("#valBodyt").prop("checked") && $("#valCaption").prop("checked") !== $("#valColumn").prop("checked") ){
      i++;
      res = i;
   };
   if( $("#valAutocomplete").prop("checked") !== $("#valCharset").prop("checked") && $("#valAction").prop("checked") !== $("#valValidate").prop("checked") ){
      i++;
      res = i;  
   };
   if( res == undefined ) {
      res = 0;
   };
      alert( "Ваш результат: "+res+" из 5 баллов!" );
   if( res == 5 ) {
      alert("ПОЗДРАВЛЯЕМ!!!=)"); 
   };
});