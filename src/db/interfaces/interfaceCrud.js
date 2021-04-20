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

    isConnect() {
        throw new NotImplementedException()
    }

}

module.exports = Icrud