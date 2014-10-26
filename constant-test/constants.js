'use strict';

angular.module('MainApp.constants', [])
  .constant('TITLE', 'Fun with Constants')
  .constant('LINKS', {
    Home: '#/',
    About: '#/about',
    'Contact Us': '#/contact'
  });
