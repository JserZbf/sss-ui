module.exports = {
    verbose: true,
    testEnvironment: 'jest-environment-puppeteer', // 环境
    setupFiles: ['./tests/setup.js'],
    preset: 'jest-puppeteer',
    testMatch: ['**/e2e/**/*.(spec|test).(js|ts|jsx|tsx)'],
  };