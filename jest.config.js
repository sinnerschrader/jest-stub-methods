// @ts-check

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {branches: 100, functions: 100, lines: 100, statements: 100}
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  modulePathIgnorePatterns: ['/lib'],
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  transform: {'\\.tsx?$': 'ts-jest'}
};
