const db = require('../services/db');

class PartnersModel {

    read = async () => {

        const query = `SELECT * from deliveryeats.tb_partner`

        const data = await db.execute(query)

        return data
    }

    getCourier = async (id) => {
        
        const query = `SELECT * FROM deliveryeats.tb_courier WHERE partner_id = ${id}`

        const data = await db.execute(query)

        return data

    }

    getProducts = async (id) => {
        
        const query = `SELECT * FROM deliveryeats.tb_food WHERE partner_id = ${id}`

        const data = await db.execute(query)

        return data

    }
    

}

module.exports = new PartnersModel()