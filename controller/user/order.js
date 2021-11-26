const User = require('../../schema/user');

exports.Order = async(req, res) => {
    try {
        const user = await User.findById(req.user.id)
        if(!user) return res.status(400).json({msg: "User does not exist."})

        await User.findOneAndUpdate({_id: req.user.id}, {
            order: req.body.order
        })

        return res.json({msg: "Added to order"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}