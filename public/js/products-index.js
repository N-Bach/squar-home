/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById('mySidenav').style.width = '350px';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

function topFunction() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}

var nav = $('#nav');
var sticky = 'sticky';
var header = $('.header').height();
var container = $('.container');
var breadcrumb = $('.breadcrum-container');
var hamburger = $('#hamburger');

// console.log(nav);
// console.log(header);

$(window).scroll(function() {
  if ($(this).scrollTop() > header) {
    nav.addClass(sticky);
    container.css('margin-top', '62px');

    breadcrumb.addClass('sticky-crumb');
    $('.ic-home').attr('src', 'img/icon/ic-home.png');

    hamburger.addClass('sticky-sidenav');
    $('#ic-hamburger').attr('src', 'img/icon/ic-menu-dark.png');
  } else {
    nav.removeClass(sticky);
    container.css('margin-top', '0px');

    breadcrumb.removeClass('sticky-crumb');
    $('.ic-home').attr('src', 'img/icon/ic-home-white.png');

    hamburger.removeClass('sticky-sidenav');
    $('#ic-hamburger').attr('src', 'img/icon/ic-menu.png');
  }
});
