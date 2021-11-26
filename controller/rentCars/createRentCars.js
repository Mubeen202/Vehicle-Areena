const RentCar = require('../../schema/rentCarsModel')

exports.createRentCar = async (req, res) => {
  try {
    const {
      rentCar_id,
      title,
      dailyPrice,
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

    const rentCar = await RentCar.findOne({ rentCar_id })
    if (rentCar)
      return res.status(400).json({ msg: 'This vehicle already exists.' })

    const newRentCar = new RentCar({
      rentCar_id,
      title: title.toUpperCase(),
      dailyPrice,
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
    })

    await newRentCar.save()
    res.json({ msg: 'Created a vehicle for rent.' })
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}
