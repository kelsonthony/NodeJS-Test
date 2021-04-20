const assert = require('assert')

const Postgres = require('./../db/postgres')

const Context = require('./../db/base/contextStrategy')

const context = new Context(new Postgres())

describe('Postgres Strategy Tests Starts', function() {
    this.timeout(Infinity)
    this.beforeAll( async() => {
        await context.connect()
    })  
    
    it('Postgres Connection',  async () => {
        
        const result = await context.isConnect()

        console.log('result', result)

        assert.deepStrictEqual(result, true)
    });
    
});