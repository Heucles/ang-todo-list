describe('directive tests', function () {
    beforeEach(module('todoApp'));
    it('should set background to rgb(128, 128, 128)',
        inject(function ($compile, $rootScope) {
            scope = $rootScope.$new();

            //get an element representation
            elem = angular.element('<span custom-color="rgb(128, 128, 128)">sample</span>');

            //create a new child scope
            scope = $rootScope.$new();

            //finally compile the HTML
            $compile(elem)(scope);

            //expect the background-color css property to be desired one
            expect(elem.css('background-color')).toEqual('rgb(128, 128, 128)');
        })
     );
});