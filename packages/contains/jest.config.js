const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  name: '@lt-utils/contains',
  displayName: '@lt-utils/contains',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts}', '!**/node_modules/**', '!**/lib/**'],
};
