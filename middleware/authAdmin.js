const jwt = require('jsonwebtoken');
const userModel = require('../schema/user');

const authAdmin = async(req, res, next) => {
    try {
        const user = await userModel.findOne({
            _id: req.user.id
        })
        if (user.role == 0)
            return res.status(400).json({ msg: "Admin access is denied" })
        next()

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
module.exports = authAdmin;