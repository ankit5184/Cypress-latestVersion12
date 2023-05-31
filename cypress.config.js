const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'jx2v6s',
  e2e: {
    "baseUrl": "https://www.saucedemo.com",
    "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },
});
