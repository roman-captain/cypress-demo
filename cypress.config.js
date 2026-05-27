const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://github.com',
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {},
  },
  env: {
    BASE_URL: 'https://petstore.swagger.io/v2',
  },
});
