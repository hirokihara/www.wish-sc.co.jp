/*jshint latedef: nofunc */
'use strict';

angular.module('app', [
  'app.top',
  'ngNewRouter'
  ])
.controller('AppController', ['$router', AppController]);

function AppController ($router) {
  $router.config([
    {path: '/',       redirectTo: '/top'},
    {path: '/top',     component: 'top'},
    {path: '/outline', component: 'outline'},
    {path: '/work',    component: 'work'},
    {path: '/product', component: 'product'},
    {path: '/recruit', component: 'recruit'},
    {path: '/staff',   component: 'staff'},
    {path: '/access',  component: 'access'}
    ]);
}
