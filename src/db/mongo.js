const Icrud = require('./../db/interfaces/interfaceCrud')

class MongoDB extends Icrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('The item was salved')
    }
}

module.exports = MongoDB