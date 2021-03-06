angular.module('gopro').directive('navbar', () => {
  return{
    templateUrl: './templates/navbar.html',
    controller: function($state, $rootScope, $scope, homeSrvc){

      $(document).ready(function(){
        $('.nav').removeClass('sticky-nav');
        var scroll_pos = 0;
        $(document).scroll(function(){
          scroll_pos = $(this).scrollTop();
          if(scroll_pos > 20) {
            $('.nav').addClass('sticky-nav');
          } else {
            $('.nav').removeClass('sticky-nav');
          }
        });
      });

      $(document).ready(function(){
    $("#shop-flip").mouseenter(function(){
        $("#shop-panel").stop(true).slideDown();
    });
    $("#shop-panel, #shop-flip").mouseleave(function(){
      $("#shop-panel").stop(true).slideUp();
    })
});


    }
  };
});
