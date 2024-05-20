const { PartnersModel } = require('../models')

class PartnersController {

    read = async (_, res) => {
        try{
            const partners = await PartnersModel.read()
            
            if(partners){
                const promises = partners.map(async (item) => {
                    item.couriers = await PartnersModel.getCourier(item.id)
                    item.products = await PartnersModel.getProducts(item.id)
                    return item;
                });
    
                const partnersWithCouriers = await Promise.all(promises)
    
                res.status(200).json({ success: true, data: partnersWithCouriers })
            }
        }catch (error){
            res.status(500).json({
                success: false,
                msg: 'Ocorreu um erro ao carregar os items'
            })
        }
    }

  
}

module.exports = new PartnersController();
