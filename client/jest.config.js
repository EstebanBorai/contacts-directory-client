module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/__mocks__/'
  ],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '\\.(css|less)$': 'identity-obj-proxy'
  }
};
