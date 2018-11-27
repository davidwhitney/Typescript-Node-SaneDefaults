module.exports = (wallaby) => {

      return {
        files: [
          'src/**/*.ts'
        ],
        tests: [
          'tests/**/*.test.ts'
        ],
        debug: true,
      
        env: {
          type: 'node',
          runner: 'node'
        },
    
        testFramework: 'jest'
    }
}  