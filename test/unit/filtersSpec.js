describe('filter tests', function () {
    beforeEach(module('todoApp'));

    //Just note that you inject a filter by appending Filter to the end of the actual filter name. Then you can call it as usual.
    it('should truncate the input to 10 characters', inject(function (truncateFilter) {
        expect(truncateFilter('abcdefghijkl', 10).length).toBe(10);
    }));

});