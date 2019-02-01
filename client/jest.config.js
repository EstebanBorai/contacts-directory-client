module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/__mocks__/'
  ],
  moduleNameMapper: {
    '^api(.*)$': '<rootDir>/src/api$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^contexts(.*)$': '<rootDir>/src/contexts$1',
    '^helpers(.*)$': '<rootDir>/src/helpers$1'
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.(css|scss)$': '<rootDir>/config/jest/mediaFileTransformer.js',
    '\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$':
      '<rootDir>/config/jest/mediaFileTransformer.js'
  }
};
