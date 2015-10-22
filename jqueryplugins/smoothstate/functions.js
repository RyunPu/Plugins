$(function(){
  'use strict';
  var $page = $('#main'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        onStart: {
          duration: 600, // Duration of our animation
          render: function ($container) {
            $container.addClass('is-exiting');

            $('.animated').each(function(index, el) {
              var animate = $(el).attr('class').split('animated ')[1].split(' ')[0];

              $(el).removeClass(animate);
              setTimeout(function() { $(el).addClass(animate); }, 100);
            });
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            $container.removeClass('is-exiting');
            $container.html($newContent);
          }
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');
});
