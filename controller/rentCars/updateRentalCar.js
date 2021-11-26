const RentCar = require('../../schema/rentCarsModel')

exports.updateRentalCar = async (req, res) => {
  try {
    const {
      title,
      price: dailyPrice,
      weeklyPrice,
      monthlyPrice,
      mileage,
      gas,
      gearType,
      description,
      content,
      images,
      company,
      seats
    } = req.body
    if (!images) return res.status(400).json({ msg: 'No image upload' })

    await RentCar.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: title.toUpperCase(),
        price: dailyPrice,
        weeklyPrice,
        monthlyPrice,
        mileage,
        gas,
        gearType,
        description,
        content,
        images,
        company,
        seats
      },
    )

    res.json({ msg: 'Updated a Rental Vehicle.' })
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}
