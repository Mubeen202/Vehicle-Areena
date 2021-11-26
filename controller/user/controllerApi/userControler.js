const { login } = require('../login1')
const { getUser } = require('../getUser')
const { logOut } = require('../logOut')
const { refreshToken } = require('../refreshToken')
const { registerUser } = require('../registerUser')
const { Order } = require('../order')
const { History } = require('../history')


module.exports = {
    login,
    getUser,
    logOut,
    refreshToken,
    registerUser,
    Order,
    History


}