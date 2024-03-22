const { default: setup, project } = require('@tokopedia/skipper-jest');

const swcc = { jsc: { transform: { react: { runtime: 'automatic', importSource: '@emotion/react' } } } };

module.exports = setup({
  projects: [
    project({
      swcc: swcc,
      displayName: 'CLIENT',
      testEnvironment: 'jsdom',
      testMatch: [
        '<rootDir>/src/**/__tests__/**/*.(test|spec).(js|ts|tsx)',
        '!<rootDir>/src/(server|config)/**/__tests__/**/*.(test|spec).(js|ts|tsx)',
      ],
    }),
    project({
      swcc: swcc,
      displayName: 'SERVER',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/(server|config)/**/__tests__/**/*.(test|spec).(js|ts|tsx)'],
    }),
  ],
});
