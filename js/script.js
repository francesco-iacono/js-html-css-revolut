$(document).ready(function () {

    // hover li nel menu header-bottom-end
    $('.header-bottom-end .list-inline > li:nth-child(1n+2)').mouseenter(function () {
      console.log($(this).children());
      $(this).children().toggleClass('active');
      }
    );
    $('.header-bottom-end .list-inline > li:nth-child(1n+2)').mouseleave(function () {

      $(this).children().toggleClass('active');

      }
    );
    // fine hover li nel menu header-bottom-end
    $('#position-static').mouseenter(function () {
      console.log($('#position-static').children());
      $('.submenu').toggleClass('active-flex');
      }
    );
    $('#position-static').mouseleave(function () {
      console.log($('#position-static').children());
      $('.submenu').toggleClass('active-flex');
      }
    );
  }
);
