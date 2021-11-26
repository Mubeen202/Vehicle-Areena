const RentCar = require('../../schema/rentCarsModel')

exports.deleteRentCar = async (req, res) => {
  try {
    await RentCar.findByIdAndDelete(req.params.id)
    res.json({ msg: 'Deleted a Rental Vehicle.' })
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}
