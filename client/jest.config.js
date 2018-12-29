module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '\\.(css|less)$': 'identity-obj-proxy'
  }
};
