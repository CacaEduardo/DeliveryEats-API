const { OrderModel} = require('../models')

class OrderController {

    readByUserId = async (req, res) => {
        try{
            const { user_id } = req.params

            const orders = await OrderModel.readByUserId(user_id)

            if(orders){
                res.status(200).json({
                    success: true,
                    data: orders
                })
            }

        }catch(error){
            res.status(500).json({
                success:false,
                msg: 'Ocorreu um erro'
            })
        }
    }

    create = async (req, res) => {
        try{
            const { order } = req.body
            const { user_id, food_id, qtd } = order

            const response = await OrderModel.create(user_id, food_id, qtd)

            if(response){
                res.status(200).json({
                    success: true,
                    msg: 'Pedido realizado'
                })
            }

        }catch(error){
            res.status(500).json({
                success:false,
                msg: 'Ocorreu um erro'
            })
        }
    }
  
}

module.exports = new OrderController();