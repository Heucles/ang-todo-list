'use strict';
describe('TodoController Test', function () {

    var $http, $httpBackend, $rootScope, createController, todosRequestHandler, todosRequestHandler1, notesFactory;

    beforeEach(module('todoApp'));

    beforeEach(inject(function ($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        // backend definition common for all tests
        todosRequestHandler = $httpBackend.when('GET', 'js/data/todos.json')
                               .respond({
                                   "todos": [
                                       {
                                           "key": "Todo Mockado Mesmo 1"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 2"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 3"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 4"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 5"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 6"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 7"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 8"
                                       }
                                   ]
                               });

        todosRequestHandler1 = $httpBackend.when('GET', 'js/data/todos1.json')
                               .respond({
                                   "todos": [
                                       {
                                           "key": "Todo Mockado Mesmo 1"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 2"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 3"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 4"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 5"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 6"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 7"
                                       },
                                       {
                                           "key": "Todo Mockado Mesmo 8"
                                       }
                                   ]
                               });

        // Get hold of a scope (i.e. the root scope)
        $rootScope = $injector.get('$rootScope');
        // The $controller service is used to create instances of controllers
        var $controller = $injector.get('$controller');

        createController = function () {
            return $controller('todoController', { '$scope': $rootScope });
        };
    }));


    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('should fetch the expected GET', function () {
        $httpBackend.expectGET('js/data/todos.json');
        var controller = createController();
        $httpBackend.flush();
    });


    it('should fetch the expected GET todos1', function () {
        $httpBackend.expectGET('js/data/todos1.json');
        var controller = createController();
        $rootScope.addNotesFromFile1();
        $httpBackend.flush();
    });

    it('should match the expected data after the controller is created', function () {
        var controller = createController();
        $httpBackend.flush();
        expect($rootScope.reqData.data.todos[0].key.toString()).toBe('Todo Mockado Mesmo 1');
    });

    it('should match the expected data after the method addNotesFromFile1 is created', function () {
        var controller = createController();
        $rootScope.addNotesFromFile1();
        $httpBackend.flush();        
        expect($rootScope.reqData1.data.todos[0].key.toString()).toBe('Todo Mockado Mesmo 1');
    });

});