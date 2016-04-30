angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.inicio', {
    url: '/inicio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu.oCurso', {
    url: '/curso',
    views: {
      'side-menu21': {
        templateUrl: 'templates/oCurso.html',
        controller: 'oCursoCtrl'
      }
    }
  })

  .state('menu.etec', {
    url: '/etec',
    views: {
      'side-menu21': {
        templateUrl: 'templates/etec.html',
        controller: 'etecCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.contato', {
    url: '/Contato',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contato.html',
        controller: 'contatoCtrl'
      }
    }
  })

  .state('menu.produto', {
    url: '/produto',
    views: {
      'side-menu21': {
        templateUrl: 'templates/produto.html',
        controller: 'produtoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/inicio')

  

});