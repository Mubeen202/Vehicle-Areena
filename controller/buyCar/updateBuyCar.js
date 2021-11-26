const BuyCar = require('../../schema/rentCarsModel')

exports.updateBuyCar = async (req, res) => {
  try {
    const {
        title,
        price,
        year,
        kmsDriven,
        carModel,
        gas,
        gearType,
        description,
        register,
        condition,
        content,
        images,
        company,
    } = req.body
    if (!images) return res.status(400).json({ msg: 'No image upload' })

    await BuyCar.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: title.toLowerCase(),
        price,
        year,
        kmsDriven,
        carModel,
        gas,
        gearType,
        description,
        register,
        condition,
        content,
        images,
        company,
      },
    )

    res.json({ msg: 'Updated a Vehicle.' })
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}
