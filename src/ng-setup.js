var JSDOM  = require('jsdom').JSDOM;

module.exports = setupNg;

/**
 * Sets up the global environment with Angular using jsdom.
 * It's not really a good idea to pollute the global Node environment
 * with DOM variables:
 * https://github.com/jsdom/jsdom/wiki/Don't-stuff-jsdom-globals-onto-the-Node-global
 * 
 * However, it simplifies testing AngularJS apps within the IDE instead of the browser. 
 */
function setupNg() {

    createDom();
    loadAndExposeAngular();
    stubJasmineApiForNgMock();
    loadAngularMocks();

    return deleteDom;
}

function createDom() {
    var dom = new JSDOM('<html><body></body></html>', { url: 'http://localhost' });
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
}

function loadAndExposeAngular() {
    requireWithCacheOverride('angular/angular');
    global.angular = global.window.angular;
}

function requireWithCacheOverride(module) {
    delete require.cache[require.resolve(module)];
    return require(module);
}

function stubJasmineApiForNgMock() {
    global.window.jasmine = global.jasmine;
    global.window.afterEach = global.afterEach;
    global.window.beforeEach = global.beforeEach;
}

function loadAngularMocks() {
    requireWithCacheOverride('angular-mocks');
}

function deleteDom() {

    delete global.window.jasmine;
    delete global.window.afterEach;
    delete global.window.beforeEach;
    delete global.angular;
    delete global.window.angular;
    delete global.navigator;
    delete global.window;
    delete global.document;
}