const deepmerge = require('deepmerge');

const baseConfig = require('../../../../jest.config.base');

module.exports = deepmerge(baseConfig, {
  preset: '@metamask/snaps-jest',

  // Since `@metamask/snaps-jest` runs in the browser, we can't collect
  // coverage information.
  collectCoverage: false,

  // This is required for the tests to run inside the `MetaMask/snaps`
  // repository. You don't need this in your own project.
  moduleNameMapper: {
    '^@metamask/(.+)/production/jsx-runtime': [
      '<rootDir>/../../../$1/src/jsx/production/jsx-runtime',
      '<rootDir>/../../../../node_modules/@metamask/$1/jsx/production/jsx-runtime',
      '<rootDir>/node_modules/@metamask/$1/jsx/production/jsx-runtime',
    ],
    '^@metamask/(.+)/jsx': [
      '<rootDir>/../../../$1/src/jsx',
      '<rootDir>/../../../../node_modules/@metamask/$1/jsx',
      '<rootDir>/node_modules/@metamask/$1/jsx',
    ],
    '^@metamask/(.+)/node$': [
      '<rootDir>/../../../$1/src/node',
      '<rootDir>/../../../../node_modules/@metamask/$1/node',
      '<rootDir>/node_modules/@metamask/$1/node',
    ],
    '^@metamask/(.+)$': [
      '<rootDir>/../../../$1/src',
      '<rootDir>/../../../../node_modules/@metamask/$1',
      '<rootDir>/node_modules/@metamask/$1',
    ],
  },
});
