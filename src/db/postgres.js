const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')

class Postgres extends ICrud {
    constructor() {
        super()
        this._driver = null
        this._heroes = null
    }

    async defineModel() {
        
        this._heroes = this._driver.define('heroes', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                required: true,
                
            },
            power: {
                type: Sequelize.STRING,
                required: true,
                
            }
        }, {
            tableName: 'TB_HEROES_DC',
            freezeTablaName: false,
            timeStamps: false
        })
        await this._heroes.sync()
    }

    async connect() {
        this._driver = new Sequelize(
            'postgresheroesDCComics',
            'adminpostgres',
            'passwordpostgres',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorsAliases: false
            }
        )
        await this.defineModel()
    }

    async isConnect() {
        try {
            await this._driver.autheticate()
            return true;
        } catch (error) {
            console.log('Fail to postgres connect', error)
            return false
        }
    }
}

module.exports = Postgres