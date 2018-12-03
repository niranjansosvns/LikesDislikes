$(function () {
    $(".like").click(function () {
             var input = $(this).find('.qty1');
             input.val(parseInt(input.val())+ 1);
             if(input.val() == 100){
                $(this).css('background-color',"blue");
                $(this).css('color',"white");
             }
    
         });
     $(".dislike").click(function () {
         var input = $(this).find('.qty2');
         input.val(parseInt(input.val())+1);
          if(input.val() == 50){
          $(this).css('background-color',"white");
          $(this).css('color',"black");
        }
        if($('#qty1').val() > 0 ){
           $('#qty1').val($('#qty1').val()-1) ;
        }

     }); 
  });

