const {product} = require('../models/index')
class Product{
    static show(req,res){
        res.send('test')
        
    }

    // static formAdd(req,res){
        
    // }

    static postAdd(req,res){
        let data =
        {
            name:req.body.name,
            quantity:+req.body.quantity,
            price:+req.body.price,
            categoryId:+req.body.categoryId,
        }

        product.create(data)
        .then(data =>{
            res.send (data)
        })
        .catch(err =>{
            res.send(err)
        })
    }
}

module.exports = Product