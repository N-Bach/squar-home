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

function switchThemeDark(index) {
  $('#ic-hamburger').attr('src', 'img/icon/ic-menu-dark.png');
  $('#scroll-down').attr('src', 'img/icon/ic-animated-scroll-yellow.gif');
  $('#text-scroll-down').css('color', 'black');
  // $('#fp-nav').find('span').css('background-image', 'url(../../icon/ic-unactive-dark.png)');
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

$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 550,
    onLeave: function(index, nextIndex, direction) {
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
