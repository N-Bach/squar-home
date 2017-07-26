/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

function srcollDown() {
  $.fn.fullpage.moveSectionDown();
}

$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 550
  });

  $('#fp-nav').addClass('animated fadeInRight');
  $('.center-screen')
    .addClass('spin-circle-animate animated fadeIn')
    .one(
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function() {
        $(this).removeClass('spin-circle-animate animated fadeIn');
        $(this).addClass('spin-circle');
      }
    );
});
