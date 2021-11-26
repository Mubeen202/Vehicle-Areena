const Payments = require('../../schema/paymentModel')
const Users = require('../../schema/user')
const Products = require('../../schema/rentCarsModel')


const paymentCtrl = {
    getPayments: async(req, res) =>{
        try {
            const payments = await Payments.find()
            res.json(payments)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createPayment: async(req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('username email')
            if(!user) return res.status(400).json({msg: "User does not exist."})

            const {Order, paymentID, address} = req.body;

            const {_id, username, email} = user;



            const newPayment = new Payments({
                user_id: _id, username, email, Order, paymentID, address
            })

            // Order.filter(item => {
            //     return sold(item._id, item.quantity, item.sold)
            // })

            console.log(newPayment)
            await newPayment.save()
            res.json({msg: "Payment Succes!"})
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

// const sold = async (id, quantity, oldSold) =>{
//     await Products.findOneAndUpdate({_id: id}, {
//         sold: quantity + oldSold
//     })
// }


module.exports = paymentCtrl
