'use strict';
describe('TodoController Test', function () {
    beforeEach(module('todoApp'));

    //we don´t need the real factory here. so we will use a fake one.
    var mockService = {
        notes: ['note1', 'note2'], //just two elements initially
        get: function () {
            return this.notes;
        },
        put: function (content) {
            this.notes.push(content);
        }
    }

    //not the real thing: test spec
    it('should return the notes array with two elements initially and then add one',
      
        inject(function ($rootScope, $controller) {//inject the dependencies
            var scope = $rootScope.$new();

            //while creating the controller we have to inject dependencies too
            var ctrl = $controller('todoController', { $scope: scope, notesFactory: mockService });
            //var ctrl = $controller('todoController'); // wont work

            //the initial count should be two
            expect(scope.notes.length).toBe(2);

            //enter a new note (just like typing somthing into the text box)
            scope.note = 'test 3';

            //now run the function that adds a new note (the result of hitting the button in HTML)
            scope.createNote();
            //ctrl.createNote(); //also wont work

            //expect the count of notes to have been increased by one!
            expect(scope.notes.length).toBe(3);
        })
    );



});