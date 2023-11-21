const { FoodModel } = require('../models')

class FoodController {

    read = async (req, res) => {
        try{
            const food = await FoodModel.read()
            
            if(food){
                res.status(200).json({success: true, data: food})
            }
        }catch (error){
            res.status(500).json({
                success: false,
                msg: 'Ocorreu um erro ao carregar itens'
            })
        }
    }

    readFavorites = async (req, res) => {
        try{
            const food = await FoodModel.read('favorite = 1')
            
            if(food){
                res.status(200).json({success: true, data: food})
            }
            
        }catch (error){
            res.status(500).json({
                success: false,
                msg: 'Ocorreu um erro ao carregar itens'
            })
        }
    }
  
}

module.exports = new FoodController();
