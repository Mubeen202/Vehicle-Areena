const BuyCar = require('../../schema/buyCar')

exports.deleteBuyCar = async (req, res) => {
  try {
    await BuyCar.findByIdAndDelete(req.params.id)
    res.json({ msg: 'Deleted Buy Vehicle.' })
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}
