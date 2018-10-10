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

    require('global-jsdom')('', { url: 'http://localhost' });

    requireWithCacheOverride('angular/angular');
    global.angular = global.window.angular;
}

function requireWithCacheOverride(module) {
    delete require.cache[require.resolve(module)];
    return require(module);
}