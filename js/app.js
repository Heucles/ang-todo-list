var todoApp = angular.module('todoApp', []);

todoApp.controller('todoController', function ($scope,$http, notesFactory) {

    $scope.notes = notesFactory.get();
    $scope.createNote = function () {
        notesFactory.put($scope.note);
        $scope.note = '';
        $scope.notes = notesFactory.get();
    }

    $scope.addNotesFromFile = function () {
        notesFactory.getFromFile().then(function (data) {
            var totalNotes = data.length;

            for (var i = 0; i < totalNotes; i++) {
                notesFactory.put(data[i].key);
            }

            $scope.notes = notesFactory.get();
        });
    }

    $scope.addNotesFromFile1 = function () {
        $http.get('js/data/todos1.json').then(function (data) {
            $scope.reqData1 = data;
        });
    }

    $http.get('js/data/todos.json').then(function (data) {
        $scope.reqData = data;
    });
});

todoApp.factory('notesFactory', function ($http) {
    return {
        put: function (note) {
            localStorage.setItem('todo' + (Object.keys(localStorage).length + 1), note)

        },

        get: function () {
            var notes = [];
            var keys = Object.keys(localStorage);
            var keyCount = keys.length;
            for (var i = 0; i < keyCount; i++) {
                notes.push(localStorage.getItem(keys[i]));
            }

            return notes;
        },

        getFromFile: function () {
            return $http.get('js/data/todos.json').then(function (response) {
                return response.data.todos;
            });

        }
    }
});

todoApp.filter('truncate', function () {
    return function (input, length) {
        return (input.length > length ? input.substring(0, length) : input);
    }
});

todoApp.directive('customColor', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.css({ 'background-color': attrs.customColor });
        }
    }
});