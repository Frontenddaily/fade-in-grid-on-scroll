;(function(window, document, $, undefined){
  'use strict';

  var
    item,
    i,
    offsetLength,
    cardOffset = 250,
    $window = $(window),
    $card = $('.float-cards .card'),
    $document = $('html, body'),
    offsets = [];

  $card.each(function(index, elem){
    var
      $elem = $(elem);

    offsets.push({
      elem: $elem,
      top: $elem.position().top,
      hasClass: false,
    });
  });

  offsetLength = offsets.length;

  $('#scroll-down-btn').on('click', function(evt){
    var top = offsets[0].top;

    evt.preventDefault();

    $document.animate({
      scrollTop: top + 30
    }, 500, 'swing');
  });

  $('#scroll-top-btn').on('click', function(evt){
    evt.preventDefault();

    $document.animate({
      scrollTop: 0
    }, 500, 'swing');
  });

  $window.scroll(function(){
    var
      windowTop = $window.scrollTop(),
      windowBottom = windowTop + $window.height() - cardOffset;

    for(i = 0; i < offsetLength; i++){
      item = offsets[i];

      if(windowBottom > item.top && !item.hasClass){
        item.elem.addClass('shown');
        item.hasClass = true;
      }else if(windowBottom <= item.top && item.hasClass){
        item.elem.removeClass('shown');
        item.hasClass = false;
      }
    }
  });

})(window, document, jQuery);
