//Load jQuery library using plain JavaScript
(function(){
  var newscript = document.createElement('script');
     newscript.type = 'text/javascript';
     newscript.async = true;
     newscript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
})();

$('.coreSpriteHeartOpen').each(function(){ //like 
 $(this).trigger('click');
});


/*$('.coreSpriteHeartFull').each(function(){ //unlike 
 $(this).trigger('click');
});*/