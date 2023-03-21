import { defineConfig } from 'cypress'

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  watchForFileChanges: false,

  e2e: {
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/mocha',
        quiet: true,
        overwrite: false,
        html: false,
        json: true,
      },
    },
    setupNodeEvents(on, config) {
      // modify config values examples
      // config.defaultCommandTimeout = 10000
      // IMPORTANT return the updated config object
      return config
    },
  },
})
