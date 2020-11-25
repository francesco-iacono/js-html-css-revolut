$(document).ready(function () {


    $('.header-bottom-end .list-inline li a').mouseenter(function () {
      console.log($(this));
      console.log($(this).next());
      $(this).next().toggleClass('active');
      }
    );
    $('.header-bottom-end .list-inline li a').mouseleave(function () {
      console.log($(this));
      console.log($(this).next());
      $(this).next().toggleClass('active');
      }
    );
  }
);
