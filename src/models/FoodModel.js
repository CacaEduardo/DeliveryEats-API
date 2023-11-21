const db = require('../services/db');

class FoodModel {

    read = async (where) => {

        let condition = ''

        if(where){
            condition = `WHERE ${where}`
        }

        const query = `SELECT * FROM deliveryeats.tb_food ${condition}`

        const food = await db.execute(query)

        return food
    }

}

module.exports = new FoodModel()