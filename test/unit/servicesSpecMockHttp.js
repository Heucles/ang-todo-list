describe('notesFactory tests with mocked HTTP', function () {

    var $http, $httpBackend, $rootScope, todosRequestHandler, notesFactory;

    beforeEach(function () {
        //load the module
        module('todoApp');


        //inject your factory for testing 
        inject(function (_notesFactory_) {
            notesFactory = _notesFactory_;
        });
        //mocks the behavior of of the element passed, for the function expecified in the next parameter,
        //in this case 'getItem' for localStorage


        var store = {
            todo1: 'teste1',
            todo2: 'teste2',
            todo3: 'teste3',
        }


        spyOn(localStorage, 'getItem').andCallFake(function (key) {
            return store[key];
        })

        spyOn(localStorage, 'setItem').andCallFake(function (key, value) {
            store[key] = value + ''
        });

        spyOn(Object, 'keys').andCallFake(function (value) {
            var keys = [];

            for (var key in store) {
                keys.push(key);
            }

            return keys;
        });
    });

    beforeEach(inject(function ($injector) {

        $http = $injector.get('$http');

        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');

        $rootScope = $injector.get('$rootScope');

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

    }));


    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('should fetch authentication token', function () {

        notesFactory.getFromFile().then(function (data) {
            expect(data[0].key).toBe('Todo Mockado Mesmo 1');
        });
        $httpBackend.flush();
    });
});