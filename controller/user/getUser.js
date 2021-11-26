const User = require('../../schema/user');

exports.getUser = async(req, res) => {
    try {
        const user = await (await User.findById(req.user.id))
        if (!user) return res.status(400).json({ msg: "User does not exist." })
        res.json(user);
    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }
}