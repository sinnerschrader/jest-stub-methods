// @ts-check

function setup({testFramework}) {
  const jestConfig = require('./jest.config');

  testFramework.configure(jestConfig);
}

module.exports = () => ({
  files: ['jest.config.js', 'src/**/*.ts', '!src/**/*.test.ts'],
  tests: ['src/**/*.test.ts'],
  env: {type: 'node', runner: 'node'},
  setup,
  testFramework: 'jest'
});
