
var wallabyWebpack = require('wallaby-webpack');

module.exports = (wallaby) => {

      return {
        files: [
          'src/**/*.ts',
          'package.json'
        ],

        tests: ['tests/**/*.test.ts'],

        debug: true,
      
        env: {
          type: 'node',
          runner: 'node'
        },

        testFramework: 'jest'
    }
}  