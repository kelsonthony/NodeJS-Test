//class to exceptions
class NotImplementedException extends Error { 
    constructor() {
        super("Not Implemented Expection")
    }

}
//crud
class Icrud {
    
    create(item) {
        throw new NotImplementedException()
    }

    read(query) {
        throw new NotImplementedException()
    }

    update(id, item) {
        throw new NotImplementedException()
    }

    delete(id) {
        throw new NotImplementedException()
    }
}
//mongodb connect
class MongoDB extends Icrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('The item was salved')
    }
}
//postgtres connect
class Postgres extends Icrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('The item was salved')
    }
}
//context to our strategy
class ContextStrategy {
    constructor(strategy) {
        this._database = strategy
    }
    create(item) {
        return this._database.create(item)
    }

    read(item) {
        return this._database.read(item)
    }

    update(id, item) {
        return this._database.update(id, item)
    }

    delete(id) {
        return this._database.delete(id)
    }
}

//create the connections
const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()