'use strict';
angular.module('d2Docs')
    .config(function ($routeProvider) {
        $routeProvider
            /**/
            .when('/examples', {
                templateUrl: 'examples.html',
                controller: 'sectionController',
                controllerAs: 'section'
            })
            /**/
            .when('/examples/Basic usage', {
                templateUrl: 'examples/basic_usage.html',
                controller: 'pageController',
                controllerAs: 'page'
            })
            /**/
            /**/
            .when('/general', {
                templateUrl: 'general.html',
                controller: 'sectionController',
                controllerAs: 'section'
            })
            /**/
            .when('/general/Install', {
                templateUrl: 'general/install.html',
                controller: 'pageController',
                controllerAs: 'page'
            })
            /**/
            /**/
            .when('/d2', {
                templateUrl: 'd2.html',
                controller: 'sectionController',
                controllerAs: 'section'
            })
            /**/
            .when('/d2/d2', {
                templateUrl: 'd2.html',
                controller: 'pageController',
                controllerAs: 'page'
            })
            /**/
            /**/
            .when('/model', {
                templateUrl: 'model.html',
                controller: 'sectionController',
                controllerAs: 'section'
            })
            /**/
            .when('/model/Model', {
                templateUrl: 'model/Model.html',
                controller: 'pageController',
                controllerAs: 'page'
            })
            /**/
            .when('/model/ModelBase', {
                templateUrl: 'model/ModelBase.html',
                controller: 'pageController',
                controllerAs: 'page'
            })
            /**/
            .when('/model/ModelCollection', {
                templateUrl: 'model/ModelCollection.html',
                controller: 'pageController',
                controllerAs: 'page'
            })
            /**/
            .when('/model/ModelDefinition', {
                templateUrl: 'model/ModelDefinition.html',
                controller: 'pageController',
                controllerAs: 'page'
            })
            /**/
            .when('/model/ModelDefinitions', {
                templateUrl: 'model/ModelDefinitions.html',
                controller: 'pageController',
                controllerAs: 'page'
            })
            /**/
            .when('/model/ModelValidation', {
                templateUrl: 'model/ModelValidation.html',
                controller: 'pageController',
                controllerAs: 'page'
            })
            /**/
            /**/
            .when('/pager', {
                templateUrl: 'pager.html',
                controller: 'sectionController',
                controllerAs: 'section'
            })
            /**/
            .when('/pager/Pager', {
                templateUrl: 'pager/Pager.html',
                controller: 'pageController',
                controllerAs: 'page'
            })
            /**/
            /**/
            .when('/system', {
                templateUrl: 'system.html',
                controller: 'sectionController',
                controllerAs: 'section'
            })
            /**/
            .when('/system/System', {
                templateUrl: 'system/System.html',
                controller: 'pageController',
                controllerAs: 'page'
            })
            /**/
            .when('/system/SystemSettings', {
                templateUrl: 'system/SystemSettings.html',
                controller: 'pageController',
                controllerAs: 'page'
            })
            /**/
            /**/
            ;
    });

