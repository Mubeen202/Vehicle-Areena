const User = require('../../schema/user');

exports.History = async(req, res) => {
    try {
        const history = await Payments.find({user_id: req.user.id})

        res.json(history)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}