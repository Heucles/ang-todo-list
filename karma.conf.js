// Karma configuration
// Generated on Mon Jun 29 2015 14:52:57 GMT-0300 (E. South America Standard Time)

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
        //'js/vendor/jquery/*.js',
        'js/vendor/angular/*.js',
        'js/*.js',
        'test/lib/**/*.js',
        'test/unit/*.js',
        //'test/unit/servicesSpecMockHttp.js'
        //'test/unit/controllersSpecMockHttp.js'
        ],


        // list of files to exclude
        exclude: [
          'test/lib/angular/angular-scenario.js',
        ],
        plugins: [
        // these plugins will be require() by Karma
        'karma-jasmine',
        'karma-chrome-launcher'


        ],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['Chrome'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
	
	
	var configuration = {
    // other things
 
    customLaunchers: {
        Chrome_travis_ci: {
            base: 'Chrome',
            flags: ['--no-sandbox']
        }
    },
};
 
if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
	configuration.singleRun = true;
}
 
config.set(configuration);

};
