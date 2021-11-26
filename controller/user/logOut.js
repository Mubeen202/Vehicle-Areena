const login = require('./login1');

exports.logOut = async(req, res) => {
    try {
        res.clearCookie('refreshtoken', { path: '/user/refresh_token' });
        res.json({ msg: "Logged OUt" })



    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }
}