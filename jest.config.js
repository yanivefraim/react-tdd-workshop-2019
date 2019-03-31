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
      testMatch: ['<rootDir>/**/*.spec.js']
      // transform: {
      //   '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
      //   '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
      //   '^(?!.*\\.(js|jsx|mjs|css|json)$)':
      //     '<rootDir>/config/jest/fileTransform.js'
      // }
    }
  ]
};
