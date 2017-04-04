'use strict';

require('./_home.scss');

module.exports = ['$log','galleryService', HomeController];

function HomeController($log, $rootScope, galleryService){
  $log.debug('HomeController');

  this.galleries = [];
  console.log('*************', galleryService);

  this.fetchGalleries = function(){
    galleryService.fetchGalleries()
    .then( galleries => {
      this.galleries = galleries;
    });
  };

  this.fetchGalleries();

  $rootScope.$on('$locationChangeSuccess', () => this.fetchGalleries());
}