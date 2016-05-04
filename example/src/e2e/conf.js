
var userSauce = process.argv[3].substr(2);
var keySauce = process.argv[4].substr(2);

if(userSauce == null){
    console.log("Please inform the sauceUser, syntax: protractor conf.js --sauceUser --sauceKey");
}
if(keySauce == null){
    console.log("Please inform the sauceKey, syntax: protractor conf.js --sauceUser --sauceKey");
}
else{
    console.log("Test successfully started...");
}

exports.config = {

    /**
     * Setting parameters for connect in SauceLabs
     */
    sauceUser: userSauce,
    sauceKey: keySauce,

    /**
     * The selenium must be on privative navigation mode, all the extensions must remain disabled,
     * it should be maximized and creash reporter should be enabled.
     */
    framework: 'jasmine',

    onPrepare: function(){

        require('../../node_modules/protractor/node_modules/jasmine-reporters/src/load_reporters');
        jasmine.getEnv().addReporter(new
            jasmine.JUnitXmlReporter("./report", true, true, null, true));

        browser.ignoreSynchronization = true;
        global.typeTranslate = "trans";
        browser.driver.manage().window().maximize();
    },

    capabilities: {
        'name' : 'Teste no Blog DiogoCosta',
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['incognito', 'disable-extensions', 'start-maximized', 'enable-crash-reporter-for-testing', 'test-type']
        }
    },

    // The timeout for each script run on the browser. This should be longer
    // than the maximum time you application needs to stabilize between tasks.
    allScriptsTimeout: 80000,

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: 'spec.js',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 900000,
        includeStackTrace: true,
        isVerbose: true,
        silent: false
    }
};