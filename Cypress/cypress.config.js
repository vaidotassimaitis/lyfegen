const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  env: {
    Username: '841213799757476@mailco.pro',
    Password: 'test',
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://auth.lyfegen.com/',
    testIsolation: false,
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  "reporter": "mochawesome",
     "reporterOptions": {
       "charts": true,
       "overwrite": false,
       "html": true,
       "json": false,
       "reportDir": "cypress/report/mochawesome-report"
      }
});
