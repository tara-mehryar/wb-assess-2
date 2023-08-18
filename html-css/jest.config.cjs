const path = require('path');
const { readFileSync } = require('fs');

module.exports = {
  // jest-environment-jsdom runs tests in browser-like environment
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    // Load contents of html-css/index.html into jsdom
    html: readFileSync(path.resolve(__dirname, 'index.html'), 'utf8'),
    // TODO: I couldn't get a custom resource loader to work but I think we need one in order to load CSS/JS files without running a server.
  },
};
