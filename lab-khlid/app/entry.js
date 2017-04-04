'use strict';

require('./scss/main.scss');

const
  path = require('path'),
  angular = require('angular'),
  camelcase = require('camelcase'),
  pascalcase = require('pascalcase'),
  uiRouter = require('angular-ui-router'),
  ngTouch = require('angular-touch'),
  ngAnimate = require('angular-animate'),

  cfgram = angular.module('cfgram', [ngTouch, ngAnimate, uiRouter]);

let context = require.context('./config/', true, /\.js$/);
console.log('CONTEXT', context);
context.keys().forEach( key => {
  console.log('k',key);
  cfgram.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
console.log('CONTEXT2', context);
context.keys().forEach( key => {
  console.log('k',key);
  let name = pascalcase(path.basename(key, '.js'));
  let module = context(key);
  cfgram.controller(name, module);
});

context = require.context('./service/', true, /\.js$/);
context.keys().forEach(key => {
   console.log('k',key);
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  cfgram.service(name, module);
});

context = require.context('./component', true, /\.js$/);
context.keys().forEach( key => {
   console.log('k',key);
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key);
  cfgram.component(name, module);
});

