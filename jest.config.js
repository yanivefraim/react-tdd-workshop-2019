module.exports = {
  projects: [
    {
      displayName: 'e2e',
      preset: 'jest-puppeteer',
      testMatch: ['<rootDir>/**/*.e2e.+(js|ts){,x}']
    },
    {
      displayName: 'jsdom',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/**/*.test.js'],
      transform: {
        '^.+\\.(js|jsx)$': require.resolve('babel-jest'),
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
        '^(?!.*\\.(js|jsx|mjs|css|json)$)':
          '<rootDir>/config/jest/fileTransform.js'
      }
    }
  ]
};
