const Category = require('../../schema/categoryModel')

exports.deleteCategory= async(req, res) =>{
    try {
        await Category.findByIdAndDelete(req.params.id)
        console.log("this is running")
        res.json({msg: "Deleted a Category"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}