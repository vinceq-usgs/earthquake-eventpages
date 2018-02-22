// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

// start mock proxy server
const { spawn } = require('child_process');
const mockServer = spawn('node', ['e2e/mock-server.js']);
mockServer.stdout.pipe(process.stdout);
process.on('exit', () => {
  mockServer.kill();
});


exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  ngApimockOpts: {
    angularVersion: 2,
    hybrid: false
  },
  onPrepare() {
    browser.ngApimock = require('./.tmp/ngApimock/protractor.mock.js');
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
