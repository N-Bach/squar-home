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

// sticky nav
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

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}
