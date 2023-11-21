const db = require('../services/db');

class UserModel {

    create = async(userData) => {
        const { email, password, name } = userData
        const query = `INSERT INTO deliveryeats.tb_user (email, password, name) VALUES ('${email}', '${password}', '${name}') `
        return await db.execute(query)
    }

    readByEmail = async (email) => {
        const query = `SELECT * FROM deliveryeats.tb_user WHERE email = '${email}'`
        const user = await db.execute(query)
        return user
    }

}

module.exports = new UserModel()