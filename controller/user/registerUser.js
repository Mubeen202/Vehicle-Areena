const User = require('../../schema/user');
const bcrypt = require('bcrypt');
const { createAccessToken } = require('./helper/AcessToken')
const { createRefreshToken } = require('./helper/refreshToken')

exports.registerUser = async(req, res) => {
    try {
        const {username, email, password } = req.body;
        const user = await User.findOne({ email });
        //if user exixts
        if (user) return res.status(400).json({ msg: "this user already exixts" });
        //password 6 charaters
        if (password.length < 6) return res.status(500).json({ msg: "password at least 6 character long" })
        
        //password encription
        const passwordHash = await bcrypt.hash(password, 10);
        //res.json({ password, passwordHash });
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });
        await newUser.save();
        
        //then create jsonwebtoken
        const accessToken = createAccessToken({ id: newUser._id });
        const refreshtoken = createRefreshToken({ id: newUser._id })

        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            path: '/user/refresh_token'
        })
       
        res.json({ accessToken });
    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }
}