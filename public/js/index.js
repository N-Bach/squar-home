/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById('mySidenav').style.width = '350px';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

function srcollDown() {
  $.fn.fullpage.moveSectionDown();
}

function switchThemeDark(index) {
  $('#ic-hamburger').attr('src', 'img/icon/ic-menu-dark.png');
  $('#scroll-down').attr('src', 'img/icon/ic-animated-scroll-yellow.gif');
  $('#text-scroll-down').css('color', 'black');
  $('#fp-nav').find('span').css('background-image', 'url(img/icon/ic-slider-unactive-dark.png)');
  $('#fp-nav li:nth-child(' + index + ')')
    .find('span')
    .css('background-image', 'url(img/icon/ic-slider-active.png)');
}

function switchThemeLight() {
  $('#ic-hamburger').attr('src', 'img/icon/ic-menu.png');
  $('#scroll-down').attr('src', 'img/icon/ic-animated-scroll.gif');
  $('#text-scroll-down').css('color', 'white');
  $('#fp-nav').find('span').css('background-image', 'url(img/icon/ic-slider-unactive.png)');
  $('#fp-nav li:first-child')
    .find('span')
    .css('background-image', 'url(img/icon/ic-slider-active.png)');
}

function updateThemeDark(index, nextIndex) {
  $('#fp-nav li:nth-child(' + index + ')')
    .find('span')
    .css('background-image', 'url(img/icon/ic-slider-unactive-dark.png)');
  $('#fp-nav li:nth-child(' + nextIndex + ')')
    .find('span')
    .css('background-image', 'url(img/icon/ic-slider-active.png)');
}

function updateScrollText(text) {
  $('#text-scroll-down').html(text);
}

$(document).ready(function() {
  var $isAnimatedSecond = $('#section2 .is-animated');
  var $isAnimatedFifth = $('#section5 .is-animated');
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 550,
    onLeave: function(index, nextIndex, direction) {
      closeNav();
      var leavingSection = $(this);

      if (nextIndex === 1) {
        switchThemeLight();
      } else {
        if (index === 1) {
          switchThemeDark(nextIndex);
        } else {
          updateThemeDark(index, nextIndex);
        }
      }

      if (nextIndex === 2) {
        $isAnimatedSecond.eq(0).addClass('animated fadeIn').css('animation-delay', '.4s');
        $isAnimatedSecond.eq(1).addClass('animated fadeIn').css('animation-delay', '.6s');
        $isAnimatedSecond.eq(2).addClass('animated fadeIn').css('animation-delay', '.7s');
        $isAnimatedSecond.eq(3).addClass('animated fadeIn').css('animation-delay', '.8s');
        $isAnimatedSecond.eq(4).addClass('animated fadeIn').css('animation-delay', '1s');
      }

      if (nextIndex === 5) {
        $isAnimatedFifth.eq(0).addClass('animated fadeIn').css('animation-delay', '.5s');
        $isAnimatedFifth.eq(1).addClass('animated fadeIn').css('animation-delay', '.7s');
        // jobs
        $isAnimatedFifth.eq(2).addClass('animated fadeIn').css('animation-delay', '1s');
        $isAnimatedFifth.eq(3).addClass('animated fadeIn').css('animation-delay', '1.2s');
        $isAnimatedFifth.eq(4).addClass('animated fadeIn').css('animation-delay', '1.3s');
        $isAnimatedFifth.eq(5).addClass('animated fadeIn').css('animation-delay', '1.4s');
        $isAnimatedFifth.eq(6).addClass('animated fadeIn').css('animation-delay', '1.5s');
        $isAnimatedFifth.eq(7).addClass('animated fadeIn').css('animation-delay', '1.6s');
        $isAnimatedFifth.eq(8).addClass('animated fadeIn').css('animation-delay', '1.7s');
        $isAnimatedFifth.eq(9).addClass('animated fadeIn').css('animation-delay', '1.8s');
      }

      if (nextIndex === 5) {
        updateScrollText('Scroll Up');
      } else if (index === 5) {
        updateScrollText('Scroll Down');
      }
    }
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
