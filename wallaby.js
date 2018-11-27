
var wallabyWebpack = require('wallaby-webpack');

module.exports = (wallaby) => {

      return {
        files: [
          'src/**/*.ts',
          'package.json', 
          '!src/**/__tests__/*.ts'
        ],

        tests: ['tests/**/__tests__/*.ts'],

        debug: true,
      
        env: {
          type: 'node',
          runner: 'node'
        },

        testFramework: 'jest'
    }
}  