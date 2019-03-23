const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  name: '@lt-utils/class-list',
  displayName: '@lt-utils/class-list',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts}', '!**/node_modules/**', '!**/lib/**'],
};
