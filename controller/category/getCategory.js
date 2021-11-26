const Category = require('../../schema/categoryModel')
exports.getCategory = async(req, res) => {
    try {
        const categories = await Category.find()
        res.json(categories)


    } catch (error) {
        return res.status(400).json({ msg: error.message })
    }
}