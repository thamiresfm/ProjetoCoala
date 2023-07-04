const { defineConfig } = require("cypress")
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 10000,
    
    setupNodeEvents(on, config) {
        allureWriter(on, config)
        return config
    },
  },
})
