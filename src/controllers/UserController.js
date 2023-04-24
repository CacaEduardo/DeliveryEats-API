const { UserModel } = require("../models");

class UserController {
  list = async (req, res) => {
    const users = await UserModel.list();
    res.status(200).json(users);
  };

  login = async (req, res) => {
    
    try{
      const { userData } = req.body
      const valid = await UserModel.login(userData.user, userData.password)
  
      if(valid.length > 0) {
        res.status(200).json({
          isValid: true,
        });
      } else {
        res.status(200).json({
          isValid: false,
        });
      }
    }catch{
      res.status(404).json('Ocorreu um erro')
    }

  };

  cadastro = async (req, res) => {
    try {
      const {newUser} = req.body
      const data = await UserModel.cadastro(newUser.login, newUser.nome_usuario, newUser.senha)

      if(data){
        res.status(200).json('Usuário cadastrado com sucesso')
      }
    }catch{
      res.status(404).json('Ocorreu um erro ao realizar o cadastro')
    }
  }
}

module.exports = new UserController();
