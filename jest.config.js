module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{ts,tsx}',
      '!<rootDir>/src/main/**/*',
      '!<rootDir>/src/**/index.ts',
      '!**/*.d.ts'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'node'
  }
