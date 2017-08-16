var overviewleft = $('#overview .is-animated-left');
var overviewright = $('#overview .is-animated-right');
var featureleft = $('#feature .is-animated-left');
var featureright = $('#feature .is-animated-right');

$(document).ready(function() {
  overviewleft.addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeft delay-overview',
    offset: 100
  });
  overviewright.addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInRight delay-overview',
    offset: 100
  });
  featureleft.addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: 100
  });
  featureright.addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: 100
  });
});
