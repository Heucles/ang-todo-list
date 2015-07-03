//describe('notesFactory tests', function () {

//    var notesFactory;

//    // executed before each "it()" is run.
//    beforeEach(function () {
//        //load the module
//        module('todoApp');


//        //inject your factory for testing 
//        inject(function (_notesFactory_) {
//            notesFactory = _notesFactory_;
//        });

//        var store = {
//            todo1: 'teste1',
//            todo2: 'teste2',
//            todo3: 'teste3',
//        }

//        //mocks the behavior of of the element passed, for the function expecified in the next parameter,
//        //in this case 'getItem' for localStorage

//        spyOn(localStorage, 'getItem').andCallFake(function (key) {
//            return store[key];
//        })

//        spyOn(localStorage, 'setItem').andCallFake(function (key, value) {
//            store[key] = value + ''
//        });

//        spyOn(Object, 'keys').andCallFake(function (value) {
//            var keys = [];

//            for (var key in store) {
//                keys.push(key);
//            }

//            return keys;
//        });
//    });

//    //check to see if it has the exprected function
//    it('should have a put and a get function', function () {
//        expect(angular.isFunction(notesFactory.get)).toBe(true);
//        expect(angular.isFunction(notesFactory.put)).toBe(true);
//    });

//    //check if it successfully add a new item
//    it('should return four todo notes after adding one more', function () {
//        notesFactory.put('Angular is awesome');

//        var result = notesFactory.get();
//        expect(result.length).toBe(4);
//    });
//});