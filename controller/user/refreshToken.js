const { createAccessToken } = require('./helper/AcessToken')
const User = require('../../schema/user')
const jwt = require('jsonwebtoken');
const { createRefreshToken } = require('./helper/refreshToken');


exports.refreshToken = async(req, res) => {
    try {
        const user = new User();
        const refreshtoken = createRefreshToken({ id: user._id })
        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            path: '/user/refresh_token'
        })

        const rf_token = req.cookies.refreshtoken;
        if (!rf_token) return res.status(400).json({ msg: "Please Login or Register" })
        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(400).json({ msg: "Please Login or Register" })

            const accessToken = createAccessToken({ id: user.id })

            res.json({ accessToken })
        })

    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }
}