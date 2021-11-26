const Category = require('../../schema/categoryModel')

exports.updateCategory= async(req, res) =>{
    try {
        const {name} = req.body;
        await Category.findOneAndUpdate({_id: req.params.id}, {name})

        res.json({msg: "Updated a category"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}