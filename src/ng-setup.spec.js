describe('ngSetup', function () {

    var deleteDom;

    beforeEach(function () {
        deleteDom = require('./ng-setup')();
    });

    afterEach(function () {
        //cleanup();
    });


    it('exposes Angular globally', function () {

        expectAngularApiToBePresent();

        function expectAngularApiToBePresent() {
            expect(window.angular).toBeDefined();
            expect(window.angular.module).toBeDefined();
            expect(typeof window.angular.module).toBe('function');
            expect(angular).toBeDefined();
        }
    });


    it('cleans up the global space after testing', function () {

        deleteDom();

        expectDomToBeGone();

        function expectDomToBeGone() {
            expect(global.window).toBeUndefined();
            expect(global.document).toBeUndefined();
        }
    });

    it('exposes Angular Mocks API on angular object', function () {

        expectAngularMocksApiToBePresent();

        function expectAngularMocksApiToBePresent() {
            expect(angular.mock).toBeDefined();
            expect(angular.mock.module).toBeDefined();
            expect(typeof angular.mock.module).toBe('function');
            expect(angular.mock.inject).toBeDefined();
            expect(typeof angular.mock.inject).toBe('function');
            expect(inject).toBe(angular.mock.inject);
            expect(module).toBe(angular.mock.module);
        }
    });
});