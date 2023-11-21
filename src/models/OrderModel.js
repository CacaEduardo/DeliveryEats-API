const db = require('../services/db');

class OrderModel {

    readByUserId = async (id) => {

        const query = `SELECT f.delivery_time, f.delivery_price, f.rating, f.favorite, f.place, f.item, o.amount FROM deliveryeats.tb_order o
        INNER JOIN deliveryeats.tb_food f ON f.id = o.food_id
        WHERE o.user_id = ${id}`

        const data = await db.execute(query)

        return data
    }

    create = async (user_id, food_id, qtd) => {

        const query = `INSERT INTO deliveryeats.tb_order (user_id, food_id, amount) VALUES (${user_id}, ${food_id}, '${qtd}')`

        const data = await db.execute(query)
        
        return data
    }

}

module.exports = new OrderModel()