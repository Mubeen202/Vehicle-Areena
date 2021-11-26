const User = require('../../schema/user');
const bcrypt = require('bcrypt');
const { createAccessToken } = require('./helper/AcessToken')
const { createRefreshToken } = require('./helper/refreshToken')

exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        // //if user doesnot exists
        if (!user) return res.status(400).json({msg: "user not defined."})
        
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({msg: "incorrect password."})

        const accessToken = createAccessToken({ id: user._id });
        const refreshtoken = createRefreshToken({ id: user._id })

        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            path: '/user/refresh_token'
        })

        res.json({ accessToken });


    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }
}