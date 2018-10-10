
describe('ngSetup', function() {
    
    var ngSetup;
    
    beforeEach(function() {
        ngSetup = require('./ng-setup');
    });
        

    it('exposes Angular globally', function() {

        ngSetup();

        expectAngularApiToBePresent();

        function expectAngularApiToBePresent() {
            expect(window.angular).toBeTruthy();
            expect(window.angular.module).toBeTruthy();
            expect(typeof window.angular.module).toBe('function');
            expect(angular).toBeTruthy();
        }
    });
});
