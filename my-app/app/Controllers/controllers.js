'use strict'
const Products = use('App/Models/User.js');

class UsersControllers{
    async index({ response, view}){
       
        const products = (await Products.all()).toJSON()
        return view.render("users",{products})
    }
}
module.exports = UsersControllers