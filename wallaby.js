
var wallabyWebpack = require('wallaby-webpack');

module.exports = (wallaby) => {
      return {
        files: [
          'src/**/*.ts',
          'package.json'
        ],

        tests: ['tests/**/*.test.ts'],
       
        env: {
          type: 'node',
          runner: 'node'
        },
        
        debug: true,
        testFramework: 'jest'
    }
}  