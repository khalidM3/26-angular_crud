'use strict';

require('./_landing.scss');

module.exports = ['$log', '$location', '$rootScope', 'authService', LandingController];

function LandingController($log, $location, authService){
  $log.log('LandingController');
  let url = $location.url();
  console.log(url,'{{{{{{{{{{{{{');
  this.showSignup = url === '/join#signup' || url === '/join';
}