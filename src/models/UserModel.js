const db = require('../services/db');

class UserModel {

    list = async () => {
        const query = "SELECT * FROM mobile_smind.tb_usuarios"        
        const users = await db.execute(query)
        return users
    }

    login = async (user, password) => {
        const query = `SELECT id from mobile_smind.tb_usuarios WHERE login = '${user}' AND senha = '${password}'`
        const login = await db.execute(query);
        return login
    }

    cadastro = async(login, nome_usuario, senha) => {
        const query = `INSERT INTO mobile_smind.tb_usuarios (login, senha, nome_usuario) VALUES ('${login}', '${senha}', '${nome_usuario}') `;
        return await db.execute(query)
    }

}

module.exports = new UserModel()