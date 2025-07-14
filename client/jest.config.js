module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  testMatch: ['**/src/tests/**/*.test.jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
